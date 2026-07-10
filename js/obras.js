const obras = [
  {
    titulo: 'O anúncio do Grande Torneio Galáctico de Card Game',
    autor: 'Neto',
    data: '2026-07-10',
    dataLabel: '10 de julho de 2026',
    categoria: 'Reportagem fictícia',
    chamadaCategoria: 'Última reportagem fictícia',
    resumo: 'Milhares de naves retornam à Terra, a Lua entra em disputa e uma possível invasão se transforma no anúncio do maior torneio de card game do universo conhecido.',
    url: './obras/anuncio-grande-torneio-galactico-card-game/index.html',
    imagem: './obras/anuncio-grande-torneio-galactico-card-game/assets/thumb-grande-torneio-galactico.svg',
    imagemAlt: 'Plantão do Canal 5 sobre a chegada dos Galurianos e o anúncio do torneio galáctico',
    cta: 'Ler transmissão',
    tags: ['reportagem fictícia', 'série', 'grande torneio galáctico de card game', 'telejornal']
  },
  {
    titulo: 'O caso H4r78lump3r7 Fl0657r0p3d',
    autor: 'Neto',
    data: '2026-07-09',
    dataLabel: '9 de julho de 2026',
    categoria: 'Reportagem fictícia',
    chamadaCategoria: 'Última reportagem fictícia',
    resumo: 'Um relatório jornalístico sobre a carta Desmembramento Permanente, uma anomalia neuropsicogravitacional e o projeto artístico bilíngue recuperado de um designer sintético.',
    url: './obras/caso-h4r78lump3r7-desmembramento-permanente/index.html',
    imagem: './obras/caso-h4r78lump3r7-desmembramento-permanente/assets/thumb-desmembramento-permanente.webp',
    imagemAlt: 'Arte da carta Desmembramento Permanente com Bethaniano e Alpha TRAPPIST',
    cta: 'Ler relatório',
    tags: ['reportagem fictícia', 'ficção documental', 'projeto artístico', 'card game', 'série', 'grande torneio galáctico de card game']
  },
  {
    titulo: 'Vença o campeão nacional',
    autor: 'Neto',
    data: '2026-07-03',
    dataLabel: '3 de julho de 2026',
    categoria: 'Jogos narrativos',
    chamadaCategoria: 'Último jogo narrativo',
    resumo: 'Um mini game de Flesh and Blood em que a leitura correta da mesa decide a final contra o campeão nacional.',
    url: './obras/venca-o-campeao-nacional/index.html',
    imagem: './obras/venca-o-campeao-nacional/assets/arena-de-batalha.png',
    imagemAlt: 'Arena de batalha do mini game Vença o campeão nacional',
    cta: 'Jogar',
    tags: ['jogo narrativo', 'flesh and blood', 'final de partida']
  },
  {
    titulo: 'Command and Conquer',
    autor: 'Neto',
    data: '2026-07-02',
    dataLabel: '2 de julho de 2026',
    categoria: 'Séries',
    chamadaCategoria: 'Última série',
    resumo: 'JP compra uma carta especial por um preço muito abaixo do mercado. Quando ela entra no deck, sua sorte muda — e a carta começa a parecer mais importante do que deveria.',
    url: './obras/command-and-conquer/',
    imagem: 'assets/command-and-conquer-card-art.png',
    imagemAlt: 'Arte da obra Command and Conquer',
    cta: 'Ler',
    tags: ['série', 'visual novel', 'card game']
  },
  {
    titulo: 'Financiamento coletivo para salvar todas as cartas colecionáveis existentes',
    autor: 'Neto',
    data: '2026-05-12',
    dataLabel: '12 de maio de 2026',
    categoria: 'Ficção documental',
    chamadaCategoria: 'Última ficção documental',
    resumo: 'Uma campanha fictícia do NossoDinheiro para preservar, catalogar e proteger todas as cartas colecionáveis já impressas. Um projeto que começa como piada de colecionador e termina com cara de documento público impossível.',
    url: './obras/financiamento-coletivo-cartas-nosso-dinheiro/index.html',
    imagem: 'assets/nosso-dinheiro-logo.svg',
    imagemAlt: 'Logo fictício NossoDinheiro',
    cta: 'Ler texto',
    tags: ['favorita', 'destaque', 'ficção documental', 'campanha falsa']
  }
];

const categoriasPrincipais = [
  'Ficção documental',
  'Reportagem fictícia',
  'Contos',
  'Cartas',
  'Séries',
  'Jogos narrativos'
];

const normalizar = (valor) => String(valor || '').trim().toLowerCase();
const ordenarPorData = (lista) => [...lista].sort((a, b) => new Date(b.data) - new Date(a.data));
const obrasOrdenadas = ordenarPorData(obras);
const temTag = (obra, tag) => (obra.tags || []).some((item) => normalizar(item) === normalizar(tag));

const formatarTags = (obra) => {
  const tags = obra.tags || [];
  if (!tags.length) return '';

  return `<div class="tag-list" aria-label="Tags">${tags.map((tag) => `<span class="tag tag-muted">${tag}</span>`).join('')}</div>`;
};

const criarImagem = (obra, classe, esconderDecorativa = false) => {
  if (!obra.imagem) return '';

  const imagemContain = /\.(svg|png)$/i.test(obra.imagem) && obra.imagem.includes('logo');
  const classeFinal = `${classe}${imagemContain ? ' is-contain' : ''}`;
  const aria = esconderDecorativa ? 'aria-hidden="true" tabindex="-1"' : `aria-label="Abrir ${obra.titulo}"`;
  const alt = esconderDecorativa ? '' : (obra.imagemAlt || obra.titulo);

  return `
    <a class="${classeFinal}" href="${obra.url}" ${aria}>
      <img src="${obra.imagem}" alt="${alt}" loading="lazy" />
    </a>
  `;
};

const montarDestaque = () => {
  const root = document.querySelector('#spotlightRoot');
  if (!root) return;

  const favoritas = obrasOrdenadas.filter((obra) => temTag(obra, 'favorita') || temTag(obra, 'destaque'));
  const obra = favoritas[0] || obrasOrdenadas[0];
  const tagsDeControle = favoritas.length ? '<span class="tag tag-featured">Destaque</span>' : '<span class="tag tag-featured">Mais recente</span>';

  root.innerHTML = `
    <article class="spotlight-grid" data-category="${obra.categoria}">
      ${criarImagem(obra, 'spotlight-media')}
      <div class="spotlight-body">
        <div class="meta-row">
          ${tagsDeControle}
          <span>${obra.categoria}</span>
        </div>
        <h2 id="destaque-title">${obra.titulo}</h2>
        <p class="byline">por ${obra.autor} · ${obra.dataLabel} · ${obra.categoria}</p>
        <p>${obra.resumo}</p>
        ${formatarTags(obra)}
        <a class="read-link" href="${obra.url}">${obra.cta || 'Ler'} →</a>
      </div>
    </article>
  `;
};

const montarUltimosPorCategoria = () => {
  const root = document.querySelector('#latestByCategory');
  if (!root) return;

  const blocos = categoriasPrincipais.map((categoria) => {
    const obra = obrasOrdenadas.find((item) => item.categoria === categoria);
    const id = categoria
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    if (!obra) {
      return `
        <article class="latest-item is-empty" id="${id}" data-category="${categoria}">
          <p class="category-label">${categoria}</p>
          <h3>Em preparação</h3>
          <p class="byline">Mesa 42 · Sem data · ${categoria}</p>
          <p>Espaço reservado para novas obras dessa categoria.</p>
        </article>
      `;
    }

    return `
      <article class="latest-item" id="${id}" data-category="${obra.categoria}">
        <p class="category-label">${obra.chamadaCategoria || obra.categoria}</p>
        <h3><a href="${obra.url}">${obra.titulo}</a></h3>
        <p class="byline">${obra.autor} · ${obra.dataLabel} · ${obra.categoria}</p>
        <p>${obra.resumo}</p>
        <a class="text-link" href="${obra.url}">${obra.cta || 'Ler'} →</a>
      </article>
    `;
  });

  root.innerHTML = blocos.join('');
};

const montarFiltros = () => {
  const root = document.querySelector('#archiveFilters');
  if (!root) return;

  const categoriasUsadas = [...new Set(obrasOrdenadas.map((obra) => obra.categoria))];
  const categorias = categoriasPrincipais.filter((categoria) => categoriasUsadas.includes(categoria));

  root.innerHTML = [
    '<button class="filter-button active" type="button" data-filter="todas">Todos</button>',
    ...categorias.map((categoria) => `<button class="filter-button" type="button" data-filter="${categoria}">${categoria}</button>`)
  ].join('');
};

const montarAcervo = (filtro = 'todas') => {
  const root = document.querySelector('#archiveList');
  if (!root) return;

  const lista = obrasOrdenadas
    .filter((obra) => filtro === 'todas' || obra.categoria === filtro)
    .slice(0, 10);

  if (!lista.length) {
    root.innerHTML = '<p class="empty-state">Nenhuma obra encontrada para este filtro.</p>';
    return;
  }

  root.innerHTML = lista.map((obra) => `
    <article class="archive-entry" data-category="${obra.categoria}">
      ${criarImagem(obra, 'archive-thumb', true)}
      <div class="archive-content">
        <h3><a href="${obra.url}">${obra.titulo}</a></h3>
        <p class="byline">${obra.autor} · ${obra.dataLabel} · ${obra.categoria}</p>
        <p>${obra.resumo}</p>
        ${formatarTags(obra)}
        <a class="text-link" href="${obra.url}">${obra.cta || 'Ler'} →</a>
      </div>
    </article>
  `).join('');
};

const ativarFiltros = () => {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((item) => item.classList.remove('active'));
      button.classList.add('active');

      montarAcervo(filter);
    });
  });
};

montarDestaque();
montarUltimosPorCategoria();
montarFiltros();
montarAcervo();
ativarFiltros();
