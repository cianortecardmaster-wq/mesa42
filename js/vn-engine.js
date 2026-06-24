(function(){
  const $ = (sel) => document.querySelector(sel);

  let state = {
    story:null,
    slug:'',
    basePath:'',
    sceneId:null,
    lineIndex:0,
    flags:{},
    started:false,
    typing:false,
    typeTimer:null,
    pauseTimer:null,
    fullText:''
  };

  function asset(path){
    if(!path) return '';
    if(path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) return path;
    return state.basePath + path;
  }

  function scene(){
    return state.story?.scenes?.find(s => s.id === state.sceneId);
  }

  function line(){
    const s = scene();
    return s?.lines?.[state.lineIndex];
  }

  function clearPause(){
    clearTimeout(state.pauseTimer);
    state.pauseTimer = null;
  }

  function setBg(bg){
    const stage = $('#vnStage');
    if(stage) stage.style.setProperty('--scene-bg', `url('${asset(bg)}')`);
  }

  function setEffect(effect){
    const stage = $('#vnStage');
    const bg = $('#vnBg');
    if(!stage || !bg) return;

    stage.classList.remove('glitch','shake','focus');
    bg.classList.toggle('fade-black', effect === 'black');

    if(effect === 'glitch' || effect === 'shake' || effect === 'focus'){
      void stage.offsetWidth;
      stage.classList.add(effect);
    }
  }

  function currentCharacters(s, ln){
    if(Array.isArray(ln?.characters)) return ln.characters;
    if(Array.isArray(s?.characters)) return s.characters;
    return state.story.defaultCharacters || [];
  }

  function renderCharacters(chars=[]){
    const box = $('#characters');
    if(!box) return;

    box.innerHTML = '';
    chars.forEach((ch, idx) => {
      const img = document.createElement('img');
      const position = ch.position || 'center';
      img.className = `character character-${position}${ch.dim ? ' dim' : ''}${ch.pose ? ` pose-${ch.pose}` : ''}`;
      img.src = asset(ch.src || `assets/chars/${ch.id}.svg`);
      img.alt = ch.name || ch.id || 'Personagem';
      img.style.order = String(idx);
      if(ch.scale) img.style.setProperty('--char-scale', ch.scale);
      box.appendChild(img);
    });
  }

  function interpolate(text=''){
    return String(text).replace(/\{(\w+)\}/g, (_, key) => state.flags[key] ?? '');
  }

  function updateProgress(){
    const progress = $('#progressBar');
    if(!progress || !state.story) return;

    const all = state.story.scenes.reduce((acc,s)=>acc + (s.lines?.length || 0),0);
    let before = 0;
    for(const s of state.story.scenes){
      if(s.id === state.sceneId) break;
      before += (s.lines?.length || 0);
    }
    const pct = all ? ((before + state.lineIndex + 1)/all)*100 : 0;
    progress.style.setProperty('--progress', `${Math.max(0, Math.min(100, pct))}%`);
  }

  function finishTyping(){
    clearInterval(state.typeTimer);
    state.typing = false;
    const textEl = $('#lineText');
    if(textEl) textEl.textContent = state.fullText;
  }

  function typeText(text){
    const textEl = $('#lineText');
    if(!textEl) return;

    clearInterval(state.typeTimer);
    state.fullText = interpolate(text || '');
    textEl.textContent = '';

    if(!state.fullText){
      state.typing = false;
      return;
    }

    let i = 0;
    state.typing = true;
    state.typeTimer = setInterval(() => {
      i += 1;
      textEl.textContent = state.fullText.slice(0, i);
      if(i >= state.fullText.length){
        finishTyping();
      }
    }, 18);
  }

  function renderTitleCard(ln){
    const titleCard = $('#titleCard');
    if(!titleCard) return;

    titleCard.hidden = false;
    const titleEl = titleCard.querySelector('[data-title]');
    const subtitleEl = titleCard.querySelector('[data-subtitle]');
    if(titleEl) titleEl.textContent = ln.title || state.story.title || '';
    if(subtitleEl){
      subtitleEl.textContent = ln.subtitle || '';
      subtitleEl.hidden = !ln.subtitle;
    }
  }

  function hideTitleCard(){
    const titleCard = $('#titleCard');
    if(titleCard) titleCard.hidden = true;
  }

  function renderSceneAction(text){
    const el = $('#sceneAction');
    if(!el) return;

    const content = interpolate(text || '');
    el.textContent = content;
    el.hidden = !content;
  }

  function hideSceneAction(){
    const el = $('#sceneAction');
    if(el) el.hidden = true;
  }

  function renderChoices(choices){
    const wrap = $('#choices');
    const nextHint = $('#nextHint');
    if(!wrap) return;

    wrap.innerHTML = '';
    if(!choices || !choices.length){
      wrap.hidden = true;
      if(nextHint) nextHint.hidden = false;
      return;
    }

    wrap.hidden = false;
    if(nextHint) nextHint.hidden = true;
    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.textContent = choice.label;
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        choose(choice);
      });
      wrap.appendChild(btn);
    });
  }

  function scheduleAutoNext(ln){
    clearPause();
    const duration = Number(ln.duration || 0);
    if(duration > 0){
      state.pauseTimer = setTimeout(() => {
        state.pauseTimer = null;
        next();
      }, duration);
    }
  }

  function render(){
    clearPause();

    const s = scene();
    if(!s) return;

    const ln = line();
    if(!ln) return goNextScene();

    setBg(ln.bg || s.bg || state.story.defaultBg);
    renderCharacters(currentCharacters(s, ln));
    setEffect(ln.effect || s.effect || '');
    updateProgress();

    const dialogueBox = $('#dialogueBox');
    const speaker = $('#speaker');
    const lineText = $('#lineText');
    const mode = $('#speakerMode');
    const cardFocus = $('#cardFocus');

    if(cardFocus){
      cardFocus.hidden = !ln.card;
      if(ln.card) cardFocus.src = asset(ln.card === true ? 'assets/cards/command-and-conquer-misprint.svg' : ln.card);
    }

    if(ln.type === 'title'){
      hideSceneAction();
      renderTitleCard(ln);
      if(dialogueBox) dialogueBox.hidden = true;
      renderChoices(null);
      return;
    }

    hideTitleCard();

    if(ln.type === 'pause'){
      hideSceneAction();
      if(dialogueBox) dialogueBox.hidden = true;
      renderChoices(null);
      scheduleAutoNext(ln);
      return;
    }

    if(ln.type === 'action'){
      renderSceneAction(ln.text || ln.action || '');
      if(dialogueBox) dialogueBox.hidden = true;
      renderChoices(null);
      scheduleAutoNext(ln);
      return;
    }

    hideSceneAction();

    if(dialogueBox) dialogueBox.hidden = !!ln.hideDialogue;
    if(speaker) speaker.textContent = ln.speaker || 'Narrador';
    if(mode){
      mode.textContent = ln.mode ? `(${ln.mode})` : '';
      mode.hidden = !ln.mode;
    }
    if(lineText) typeText(ln.text || '');
    renderChoices(ln.choices || null);
  }

  function choose(choice){
    clearPause();
    if(choice.set) Object.assign(state.flags, choice.set);
    if(choice.next){
      state.sceneId = choice.next;
      state.lineIndex = 0;
    }else{
      state.lineIndex++;
    }
    render();
  }

  function goNextScene(){
    clearPause();
    const idx = state.story.scenes.findIndex(s => s.id === state.sceneId);
    const cur = scene();

    if(cur?.next){
      state.sceneId = cur.next;
      state.lineIndex = 0;
      render();
      return;
    }

    if(idx >= 0 && idx < state.story.scenes.length - 1){
      state.sceneId = state.story.scenes[idx+1].id;
      state.lineIndex = 0;
      render();
      return;
    }

    hideTitleCard();
    hideSceneAction();
    const dialogueBox = $('#dialogueBox');
    if(dialogueBox) dialogueBox.hidden = false;
    $('#speaker').textContent = 'Mesa 42';
    const mode = $('#speakerMode');
    if(mode) mode.hidden = true;
    $('#lineText').textContent = 'Fim do trecho disponível.';
    $('#nextHint').textContent = 'Voltar para Mesa 42';
    saveProgress(true);
  }

  function next(){
    if(!state.started) return startStory();
    if(state.typing){
      finishTyping();
      return;
    }

    const ln = line();
    if(ln?.choices?.length) return;

    clearPause();
    const s = scene();
    if(state.lineIndex < (s.lines.length - 1)){
      state.lineIndex++;
      render();
    }else{
      goNextScene();
    }
  }

  async function saveProgress(completed=false){
    if(!window.Mesa42Progress || !state.story) return;
    const payload = { scene_id: state.sceneId, line_index: state.lineIndex, flags: state.flags, completed };
    const result = await window.Mesa42Progress.save(state.slug, payload);
    const btn = $('#saveBtn');
    if(!btn) return;
    const old = btn.textContent;
    btn.textContent = result.source === 'supabase' ? 'Salvo no Supabase' : 'Salvo local';
    setTimeout(()=> btn.textContent = old, 1200);
  }

  async function restore(){
    if(!window.Mesa42Progress) return;
    const saved = await window.Mesa42Progress.load(state.slug);
    if(saved?.scene_id){
      state.sceneId = saved.scene_id;
      state.lineIndex = Number(saved.line_index || 0);
      state.flags = saved.flags || {};
    }
  }

  function startStory(){
    state.started = true;
    const start = $('#startScreen');
    if(start) start.hidden = true;
    render();
  }

  async function init(opts){
    state.slug = opts.storySlug;
    state.basePath = opts.basePath || '';

    const res = await fetch(opts.storyUrl);
    state.story = await res.json();
    state.sceneId = state.story.startScene || state.story.scenes[0].id;

    const storyTitle = $('#storyTitle');
    if(storyTitle) storyTitle.textContent = state.story.title;

    await restore();
    if(!scene()){
      state.sceneId = state.story.startScene || state.story.scenes[0].id;
      state.lineIndex = 0;
      state.flags = {};
    }else{
      const current = scene();
      if(state.lineIndex >= (current.lines?.length || 0)) state.lineIndex = 0;
    }

    const startBtn = $('#startStoryBtn');
    if(startBtn) startBtn.addEventListener('click', startStory);

    const dialogueBox = $('#dialogueBox');
    if(dialogueBox){
      dialogueBox.addEventListener('click', next);
      dialogueBox.addEventListener('keydown', (e)=>{
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          next();
        }
      });
    }

    const stage = $('#vnStage');
    if(stage) stage.addEventListener('click', (e)=>{
      if(e.target.closest('button, a, .dialogue-box, .choice')) return;
      next();
    });

    document.addEventListener('keydown', (e)=>{
      if(e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' '){
        if(['INPUT','TEXTAREA','BUTTON','A'].includes(document.activeElement?.tagName)) return;
        e.preventDefault();
        next();
      }
    });

    const saveBtn = $('#saveBtn');
    if(saveBtn) saveBtn.addEventListener('click', (e)=>{ e.stopPropagation(); saveProgress(false); });

    setBg(state.story.defaultBg);
    renderCharacters(state.story.defaultCharacters || []);
  }

  window.Mesa42VN = { init, startStory };
})();
