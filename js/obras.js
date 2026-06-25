const filterButtons = document.querySelectorAll('.filter-button');
const workCards = document.querySelectorAll('.work-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    workCards.forEach((card) => {
      const tipo = card.dataset.tipo;
      const disponivel = card.dataset.disponivel;

      const shouldShow =
        filter === 'todas' ||
        filter === tipo ||
        (filter === 'em-breve' && disponivel === 'nao');

      card.hidden = !shouldShow;
    });
  });
});
