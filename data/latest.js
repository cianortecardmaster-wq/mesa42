(() => {
  "use strict";

  const currentScript = document.currentScript;
  const fallbackSiteUrl = "https://mesa42.cianortecardmasters.com.br/";
  const sourceUrl = currentScript?.src || `${fallbackSiteUrl}data/latest.js`;
  const siteUrl = new URL("../", sourceUrl).href;
  const refreshKey = (() => {
    try {
      return new URL(sourceUrl).searchParams.get("v") || String(Date.now());
    } catch {
      return String(Date.now());
    }
  })();

  function safeAbsoluteUrl(value) {
    if (!value) return "";

    try {
      const url = new URL(String(value), siteUrl);
      return /^https?:$/.test(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  }

  function normalizeDate(value) {
    const time = Date.parse(String(value || ""));
    return Number.isFinite(time) ? time : 0;
  }

  function publishLatest() {
    const obras = Array.isArray(globalThis.MESA42_OBRAS) ? globalThis.MESA42_OBRAS : [];
    if (!obras.length) return;

    const latest = [...obras].sort((a, b) => normalizeDate(b.data) - normalizeDate(a.data))[0];
    if (!latest) return;

    const payload = {
      siteUrl,
      latest: {
        title: latest.titulo || "",
        summary: latest.resumo || "",
        image: safeAbsoluteUrl(latest.imagem),
        url: safeAbsoluteUrl(latest.url) || siteUrl,
        readingTime: latest.tempoLeitura || "",
        date: latest.data || "",
        category: latest.categoria || ""
      }
    };

    globalThis.Mesa42Latest = payload;
    globalThis.dispatchEvent(new CustomEvent("mesa42:latest", { detail: payload }));
  }

  if (Array.isArray(globalThis.MESA42_OBRAS) && globalThis.MESA42_OBRAS.length) {
    publishLatest();
    return;
  }

  const dataScript = document.createElement("script");
  const obrasUrl = new URL("../js/obras-data.js", sourceUrl);
  obrasUrl.searchParams.set("v", refreshKey);
  dataScript.src = obrasUrl.href;
  dataScript.async = true;
  dataScript.onload = publishLatest;
  document.head.appendChild(dataScript);
})();
