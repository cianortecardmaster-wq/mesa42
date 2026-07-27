(() => {
  const REPOSITORY = 'cianortecardmaster-wq/mesa42';
  const CATEGORY_PRIORITY = ['Comentários', 'Comments', 'Announcements', 'General'];
  const sections = document.querySelectorAll('[data-giscus-comments]');

  if (!sections.length) return;

  const setStatus = (section, message, isError = false) => {
    const status = section.querySelector('[data-giscus-status]');
    if (!status) return;

    status.hidden = false;
    status.classList.toggle('is-error', isError);
    status.innerHTML = message;
  };

  const chooseCategory = (categories) => {
    for (const name of CATEGORY_PRIORITY) {
      const match = categories.find(
        (category) => category.name.toLocaleLowerCase('pt-BR') === name.toLocaleLowerCase('pt-BR'),
      );
      if (match) return match;
    }

    return categories[0];
  };

  const createGiscusScript = ({ repositoryId, category }) => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.repo = REPOSITORY;
    script.dataset.repoId = repositoryId;
    script.dataset.category = category.name;
    script.dataset.categoryId = category.id;
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '1';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'light';
    script.dataset.lang = 'pt';
    script.dataset.loading = 'lazy';
    return script;
  };

  const loadComments = async () => {
    try {
      const endpoint = new URL('https://giscus.app/api/discussions/categories');
      endpoint.searchParams.set('repo', REPOSITORY);

      const response = await fetch(endpoint, {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Giscus respondeu com status ${response.status}.`);
      }

      const data = await response.json();
      const categories = Array.isArray(data.categories) ? data.categories : [];
      const category = chooseCategory(categories);

      if (!data.repositoryId || !category?.id) {
        throw new Error('O repositório ainda não possui uma categoria de discussão disponível.');
      }

      sections.forEach((section) => {
        const status = section.querySelector('[data-giscus-status]');
        if (status) status.hidden = true;
        section.append(createGiscusScript({ repositoryId: data.repositoryId, category }));
      });
    } catch (error) {
      console.error('[Mesa 42] Não foi possível carregar os comentários.', error);

      sections.forEach((section) => {
        section.classList.add('giscus-section--setup');
        setStatus(
          section,
          '<strong>Os comentários ainda não estão disponíveis.</strong><span>É necessário ativar o GitHub Discussions e autorizar o aplicativo Giscus no repositório do Mesa 42.</span>',
          true,
        );
      });
    }
  };

  loadComments();
})();
