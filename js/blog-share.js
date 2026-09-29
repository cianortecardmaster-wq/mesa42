(() => {
  'use strict';

  const whatsappButtons = document.querySelectorAll('[data-share-whatsapp]');
  const facebookButtons = document.querySelectorAll('[data-share-facebook]');
  const xButtons = document.querySelectorAll('[data-share-x]');
  const instagramButtons = document.querySelectorAll('[data-share-instagram]');

  if (!whatsappButtons.length && !facebookButtons.length && !xButtons.length && !instagramButtons.length) return;

  const getMeta = (selector, fallback = '') => {
    const element = document.querySelector(selector);
    return element?.getAttribute('content')?.trim() || fallback;
  };

  const pageTitle = getMeta('meta[property="og:title"]', document.querySelector('h1')?.textContent?.trim() || document.title);
  const pageSummary = getMeta('meta[property="og:description"]', document.querySelector('.subtitle')?.textContent?.trim() || '');
  const pageUrl = document.querySelector('link[rel="canonical"]')?.href || getMeta('meta[property="og:url"]', window.location.href);
  const shareText = [pageTitle, pageSummary, pageUrl].filter(Boolean).join('\n\n');
  const postText = [pageTitle, pageSummary].filter(Boolean).join(' — ');

  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedShareText = encodeURIComponent(shareText);
  const encodedPostText = encodeURIComponent(postText);

  whatsappButtons.forEach((button) => {
    button.href = `https://wa.me/?text=${encodedShareText}`;
  });

  facebookButtons.forEach((button) => {
    button.href = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  });

  xButtons.forEach((button) => {
    button.href = `https://x.com/intent/post?text=${encodedPostText}&url=${encodedUrl}`;
  });

  let toastTimer = null;
  const showToast = (message) => {
    let toast = document.querySelector('[data-share-toast]');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'share-toast';
      toast.dataset.shareToast = '';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 3200);
  };

  const copyText = async (text) => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const input = document.createElement('textarea');
    input.value = text;
    input.setAttribute('readonly', '');
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
  };

  instagramButtons.forEach((button) => {
    button.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({ title: pageTitle, text: pageSummary, url: pageUrl });
          return;
        } catch (error) {
          if (error?.name === 'AbortError') return;
        }
      }

      try {
        await copyText(shareText);
        showToast('Título, resumo, tempo de leitura e link copiados. Cole no Instagram.');
        window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
      } catch {
        showToast('Não foi possível copiar automaticamente. Copie o endereço desta página.');
      }
    });
  });
})();
