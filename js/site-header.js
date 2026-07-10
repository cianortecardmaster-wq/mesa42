(() => {
  const button = document.querySelector('[data-site-theme-button]');
  if (!button) return;

  button.addEventListener('click', () => {
    document.body.classList.toggle('site-high-contrast');
  });
})();
