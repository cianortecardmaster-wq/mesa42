(() => {
  'use strict';

  const article = document.querySelector('.text-article');
  if (!article || article.querySelector('[data-article-share]')) return;

  const getMeta = (selector, fallback = '') => {
    const element = document.querySelector(selector);
    return element?.getAttribute('content')?.trim() || fallback;
  };

  const title = getMeta('meta[property="og:title"]', document.querySelector('h1')?.textContent?.trim() || document.title);
  const subtitle = getMeta('meta[property="og:description"]', document.querySelector('.subtitle')?.textContent?.trim() || '');
  const canonical = document.querySelector('link[rel="canonical"]')?.href || getMeta('meta[property="og:url"]', window.location.href);
  const imageUrl = getMeta('meta[property="og:image"]');
  const shareText = [title, subtitle, canonical].filter(Boolean).join('\n\n');

  const encode = encodeURIComponent;
  const links = {
    whatsapp: `https://wa.me/?text=${encode(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encode(canonical)}`,
    x: `https://x.com/intent/post?text=${encode([title, subtitle].filter(Boolean).join('\n\n'))}&url=${encode(canonical)}`
  };

  const icon = (name) => {
    const icons = {
      whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.52 0 .18 5.34.18 11.9c0 2.1.55 4.15 1.6 5.95L.08 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01C18.64 23.8 24 18.46 24 11.9c0-3.18-1.24-6.16-3.5-8.4Zm-8.42 18.3h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38A9.85 9.85 0 0 1 2.18 11.9C2.18 6.44 6.62 2 12.08 2c2.64 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.92 7c0 5.46-4.45 9.9-9.92 9.9Zm5.43-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 0 1-1.65-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35Z"/></svg>',
      facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 22v-9h3l.45-3.5H13.7V7.26c0-1.01.28-1.7 1.74-1.7h1.86V2.43a25 25 0 0 0-2.71-.14c-2.68 0-4.52 1.64-4.52 4.65V9.5H7v3.5h3.07v9h3.63Z"/></svg>',
      x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2h3.68l-8.04 9.19L24 22h-7.4l-5.8-7.58L4.17 22H.48l8.6-9.83L0 2h7.59l5.24 6.93L18.9 2Zm-1.3 18.1h2.04L6.48 3.8H4.3L17.6 20.1Z"/></svg>',
      instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm10.05 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>',
      share: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 16a3 3 0 0 0-2.4 1.2l-6.7-3.35a3.2 3.2 0 0 0 0-1.7L15.6 8.8A3 3 0 1 0 15 7a3 3 0 0 0 .08.68l-6.7 3.35a3 3 0 1 0 0 3.94l6.7 3.35A3 3 0 1 0 18 16Z"/></svg>'
    };
    return icons[name] || '';
  };

  const section = document.createElement('section');
  section.className = 'article-share';
  section.dataset.articleShare = '';
  section.innerHTML = `
    <div class="article-share-header">
      <div>
        <p class="article-share-kicker">Compartilhar</p>
        <h2>Envie esta obra para outra pessoa</h2>
        <p>O link leva o título, o subtítulo e a imagem de capa.</p>
      </div>
      <button class="article-share-toggle" type="button" aria-expanded="false" aria-controls="article-share-options">
        <span class="article-share-toggle-icon">${icon('share')}</span>
        <span>Escolher rede</span>
        <span class="article-share-chevron" aria-hidden="true">⌄</span>
      </button>
    </div>
    <div class="article-share-options" id="article-share-options" hidden>
      <a class="article-share-option is-whatsapp" data-share-platform="whatsapp" href="${links.whatsapp}" target="_blank" rel="noopener noreferrer">
        <span class="article-share-option-icon">${icon('whatsapp')}</span>
        <span><strong>WhatsApp</strong><small>Enviar em uma conversa</small></span>
      </a>
      <a class="article-share-option is-facebook" data-share-platform="facebook" href="${links.facebook}" target="_blank" rel="noopener noreferrer">
        <span class="article-share-option-icon">${icon('facebook')}</span>
        <span><strong>Facebook</strong><small>Publicar ou enviar</small></span>
      </a>
      <a class="article-share-option is-x" data-share-platform="x" href="${links.x}" target="_blank" rel="noopener noreferrer">
        <span class="article-share-option-icon">${icon('x')}</span>
        <span><strong>X</strong><small>Criar uma publicação</small></span>
      </a>
      <button class="article-share-option is-instagram" data-share-platform="instagram" type="button">
        <span class="article-share-option-icon">${icon('instagram')}</span>
        <span><strong>Instagram</strong><small>Usar o compartilhamento do aparelho</small></span>
      </button>
    </div>
    <p class="article-share-status" role="status" aria-live="polite"></p>
  `;

  const footer = article.querySelector('.article-footer');
  article.insertBefore(section, footer || null);

  const toggle = section.querySelector('.article-share-toggle');
  const options = section.querySelector('.article-share-options');
  const status = section.querySelector('.article-share-status');
  const instagramButton = section.querySelector('[data-share-platform="instagram"]');

  const setOpen = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    options.hidden = !open;
    section.classList.toggle('is-open', open);
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });

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

  const getShareImage = async () => {
    if (!imageUrl || typeof File === 'undefined' || !navigator.canShare) return null;

    try {
      const response = await fetch(imageUrl, { credentials: 'same-origin' });
      if (!response.ok) return null;
      const blob = await response.blob();
      const extension = blob.type.includes('png') ? 'png' : blob.type.includes('webp') ? 'webp' : 'jpg';
      const safeName = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'mesa-42';
      const file = new File([blob], `${safeName}.${extension}`, { type: blob.type || 'image/jpeg' });
      return navigator.canShare({ files: [file] }) ? file : null;
    } catch {
      return null;
    }
  };

  instagramButton.addEventListener('click', async () => {
    status.textContent = '';

    if (navigator.share) {
      try {
        const file = await getShareImage();
        const data = file
          ? { files: [file], title, text: [subtitle, canonical].filter(Boolean).join('\n\n') }
          : { title, text: subtitle, url: canonical };

        status.textContent = 'Escolha o Instagram na lista de aplicativos.';
        await navigator.share(data);
        status.textContent = 'Compartilhamento concluído.';
        return;
      } catch (error) {
        if (error?.name === 'AbortError') {
          status.textContent = '';
          return;
        }
      }
    }

    try {
      await copyText(shareText);
      status.textContent = 'Título, subtítulo e link copiados. Cole no Instagram.';
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');
    } catch {
      status.textContent = 'Não foi possível copiar automaticamente. Copie o endereço desta página para compartilhar.';
    }
  });
})();
