(function(){
  const $ = (selector) => document.querySelector(selector);

  const state = {
    data:null,
    index:0,
    basePath:'',
    storageKey:'mesa42-vn-progress',
    orientationKey:'mesa42-vn-orientation',
    forceLandscape:false,
    isMobile:false
  };

  const els = {};

  function escapeHtml(value){
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({
      '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;'
    }[char]));
  }

  function asset(path){
    if(!path || path === 'black') return '';
    if(/^https?:\/\//.test(path) || path.startsWith('/') || path.startsWith('data:')) return path;
    return state.basePath + path;
  }

  function currentStep(){
    return state.data?.steps?.[state.index] || null;
  }

  function setBackground(step){
    const bg = step?.background || 'black';
    els.app.classList.toggle('is-black', bg === 'black');
    els.app.style.setProperty('--vn-bg', bg === 'black' ? 'none' : `url('${asset(bg)}')`);
  }

  function setEffect(effect){
    els.app.classList.remove('flash','shake','focus');
    if(effect){
      void els.app.offsetWidth;
      els.app.classList.add(effect);
    }
  }

  function renderTitle(step){
    const title = step?.titleCard;
    if(!title){
      els.titleCard.hidden = true;
      return;
    }
    els.titleCard.hidden = false;
    els.titleEyebrow.textContent = title.eyebrow || '';
    els.titleText.textContent = title.title || '';
    els.titleSubtitle.textContent = title.subtitle || '';
  }

  function renderCharacters(step){
    const characters = step?.characters || [];
    els.characters.innerHTML = characters.map((character) => {
      const position = character.position || 'center';
      const classes = ['vn-character', position, character.active === false ? 'dim' : ''].filter(Boolean).join(' ');
      const height = character.height ? `--char-height:${escapeHtml(character.height)}` : '';
      return `<img class="${classes}" src="${escapeHtml(asset(character.src))}" alt="" style="${height}" />`;
    }).join('');
  }

  function renderObject(object){
    const position = [object.position || 'right', object.vertical || 'bottom'].filter(Boolean).join(' ');
    if(object.type === 'phone'){
      return `<div class="vn-object phone ${escapeHtml(position)}"><div class="phone-screen">${object.html || ''}</div></div>`;
    }
    const kind = object.kind || 'image';
    return `<div class="vn-object image ${escapeHtml(kind)} ${escapeHtml(position)}"><img src="${escapeHtml(asset(object.src))}" alt="" /></div>`;
  }

  function renderObjects(step){
    const objects = step?.objects || [];
    els.objects.innerHTML = objects.map(renderObject).join('');
  }

  function renderDialogue(step){
    const hasText = Boolean(step?.text || step?.speaker || step?.mode);
    if(!hasText){
      els.dialogue.hidden = true;
      return;
    }

    els.dialogue.hidden = false;
    els.speaker.textContent = step.speaker || 'Mesa 42';
    els.mode.textContent = step.mode || '';
    els.mode.hidden = !step.mode;
    els.text.textContent = step.text || '';
  }

  function save(){
    try{ localStorage.setItem(state.storageKey, String(state.index)); }catch(e){}
  }

  function updateControls(){
    const total = state.data?.steps?.length || 0;
    els.prev.disabled = state.index <= 0;
    els.next.textContent = state.index >= total - 1 ? 'Fim' : 'Avançar →';
    els.counter.textContent = total ? `${state.index + 1} / ${total}` : '';
    els.progress.style.width = total <= 1 ? '0%' : `${(state.index / (total - 1)) * 100}%`;
  }

  function render(){
    const step = currentStep();
    if(!step) return;
    document.title = `${state.data.title || 'Visual Novel'} | Mesa 42`;
    els.label.textContent = state.data.label || state.data.title || 'Mesa 42';
    setBackground(step);
    setEffect(step.effect);
    renderTitle(step);
    renderCharacters(step);
    renderObjects(step);
    renderDialogue(step);
    updateControls();
    save();
  }

  function go(delta){
    const total = state.data?.steps?.length || 0;
    const nextIndex = Math.max(0, Math.min(total - 1, state.index + delta));
    if(nextIndex === state.index && delta > 0) return;
    state.index = nextIndex;
    render();
  }

  function restart(){
    state.index = 0;
    render();
  }


  function detectMobile(){
    const coarse = window.matchMedia ? window.matchMedia('(pointer: coarse)').matches : false;
    const small = window.matchMedia ? window.matchMedia('(max-width: 900px)').matches : window.innerWidth <= 900;
    return coarse || small;
  }

  function applyOrientation(){
    state.isMobile = detectMobile();
    document.body.classList.toggle('force-landscape', state.isMobile && state.forceLandscape);
    if(els.orientation){
      els.orientation.hidden = !state.isMobile;
      els.orientation.setAttribute('aria-pressed', state.forceLandscape ? 'true' : 'false');
      els.orientation.textContent = state.forceLandscape ? 'Vertical' : 'Horizontal';
      els.orientation.title = state.forceLandscape ? 'Voltar para leitura vertical' : 'Usar leitura horizontal';
    }
  }

  function loadOrientationPreference(){
    try{
      const saved = localStorage.getItem(state.orientationKey);
      if(saved === 'vertical') return false;
      if(saved === 'landscape') return true;
    }catch(e){}
    return detectMobile();
  }

  function toggleOrientation(){
    state.forceLandscape = !state.forceLandscape;
    try{ localStorage.setItem(state.orientationKey, state.forceLandscape ? 'landscape' : 'vertical'); }catch(e){}
    applyOrientation();
  }

  function bind(){
    els.prev.addEventListener('click', () => go(-1));
    els.next.addEventListener('click', () => go(1));
    els.restart.addEventListener('click', restart);
    if(els.orientation) els.orientation.addEventListener('click', toggleOrientation);
    els.dialogue.addEventListener('click', (event) => {
      if(event.target.closest('button')) return;
      go(1);
    });
    els.stage.addEventListener('click', () => go(1));
    window.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowLeft') go(-1);
      if(event.key === 'ArrowRight' || event.key === ' ' || event.key === 'Enter') go(1);
    });
    window.addEventListener('resize', applyOrientation);
    if(window.screen?.orientation?.addEventListener){
      window.screen.orientation.addEventListener('change', applyOrientation);
    }
  }

  function hydrateElements(){
    els.app = $('#vnApp');
    els.stage = $('#vnStage');
    els.titleCard = $('#titleCard');
    els.titleEyebrow = $('#titleEyebrow');
    els.titleText = $('#titleText');
    els.titleSubtitle = $('#titleSubtitle');
    els.characters = $('#charactersLayer');
    els.objects = $('#objectsLayer');
    els.dialogue = $('#dialogueBox');
    els.speaker = $('#speakerName');
    els.mode = $('#speakerMode');
    els.text = $('#dialogueText');
    els.prev = $('#prevBtn');
    els.next = $('#nextBtn');
    els.restart = $('#restartBtn');
    els.orientation = $('#orientationBtn');
    els.counter = $('#stepCounter');
    els.progress = $('#progressBar');
    els.label = $('#vnStoryLabel');
  }

  async function start(options){
    state.basePath = options.basePath || '';
    state.storageKey = options.storageKey || state.storageKey;
    state.orientationKey = options.orientationKey || `${state.storageKey}-orientation`;
    state.forceLandscape = loadOrientationPreference();
    hydrateElements();
    applyOrientation();
    bind();

    const response = await fetch(options.dataUrl, { cache:'no-store' });
    if(!response.ok) throw new Error('Não foi possível carregar o roteiro da visual novel.');
    state.data = await response.json();

    // A história sempre abre do começo: fundo preto + título.
    // A preferência horizontal/vertical continua salva separadamente.
    state.index = 0;

    render();
  }

  window.Mesa42VisualNovel = { start };
})();
