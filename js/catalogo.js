(() => {
  const obras = Array.isArray(window.MESA42_OBRAS) ? window.MESA42_OBRAS : [];
  const rootPath = document.body.dataset.root || '../';
  const tipo = document.body.dataset.catalogType || 'todas';
  const limite = 25;
  const params = new URLSearchParams(window.location.search);
  const buscaInicial = (params.get('busca') || '').trim();
  const paginaSolicitada = Math.max(1, Number.parseInt(params.get('pagina') || '1', 10) || 1);

  const listaRoot = document.querySelector('#catalogList');
  const statusRoot = document.querySelector('#catalogStatus');
  const paginationRoot = document.querySelector('#catalogPagination');
  const searchForm = document.querySelector('#catalogSearchForm');
  const searchInput = document.querySelector('#catalogSearch');
  const clearButton = document.querySelector('#catalogClear');

  const normalizar = (valor) => String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const caminho = (arquivo) => `${rootPath}${String(arquivo || '').replace(/^\.\//, '')}`;
  const correspondeTipo = (obra) => tipo === 'todas' || (obra.tipos || []).includes(tipo);
  const correspondeBusca = (obra, termo) => !termo || normalizar([
    obra.titulo,
    obra.autor,
    obra.categoria,
    obra.resumo,
    ...(obra.tags || [])
  ].join(' ')).includes(normalizar(termo));

  const icons = {
    user: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',
    calendar: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/></svg>',
    folder: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h7l2 2h9v11H3V6Z"/></svg>'
  };

  const ehDestaque = (tag) => ['destaque', 'favorita'].includes(normalizar(tag));
  const tagsVisiveis = (obra) => {
    const tags = obra.tags || [];
    const principal = tags.find(ehDestaque);
    const comuns = tags.filter((tag) => !ehDestaque(tag)).slice(0, principal ? 2 : 3);
    return principal ? [principal, ...comuns] : comuns;
  };

  const montarCard = (obra) => {
    const url = caminho(obra.url);
    const mediaClass = obra.imagemModo === 'contain' ? ' is-contain' : '';
    return `
      <article class="catalog-card" data-url="${url}" tabindex="0" role="link" aria-label="${obra.cta || 'Abrir obra'}: ${obra.titulo}">
        <a class="catalog-media${mediaClass}" href="${url}" tabindex="-1" aria-hidden="true">
          <img src="${caminho(obra.imagem)}" alt="" loading="lazy" />
        </a>
        <div class="catalog-card-content">
          <div class="catalog-tags" aria-label="Tags da obra">
            ${tagsVisiveis(obra).map((tag) => `<span class="catalog-tag${ehDestaque(tag) ? ' is-featured' : ''}">${tag}</span>`).join('')}
          </div>
          <h2><a href="${url}">${obra.titulo}</a></h2>
          <p class="catalog-meta">
            <span>${icons.user}${obra.autor}</span><b>•</b>
            <span>${icons.calendar}${obra.dataLabel}</span><b>•</b>
            <span>${icons.folder}${obra.categoria}</span>
          </p>
          <p class="catalog-summary">${obra.resumo}</p>
          <span class="catalog-cta">${obra.cta || 'Abrir obra'} →</span>
        </div>
      </article>`;
  };

  const criarUrl = (pagina, busca) => {
    const url = new URL(window.location.href);
    if (pagina > 1) url.searchParams.set('pagina', String(pagina));
    else url.searchParams.delete('pagina');
    if (busca) url.searchParams.set('busca', busca);
    else url.searchParams.delete('busca');
    return `${url.pathname}${url.search}`;
  };

  const montarPaginacao = (paginaAtual, totalPaginas, busca) => {
    if (!paginationRoot) return;
    if (totalPaginas <= 1) {
      paginationRoot.innerHTML = '';
      paginationRoot.hidden = true;
      return;
    }

    paginationRoot.hidden = false;
    const botoes = [];
    botoes.push(paginaAtual > 1
      ? `<a class="pagination-arrow" href="${criarUrl(paginaAtual - 1, busca)}" aria-label="Página anterior">← Anteriores</a>`
      : '<span class="pagination-arrow is-disabled" aria-disabled="true">← Anteriores</span>');

    const inicio = Math.max(1, paginaAtual - 2);
    const fim = Math.min(totalPaginas, paginaAtual + 2);
    if (inicio > 1) {
      botoes.push(`<a href="${criarUrl(1, busca)}">1</a>`);
      if (inicio > 2) botoes.push('<span class="pagination-gap" aria-hidden="true">…</span>');
    }
    for (let numero = inicio; numero <= fim; numero += 1) {
      botoes.push(numero === paginaAtual
        ? `<span class="is-current" aria-current="page">${numero}</span>`
        : `<a href="${criarUrl(numero, busca)}">${numero}</a>`);
    }
    if (fim < totalPaginas) {
      if (fim < totalPaginas - 1) botoes.push('<span class="pagination-gap" aria-hidden="true">…</span>');
      botoes.push(`<a href="${criarUrl(totalPaginas, busca)}">${totalPaginas}</a>`);
    }

    botoes.push(paginaAtual < totalPaginas
      ? `<a class="pagination-arrow" href="${criarUrl(paginaAtual + 1, busca)}" aria-label="Próxima página">Próximos →</a>`
      : '<span class="pagination-arrow is-disabled" aria-disabled="true">Próximos →</span>');

    paginationRoot.innerHTML = botoes.join('');
  };

  const ativarCards = () => {
    document.querySelectorAll('.catalog-card').forEach((card) => {
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

  const renderizar = () => {
    if (!listaRoot) return;
    const busca = searchInput?.value.trim() || buscaInicial;
    const filtradas = obras
      .filter(correspondeTipo)
      .filter((obra) => correspondeBusca(obra, busca))
      .sort((a, b) => new Date(b.data) - new Date(a.data));

    const totalPaginas = Math.max(1, Math.ceil(filtradas.length / limite));
    const paginaAtual = Math.min(paginaSolicitada, totalPaginas);
    const inicio = (paginaAtual - 1) * limite;
    const exibidas = filtradas.slice(inicio, inicio + limite);

    listaRoot.innerHTML = exibidas.length
      ? exibidas.map(montarCard).join('')
      : '<div class="catalog-empty"><strong>Nenhuma obra encontrada.</strong><span>Tente outro termo ou volte ao acervo completo.</span></div>';

    if (statusRoot) {
      const faixaInicio = filtradas.length ? inicio + 1 : 0;
      const faixaFim = Math.min(inicio + limite, filtradas.length);
      statusRoot.textContent = busca
        ? `${filtradas.length} ${filtradas.length === 1 ? 'resultado' : 'resultados'} para “${busca}”. Exibindo ${faixaInicio}–${faixaFim}.`
        : `${filtradas.length} ${filtradas.length === 1 ? 'publicação' : 'publicações'} em ordem da mais recente para a mais antiga.`;
    }

    if (clearButton) clearButton.hidden = !busca;
    montarPaginacao(paginaAtual, totalPaginas, busca);
    ativarCards();
  };

  if (searchInput) searchInput.value = buscaInicial;

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const busca = searchInput?.value.trim() || '';
    window.location.href = criarUrl(1, busca);
  });

  clearButton?.addEventListener('click', () => {
    window.location.href = criarUrl(1, '');
  });

  renderizar();
})();
