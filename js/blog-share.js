(() => {
  const roots = document.querySelectorAll('[data-share-root]');
  if (!roots.length) return;

  const ogTitle = document.querySelector('meta[property="og:title"]')?.content?.trim();
  const ogDescription = document.querySelector('meta[property="og:description"]')?.content?.trim();
  const ogUrl = document.querySelector('meta[property="og:url"]')?.content?.trim();
  const pageTitle = ogTitle || document.querySelector('h1')?.textContent?.trim() || document.title;
  const pageSubtitle = ogDescription || document.querySelector('.subtitle')?.textContent?.trim() || '';
  const pageUrl = ogUrl || window.location.href;
  const composedText = pageSubtitle ? `${pageTitle} — ${pageSubtitle}` : pageTitle;
  const instaText = `${pageTitle}
${pageSubtitle}
${pageUrl}`.trim();

  let openRoot = null;

  const closePanel = (root) => {
    const trigger = root.querySelector('[data-share-trigger]');
    const panel = root.querySelector('[data-share-panel]');
    if (!trigger || !panel) return;
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (openRoot === root) openRoot = null;
  };

  const openPanel = (root) => {
    if (openRoot && openRoot !== root) closePanel(openRoot);
    const trigger = root.querySelector('[data-share-trigger]');
    const panel = root.querySelector('[data-share-panel]');
    if (!trigger || !panel) return;
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    openRoot = root;
  };

  roots.forEach((root) => {
    const trigger = root.querySelector('[data-share-trigger]');
    const panel = root.querySelector('[data-share-panel]');
    const whatsapp = root.querySelector('[data-share-whatsapp]');
    const facebook = root.querySelector('[data-share-facebook]');
    const x = root.querySelector('[data-share-x]');
    const instagram = root.querySelector('[data-share-instagram]');
    const feedback = root.querySelector('[data-share-feedback]');

    if (!trigger || !panel || !whatsapp || !facebook || !x || !instagram) return;

    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedText = encodeURIComponent(`${composedText} ${pageUrl}`);
    const encodedXText = encodeURIComponent(composedText);

    whatsapp.href = `https://api.whatsapp.com/send?text=${encodedText}`;
    facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
    x.href = `https://x.com/intent/post?text=${encodedXText}&url=${encodedUrl}`;

    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      if (expanded) closePanel(root); else openPanel(root);
    });

    const setFeedback = (message) => {
      if (feedback) feedback.textContent = message;
    };

    instagram.addEventListener('click', async () => {
      try {
        if (navigator.share && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
          await navigator.share({ title: pageTitle, text: pageSubtitle, url: pageUrl });
          setFeedback('Compartilhamento aberto no aparelho.');
        } else if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(instaText);
          setFeedback('Texto copiado. Cole no Instagram e adicione a imagem da obra.');
          window.open('https://www.instagram.com/', '_blank', 'noopener');
        } else {
          setFeedback('Copie manualmente o link desta página para usar no Instagram.');
        }
      } catch (error) {
        setFeedback('Não foi possível compartilhar agora.');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!openRoot) return;
    if (openRoot.contains(event.target)) return;
    closePanel(openRoot);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openRoot) closePanel(openRoot);
  });
})();
