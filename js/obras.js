const obras = [
  {
    titulo: 'O anúncio do Grande Torneio Galáctico de Card Game',
    autor: 'Neto',
    data: '2026-07-10',
    dataLabel: '10 de julho de 2026',
    categoria: 'Reportagem fictícia',
    resumo: 'Milhares de naves retornam à Terra, a Lua entra em disputa e uma possível invasão se transforma no anúncio do maior torneio de card game do universo conhecido.',
    url: './obras/anuncio-grande-torneio-galactico-card-game/index.html',
    imagem: './obras/anuncio-grande-torneio-galactico-card-game/assets/thumb-grande-torneio-galactico.svg',
    imagemAlt: 'Plantão do Canal 5 sobre a chegada dos Galurianos e o anúncio do torneio galáctico',
    cta: 'Ler transmissão',
    tags: ['reportagem fictícia', 'série', 'grande torneio galáctico', 'telejornal']
  },
  {
    titulo: 'O caso H4r78lump3r7 Fl0657r0p3d',
    autor: 'Neto',
    data: '2026-07-09',
    dataLabel: '9 de julho de 2026',
    categoria: 'Reportagem fictícia',
    resumo: 'Um relatório jornalístico sobre a carta Desmembramento Permanente, uma anomalia neuropsicogravitacional e o projeto artístico bilíngue recuperado de um designer sintético.',
    url: './obras/caso-h4r78lump3r7-desmembramento-permanente/index.html',
    imagem: './obras/caso-h4r78lump3r7-desmembramento-permanente/assets/thumb-desmembramento-permanente.webp',
    imagemAlt: 'Arte da carta Desmembramento Permanente com Bethaniano e Alpha TRAPPIST',
    cta: 'Ler relatório',
    tags: ['ficção documental', 'projeto artístico', 'card game', 'série']
  },
  {
    titulo: 'Vença o campeão nacional',
    autor: 'Neto',
    data: '2026-07-03',
    dataLabel: '3 de julho de 2026',
    categoria: 'Jogos narrativos',
    resumo: 'Um mini game de Flesh and Blood em que a leitura correta da mesa decide a final contra o campeão nacional.',
    url: './obras/venca-o-campeao-nacional/index.html',
    imagem: './obras/venca-o-campeao-nacional/assets/arena-de-batalha.png',
    imagemAlt: 'Arena de batalha do mini game Vença o campeão nacional',
    cta: 'Jogar',
    tags: ['jogo narrativo', 'Flesh and Blood', 'final de partida']
  },
  {
    titulo: 'Command and Conquer',
    autor: 'Neto',
    data: '2026-07-02',
    dataLabel: '2 de julho de 2026',
    categoria: 'Séries',
    resumo: 'JP compra uma carta especial por um preço muito abaixo do mercado. Quando ela entra no deck, sua sorte muda — e a carta começa a parecer mais importante do que deveria.',
    url: './obras/command-and-conquer/',
    imagem: './assets/command-and-conquer-card-art.png',
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
    resumo: 'Uma campanha fictícia do NossoDinheiro para preservar, catalogar e proteger todas as cartas colecionáveis já impressas. Um projeto que começa como piada de colecionador e termina com cara de documento público impossível.',
    url: './obras/financiamento-coletivo-cartas-nosso-dinheiro/index.html',
    imagem: './assets/nosso-dinheiro-logo.svg',
    imagemAlt: 'Logo fictício NossoDinheiro',
    cta: 'Ler texto',
    tags: ['destaque', 'ficção documental', 'campanha falsa']
  }
];

const normalizar = (valor) => String(valor || '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .trim();

const obrasOrdenadas = [...obras].sort((a, b) => new Date(b.data) - new Date(a.data));

const state = {
  busca: '',
  categoria: 'todas'
};

const icons = {
  user: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',
  calendar: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/></svg>',
  folder: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h7l2 2h9v11H3V6Z"/></svg>'
};

const tagEhDestaque = (tag) => ['destaque', 'favorita'].includes(normalizar(tag));

const tagsVisiveis = (obra) => {
  const tags = obra.tags || [];
  const destaque = tags.find(tagEhDestaque);
  const comuns = tags.filter((tag) => !tagEhDestaque(tag)).slice(0, destaque ? 2 : 3);
  return destaque ? [destaque, ...comuns] : comuns;
};

const imagemContain = (imagem) => /logo|nosso-dinheiro/i.test(imagem || '');

const montarTags = (obra) => `
  <div class="tag-list" aria-label="Tags da obra">
    ${tagsVisiveis(obra).map((tag) => `<span class="tag${tagEhDestaque(tag) ? ' is-featured' : ''}">${tag}</span>`).join('')}
  </div>
`;

const montarCard = (obra) => `
  <article class="work-card" data-url="${obra.url}" tabindex="0" role="link" aria-label="Abrir ${obra.titulo}">
    <a class="work-media${imagemContain(obra.imagem) ? ' is-contain' : ''}" href="${obra.url}" tabindex="-1" aria-hidden="true">
      <img src="${obra.imagem}" alt="" loading="lazy" />
    </a>
    <div class="work-content">
      ${montarTags(obra)}
      <h2><a href="${obra.url}">${obra.titulo}</a></h2>
      <p class="work-meta">
        <span class="meta-item">${icons.user}<span>${obra.autor}</span></span>
        <span class="meta-separator">•</span>
        <span class="meta-item">${icons.calendar}<span>${obra.dataLabel}</span></span>
        <span class="meta-separator">•</span>
        <span class="meta-item">${icons.folder}<span>${obra.categoria}</span></span>
      </p>
      <p class="work-summary">${obra.resumo}</p>
    </div>
  </article>
`;

const filtrarObras = () => {
  const termo = normalizar(state.busca);
  const categoria = normalizar(state.categoria);

  return obrasOrdenadas.filter((obra) => {
    const correspondeCategoria = categoria === 'todas'
      || normalizar(obra.categoria) === categoria
      || (obra.tags || []).some((tag) => normalizar(tag) === categoria);

    const textoCompleto = normalizar([
      obra.titulo,
      obra.autor,
      obra.categoria,
      obra.resumo,
      ...(obra.tags || [])
    ].join(' '));

    const correspondeBusca = !termo || textoCompleto.includes(termo);
    return correspondeCategoria && correspondeBusca;
  });
};

const atualizarStatus = (quantidade) => {
  const status = document.querySelector('#searchStatus');
  const clear = document.querySelector('#clearFilter');
  if (!status || !clear) return;

  const filtrosAtivos = Boolean(state.busca) || state.categoria !== 'todas';
  clear.hidden = !filtrosAtivos;

  if (!filtrosAtivos) {
    status.textContent = '';
    return;
  }

  const partes = [];
  if (state.busca) partes.push(`busca “${state.busca}”`);
  if (state.categoria !== 'todas') partes.push(`categoria “${state.categoria}”`);
  status.textContent = `${quantidade} ${quantidade === 1 ? 'obra encontrada' : 'obras encontradas'} para ${partes.join(' e ')}.`;
};

const montarAcervo = () => {
  const root = document.querySelector('#archiveList');
  if (!root) return;

  const lista = filtrarObras().slice(0, 10);
  root.innerHTML = lista.length
    ? lista.map(montarCard).join('')
    : '<div class="empty-state">Nenhuma obra corresponde à busca. Tente outro termo ou mostre todas as publicações.</div>';

  atualizarStatus(lista.length);
  ativarCards();
};

const ativarCards = () => {
  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('a, button')) return;
      window.location.href = card.dataset.url;
    });

    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      window.location.href = card.dataset.url;
    });
  });
};

const configurarBusca = () => {
  const form = document.querySelector('#searchForm');
  const input = document.querySelector('#siteSearch');
  if (!form || !input) return;

  const aplicarBusca = () => {
    state.busca = input.value.trim();
    montarAcervo();
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    aplicarBusca();
  });

  input.addEventListener('input', aplicarBusca);
};

const configurarNavegacao = () => {
  document.querySelectorAll('[data-filter-link]').forEach((link) => {
    link.addEventListener('click', () => {
      state.categoria = link.dataset.filterLink || 'todas';
      document.querySelectorAll('.main-nav a').forEach((item) => item.classList.remove('is-active'));
      link.classList.add('is-active');
      montarAcervo();
    });
  });

  const clear = document.querySelector('#clearFilter');
  const input = document.querySelector('#siteSearch');
  clear?.addEventListener('click', () => {
    state.busca = '';
    state.categoria = 'todas';
    if (input) input.value = '';
    document.querySelectorAll('.main-nav a').forEach((item) => item.classList.remove('is-active'));
    document.querySelector('.main-nav a[href="#inicio"]')?.classList.add('is-active');
    montarAcervo();
  });
};

const configurarAnuncio = () => {
  const link = document.querySelector('#announcementLatest');
  const obra = obrasOrdenadas[0];
  if (!link || !obra) return;
  link.href = obra.url;
  link.textContent = `${obra.titulo} já está no ar!`;
};

const configurarBoletim = () => {
  const button = document.querySelector('#subscribeButton');
  const feedback = document.querySelector('#crewFeedback');
  button?.addEventListener('click', () => {
    if (!feedback) return;
    feedback.textContent = 'O boletim ainda está em preparação.';
  });
};

const configurarContraste = () => {
  const button = document.querySelector('#themeButton');
  button?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });
};

configurarAnuncio();
configurarBusca();
configurarNavegacao();
configurarBoletim();
configurarContraste();
montarAcervo();
