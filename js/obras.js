(() => {
  const obras = Array.isArray(window.MESA42_OBRAS) ? window.MESA42_OBRAS : [];
  const rootPath = document.body.dataset.root || '';
  const root = document.querySelector('#archiveList');
  const searchInput = document.querySelector('#siteSearch');
  const searchForm = document.querySelector('#searchForm');
  const status = document.querySelector('#searchStatus');
  const clearButton = document.querySelector('#clearFilter');

  const normalizar = (valor) => String(valor || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const caminho = (arquivo) => `${rootPath}${String(arquivo || '').replace(/^\.\//, '')}`;
  const ordenadas = [...obras].sort((a, b) => new Date(b.data) - new Date(a.data));
  let busca = '';

  const icons = {
    user: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/></svg>',
    calendar: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M7 3v4m10-4v4M4 10h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"/></svg>',
    folder: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M3 6h7l2 2h9v11H3V6Z"/></svg>',
    words: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5h16M4 10h16M4 15h10M4 20h7"/></svg>',
    clock: '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'
  };

  const destaque = (tag) => ['destaque', 'favorita'].includes(normalizar(tag));

  const tagsVisiveis = (obra) => {
    const tags = obra.tags || [];
    const principal = tags.find(destaque);
    const comuns = tags.filter((tag) => !destaque(tag)).slice(0, principal ? 2 : 3);
    return principal ? [principal, ...comuns] : comuns;
  };

  const montarCard = (obra) => {
    const url = caminho(obra.url);
    const mediaClass = obra.imagemModo === 'contain' ? ' is-contain' : '';
    return `
      <article class="work-card" data-url="${url}" tabindex="0" role="link" aria-label="${obra.cta || 'Abrir obra'}: ${obra.titulo}">
        <a class="work-media${mediaClass}" href="${url}" tabindex="-1" aria-hidden="true">
          <img src="${caminho(obra.imagem)}" alt="" loading="lazy" />
        </a>
        <div class="work-content">
          <div class="tag-list" aria-label="Tags da obra">
            ${tagsVisiveis(obra).map((tag) => `<span class="tag${destaque(tag) ? ' is-featured' : ''}">${tag}</span>`).join('')}
          </div>
          <h2><a href="${url}">${obra.titulo}</a></h2>
          <p class="work-meta">
            <span class="meta-item">${icons.user}<span>${obra.autor}</span></span>
            <span class="meta-separator">•</span>
            <span class="meta-item">${icons.calendar}<span>${obra.dataLabel}</span></span>
            <span class="meta-separator">•</span>
            <span class="meta-item">${icons.folder}<span>${obra.categoria}</span></span>
            ${obra.palavras ? `<span class="meta-separator">•</span><span class="meta-item">${icons.words}<span>${Number(obra.palavras).toLocaleString('pt-BR')} palavras</span></span>` : ''}
            ${obra.tempoLeitura ? `<span class="meta-separator">•</span><span class="meta-item">${icons.clock}<span>${obra.tempoLeitura} min de leitura</span></span>` : ''}
          </p>
          <p class="work-summary">${obra.resumoHome || obra.resumo}</p>
        </div>
      </article>`;
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

  const renderizar = () => {
    if (!root) return;
    const termo = normalizar(busca);
    const filtradas = ordenadas.filter((obra) => !termo || normalizar([
      obra.titulo,
      obra.autor,
      obra.categoria,
      obra.resumoHome,
      obra.resumo,
      ...(obra.tags || [])
    ].join(' ')).includes(termo));
    const exibidas = filtradas.slice(0, 10);

    root.innerHTML = exibidas.length
      ? exibidas.map(montarCard).join('')
      : '<div class="empty-state">Nenhuma obra corresponde à busca. Tente outro termo.</div>';

    if (status) status.textContent = busca
      ? `${filtradas.length} ${filtradas.length === 1 ? 'obra encontrada' : 'obras encontradas'} para “${busca}”.`
      : '';
    if (clearButton) clearButton.hidden = !busca;
    ativarCards();
  };

  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    busca = searchInput?.value.trim() || '';
    renderizar();
  });

  searchInput?.addEventListener('input', () => {
    busca = searchInput.value.trim();
    renderizar();
  });

  clearButton?.addEventListener('click', () => {
    busca = '';
    if (searchInput) searchInput.value = '';
    renderizar();
  });

  const latest = ordenadas[0];
  const announcement = document.querySelector('#announcementLatest');
  if (latest && announcement) {
    announcement.href = caminho(latest.url);
    const announcementMessage = announcement.querySelector('.announcement-message');
    if (announcementMessage) {
      announcementMessage.textContent = latest.anuncio || `${latest.titulo} já está no ar.`;
    }
  }

  document.querySelector('#subscribeButton')?.addEventListener('click', () => {
    const feedback = document.querySelector('#crewFeedback');
    if (feedback) feedback.textContent = 'O boletim ainda está em preparação.';
  });

  document.querySelector('#themeButton')?.addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
  });

  renderizar();
})();
