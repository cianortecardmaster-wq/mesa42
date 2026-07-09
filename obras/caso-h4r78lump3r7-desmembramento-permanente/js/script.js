(() => {
  const button = document.querySelector('[data-language-toggle]');
  const status = document.querySelector('[data-language-status]');
  const project = document.querySelector('[data-project-lang]');
  const panels = document.querySelectorAll('[data-lang-panel]');

  if (!button || !status || !project || !panels.length) return;

  const labels = {
    official: {
      status: 'TR4PPI5T-1Σ · oficial',
      button: 'Ver tradução terráquea',
      pressed: 'false'
    },
    translated: {
      status: 'Língua terráquea · tradução livre',
      button: 'Voltar para TR4PPI5T-1Σ',
      pressed: 'true'
    }
  };

  const setLanguage = (language) => {
    panels.forEach((panel) => {
      const isActive = panel.dataset.langPanel === language;
      panel.hidden = !isActive;
      panel.classList.toggle('is-active', isActive);
    });

    project.dataset.projectLang = language;
    status.textContent = labels[language].status;
    button.textContent = labels[language].button;
    button.setAttribute('aria-pressed', labels[language].pressed);
  };

  button.addEventListener('click', () => {
    const next = project.dataset.projectLang === 'official' ? 'translated' : 'official';
    setLanguage(next);
  });
})();
