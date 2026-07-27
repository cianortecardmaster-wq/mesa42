(() => {
  const FALLBACK_REPOSITORY = 'cianortecardmaster-wq/mesa42';
  const sections = document.querySelectorAll('[data-giscus-comments]');
  const loaderScript = document.currentScript;

  if (!sections.length) return;

  const setStatus = (section, message, isError = false) => {
    const status = section.querySelector('[data-giscus-status]');
    if (!status) return;

    status.hidden = false;
    status.classList.toggle('is-error', isError);
    status.innerHTML = message;
  };

  const configUrl = (() => {
    if (loaderScript?.src) {
      return new URL('giscus-config.json', loaderScript.src);
    }

    return new URL('/js/giscus-config.json', window.location.origin);
  })();

  const validateConfig = (config) => {
    const repository = config?.repository || FALLBACK_REPOSITORY;
    const repositoryId = config?.repositoryId;
    const category = config?.category;
    const categoryId = config?.categoryId;

    if (!repositoryId || !category || !categoryId) {
      throw new Error(
        'A configuração do Giscus ainda não foi gerada. Execute a ação "Configurar comentários".',
      );
    }

    return { repository, repositoryId, category, categoryId };
  };

  const createGiscusScript = ({ repository, repositoryId, category, categoryId }) => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.dataset.repo = repository;
    script.dataset.repoId = repositoryId;
    script.dataset.category = category;
    script.dataset.categoryId = categoryId;
    script.dataset.mapping = 'pathname';
    script.dataset.strict = '1';
    script.dataset.reactionsEnabled = '1';
    script.dataset.emitMetadata = '0';
    script.dataset.inputPosition = 'top';
    script.dataset.theme = 'light';
    script.dataset.lang = 'pt';
    return script;
  };

  const loadComments = async () => {
    try {
      const response = await fetch(configUrl, {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Não foi possível carregar ${configUrl.pathname} (${response.status}).`);
      }

      const config = validateConfig(await response.json());

      sections.forEach((section) => {
        const status = section.querySelector('[data-giscus-status]');
        if (status) status.hidden = true;

        const script = createGiscusScript(config);
        script.addEventListener('error', () => {
          setStatus(
            section,
            '<strong>Não foi possível carregar os comentários.</strong><span>Tente atualizar a página em alguns instantes.</span>',
            true,
          );
        });

        section.append(script);
      });
    } catch (error) {
      console.error('[Mesa 42] Não foi possível carregar os comentários.', error);

      sections.forEach((section) => {
        section.classList.add('giscus-section--setup');
        setStatus(
          section,
          '<strong>Os comentários estão sendo configurados.</strong><span>Se esta mensagem continuar aparecendo, execute novamente a ação “Configurar comentários” no GitHub.</span>',
          true,
        );
      });
    }
  };

  loadComments();
})();
