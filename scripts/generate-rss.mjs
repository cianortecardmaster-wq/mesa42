import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDirectory, '..');
const worksFile = path.join(projectRoot, 'js', 'obras-data.js');
const cnameFile = path.join(projectRoot, 'CNAME');
const outputFile = path.join(projectRoot, 'feed.xml');

function fail(message) {
  console.error(`Erro ao gerar o RSS: ${message}`);
  process.exit(1);
}

function readText(filePath, label) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    fail(`não foi possível ler ${label}: ${error.message}`);
  }
}

function escapeXml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function cdata(value = '') {
  return `<![CDATA[${String(value).replaceAll(']]>', ']]]]><![CDATA[>')}]]>`;
}

function absoluteUrl(relativeOrAbsolute, baseUrl) {
  try {
    return new URL(relativeOrAbsolute, baseUrl).href;
  } catch {
    fail(`URL inválida encontrada no cadastro: ${relativeOrAbsolute}`);
  }
}

function publicationDate(dateValue) {
  const text = String(dateValue || '').trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(text)) {
    fail(`data inválida "${text}". Use o formato AAAA-MM-DD em js/obras-data.js.`);
  }

  // Meio-dia no horário de Brasília evita mudança acidental de dia ao converter para GMT.
  const date = new Date(`${text}T12:00:00-03:00`);

  if (Number.isNaN(date.getTime())) {
    fail(`não foi possível interpretar a data "${text}".`);
  }

  return date;
}

function imageMimeType(imageUrl) {
  const extension = path.extname(new URL(imageUrl).pathname).toLowerCase();
  const types = {
    '.avif': 'image/avif',
    '.gif': 'image/gif',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp'
  };

  return types[extension] || 'image/*';
}

const domain = readText(cnameFile, 'CNAME').trim().replace(/^https?:\/\//, '').replace(/\/$/, '');
if (!domain) fail('o arquivo CNAME está vazio.');

const baseUrl = `https://${domain}/`;
const source = readText(worksFile, 'js/obras-data.js');
const sandbox = { window: {} };

try {
  vm.runInNewContext(source, sandbox, { filename: worksFile });
} catch (error) {
  fail(`js/obras-data.js contém JavaScript inválido: ${error.message}`);
}

const works = sandbox.window.MESA42_OBRAS;
if (!Array.isArray(works)) {
  fail('js/obras-data.js não definiu window.MESA42_OBRAS como uma lista.');
}

const requiredFields = ['titulo', 'data', 'categoria', 'resumo', 'url'];
works.forEach((work, index) => {
  for (const field of requiredFields) {
    if (!String(work?.[field] || '').trim()) {
      fail(`a obra ${index + 1} não possui o campo obrigatório "${field}".`);
    }
  }
});

const sortedWorks = [...works].sort(
  (a, b) => publicationDate(b.data).getTime() - publicationDate(a.data).getTime()
);

const latestDate = sortedWorks.length
  ? publicationDate(sortedWorks[0].data).toUTCString()
  : new Date('2026-01-01T12:00:00-03:00').toUTCString();

const items = sortedWorks.map((work) => {
  const pageUrl = absoluteUrl(work.url, baseUrl);
  const imageUrl = work.imagem ? absoluteUrl(work.imagem, baseUrl) : '';
  const author = String(work.autor || 'Mesa 42').trim();
  const callToAction = String(work.cta || 'Abrir obra').trim();
  const altText = String(work.imagemAlt || `Capa de ${work.titulo}`).trim();

  const categories = [...new Set([
    work.categoria,
    ...(Array.isArray(work.tipos) ? work.tipos : []),
    ...(Array.isArray(work.tags) ? work.tags : [])
  ].filter(Boolean).map((value) => String(value).trim()))];

  const imageHtml = imageUrl
    ? `<p><a href="${escapeHtml(pageUrl)}"><img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(altText)}" /></a></p>`
    : '';

  const itemHtml = [
    imageHtml,
    `<p>${escapeHtml(work.resumo)}</p>`,
    `<p><a href="${escapeHtml(pageUrl)}">${escapeHtml(callToAction)} no Mesa 42</a></p>`
  ].filter(Boolean).join('');

  const media = imageUrl
    ? `\n      <media:content url="${escapeXml(imageUrl)}" medium="image" type="${escapeXml(imageMimeType(imageUrl))}" />\n      <media:thumbnail url="${escapeXml(imageUrl)}" />`
    : '';

  const categoryXml = categories
    .map((category) => `\n      <category>${escapeXml(category)}</category>`)
    .join('');

  return `    <item>
      <title>${cdata(work.titulo)}</title>
      <link>${escapeXml(pageUrl)}</link>
      <guid isPermaLink="true">${escapeXml(pageUrl)}</guid>
      <pubDate>${publicationDate(work.data).toUTCString()}</pubDate>
      <dc:creator>${cdata(author)}</dc:creator>${categoryXml}
      <description>${cdata(itemHtml)}</description>
      <content:encoded>${cdata(itemHtml)}</content:encoded>${media}
    </item>`;
}).join('\n\n');

const channelImage = absoluteUrl('assets/logo-mesa-42.png', baseUrl);
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Mesa 42 — Novas obras</title>
    <link>${escapeXml(baseUrl)}</link>
    <description>Textos fantasiosos, documentos falsos, reportagens impossíveis, séries e experiências interativas do Mesa 42.</description>
    <language>pt-BR</language>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <generator>Mesa 42 RSS Generator</generator>
    <ttl>60</ttl>
    <atom:link href="${escapeXml(absoluteUrl('feed.xml', baseUrl))}" rel="self" type="application/rss+xml" />
    <image>
      <url>${escapeXml(channelImage)}</url>
      <title>Mesa 42</title>
      <link>${escapeXml(baseUrl)}</link>
    </image>

${items || '    <!-- Nenhuma obra cadastrada em js/obras-data.js. -->'}
  </channel>
</rss>
`;

fs.writeFileSync(outputFile, rss, 'utf8');
console.log(`RSS gerado com ${sortedWorks.length} obra(s): ${path.relative(projectRoot, outputFile)}`);
