(() => {
  "use strict";

  const feedUrl = "https://revista.cianortecardmasters.com.br/data/latest.js";
  const repositoryFallback = "https://revista.cianortecardmasters.com.br/";
  const card = document.querySelector("[data-latest-zine]");

  if (!card) return;

  const cover = document.getElementById("latestZineCover");
  const coverLink = document.getElementById("latestZineCoverLink");
  const editionLabel = document.getElementById("latestZineEdition");
  const repositoryLink = document.getElementById("latestZineRepository");
  const status = document.getElementById("latestZineStatus");

  if (!cover || !coverLink || !editionLabel || !repositoryLink) return;

  function safeHttpUrl(value, fallback = "") {
    try {
      const url = new URL(String(value || fallback), repositoryFallback);
      return /^https?:$/.test(url.protocol) ? url.href : fallback;
    } catch {
      return fallback;
    }
  }

  function formatEdition(value) {
    const raw = String(value ?? "").trim();

    if (!raw) return "—";
    if (/^\d+$/.test(raw)) return raw.padStart(3, "0");

    return raw;
  }

  function renderLatestZine(payload) {
    const latest = payload?.latest;

    if (!latest) return;

    const edition = formatEdition(latest.edition ?? latest.number);
    const coverUrl = safeHttpUrl(latest.cover);
    const repositoryUrl = safeHttpUrl(payload.siteUrl, repositoryFallback);

    editionLabel.textContent = `Edição ${edition}`;
    coverLink.href = repositoryUrl;
    repositoryLink.href = repositoryUrl;

    if (coverUrl) {
      cover.src = coverUrl;
      cover.alt = `Capa da Edição ${edition} da CC Masters Zine`;
    }

    card.classList.add("is-loaded");
  }

  globalThis.addEventListener("ccmasters-zine:latest", (event) => {
    renderLatestZine(event.detail);
  });

  if (globalThis.CCMastersZineLatest) {
    renderLatestZine(globalThis.CCMastersZineLatest);
  }

  const feedScript = document.createElement("script");

  feedScript.src = `${feedUrl}?v=${Date.now()}`;
  feedScript.async = true;
  feedScript.onerror = () => {
    card.classList.add("has-feed-error");
    if (status) status.textContent = "Não foi possível carregar a edição automaticamente.";
  };
  document.head.appendChild(feedScript);
})();
