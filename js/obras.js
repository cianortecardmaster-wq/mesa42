const obras = [
  {
    numero: "História #001",
    titulo: "Command and Conquer",
    tipo: "Visual Novel",
    status: "Disponível",
    resumo: "JP só precisava de uma carta para virar a partida. Mas algumas cartas parecem escolher o jogador de volta.",
    imagem: "assets/command-and-conquer-logo.png",
    link: "obras/command-and-conquer/index.html",
    disponivel: true,
    destaque: true
  },
  {
    numero: "Em breve",
    titulo: "Arquivo Secreto",
    tipo: "Fanfic",
    status: "Em desenvolvimento",
    resumo: "Um relato estranho encontrado depois de um torneio. Ninguém lembra quem escreveu. Todo mundo lembra da última rodada.",
    imagem: "assets/placeholders/obra-placeholder.svg",
    link: "#",
    disponivel: false,
    destaque: false
  },
  {
    numero: "Em breve",
    titulo: "Relato Perdido",
    tipo: "HQ",
    status: "Em breve",
    resumo: "Cartas na mesa, risadas fora de hora e uma história que provavelmente não deveria ter sido desenhada.",
    imagem: "assets/placeholders/obra-placeholder.svg",
    link: "#",
    disponivel: false,
    destaque: false
  }
];

const grid = document.querySelector("#obras-grid");
const buttons = document.querySelectorAll(".filter-button");

function normalizeStatus(status) {
  return status
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-");
}

function renderObras(filter = "todas") {
  const filtered = obras.filter((obra) => {
    if (filter === "todas") return true;
    if (filter === "Em breve") return !obra.disponivel;
    return obra.tipo === filter;
  });

  grid.innerHTML = filtered.map((obra) => {
    const statusClass = normalizeStatus(obra.status);
    const cardClass = obra.destaque ? "work-card featured" : "work-card";
    const buttonClass = obra.disponivel ? "work-button" : "work-button disabled";
    const buttonText = obra.disponivel ? "Abrir obra" : "Em breve";
    const ariaDisabled = obra.disponivel ? "" : "aria-disabled=\"true\" tabindex=\"-1\"";

    return `
      <article class="${cardClass}" data-tipo="${obra.tipo}" data-status="${obra.status}">
        <div class="work-media">
          <img src="${obra.imagem}" alt="${obra.titulo}" loading="lazy" />
        </div>
        <div class="work-body">
          <div class="work-meta">
            <span class="pill">${obra.numero}</span>
            <span class="pill">${obra.tipo}</span>
            <span class="pill status-${statusClass}">${obra.status}</span>
          </div>
          <h3 class="work-title">${obra.titulo}</h3>
          <p class="work-summary">${obra.resumo}</p>
          <a class="${buttonClass}" href="${obra.link}" ${ariaDisabled}>${buttonText}</a>
        </div>
      </article>
    `;
  }).join("");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderObras(button.dataset.filter);
  });
});

renderObras();
