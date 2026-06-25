(function(){
  const list = document.querySelector('#postsList');
  if(!list) return;

  const formatDate = (dateString) => {
    const [year, month, day] = String(dateString || '').split('-').map(Number);
    if(!year || !month || !day) return 'Sem data';
    return new Intl.DateTimeFormat('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric' }).format(new Date(year, month - 1, day));
  };

  const escapeHtml = (value) => String(value ?? '').replace(/[&<>'"]/g, (char) => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
  }[char]));

  const render = (posts) => {
    const sorted = [...posts].sort((a,b) => String(b.date || '').localeCompare(String(a.date || '')));
    list.innerHTML = sorted.map((post) => {
      const tags = [post.format, post.status, ...(post.tags || [])].filter(Boolean);
      return `
        <article class="post-card">
          <div class="post-card-body">
            <div>
              <span class="eyebrow">${escapeHtml(post.number || post.kind || 'Postagem')} • ${formatDate(post.date)}</span>
              <h3>${escapeHtml(post.title)}</h3>
              <p>${escapeHtml(post.summary)}</p>
              <div class="post-meta">
                ${tags.map((tag, index) => `<span class="badge ${index === 0 ? 'gold' : ''}">${escapeHtml(tag)}</span>`).join('')}
              </div>
            </div>
            <div class="post-actions">
              <a class="button" href="${escapeHtml(post.url)}">Abrir postagem</a>
            </div>
          </div>
          <div class="post-cover" aria-hidden="true">
            <img src="${escapeHtml(post.cover || 'assets/bg/centro-cultural.svg')}" alt="" loading="lazy" />
          </div>
        </article>
      `;
    }).join('');
  };

  fetch('data/posts.json', { cache:'no-store' })
    .then((response) => {
      if(!response.ok) throw new Error('Não foi possível carregar data/posts.json');
      return response.json();
    })
    .then(render)
    .catch((error) => {
      list.innerHTML = `
        <article class="post-card loading-card">
          <p class="eyebrow">Erro</p>
          <h3>Não foi possível carregar as postagens.</h3>
          <p>${escapeHtml(error.message)}</p>
        </article>
      `;
    });
})();
