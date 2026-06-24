(function(){
  const $ = (sel) => document.querySelector(sel);
  let state = { story:null, slug:'', basePath:'', sceneId:null, lineIndex:0, flags:{}, visited:[] };

  function asset(path){
    if(!path) return '';
    if(path.startsWith('http') || path.startsWith('/') || path.startsWith('data:')) return path;
    return state.basePath + path;
  }

  function scene(){ return state.story.scenes.find(s => s.id === state.sceneId); }
  function line(){ const s = scene(); return s?.lines?.[state.lineIndex]; }

  function setSceneVisuals(s){
    const stage = $('#vnStage');
    stage.dataset.scene = s.id || '';
    stage.style.setProperty('--scene-bg', `url('${asset(s.bg || state.story.defaultBg)}')`);
    stage.style.setProperty('--scene-bg-pos', s.bgPosition || 'center');
    stage.style.setProperty('--scene-bg-filter', s.bgFilter || 'saturate(.9) brightness(.68)');
    stage.style.setProperty('--scene-overlay', s.overlay || 'radial-gradient(circle at 50% 30%,transparent 0,rgba(0,0,0,.22) 38%,rgba(0,0,0,.78) 100%),linear-gradient(to top,rgba(0,0,0,.85),transparent 46%)');
  }

  function setEffect(effect){
    const stage = $('#vnStage');
    stage.classList.remove('glitch','shake');
    $('#vnBg').classList.toggle('fade-black', effect === 'black');
    if(effect === 'glitch' || effect === 'shake'){
      void stage.offsetWidth;
      stage.classList.add(effect);
    }
  }

  function renderTitleCard(s, ln){
    const title = $('#sceneTitleCard');
    const show = ln?.titleCard ?? s.titleCard;
    title.hidden = !show;
    title.textContent = show ? (ln?.titleText || s.titleText || state.story.title || '') : '';
  }

  function renderCharacters(chars=[]){
    const box = $('#characters');
    box.innerHTML = '';
    box.className = 'characters';
    chars.forEach((ch, idx) => {
      const img = document.createElement('img');
      img.className = 'character' + (ch.dim ? ' dim' : '');
      if(ch.position) img.classList.add(`character-${ch.position}`);
      if(ch.size) img.dataset.size = ch.size;
      img.src = asset(ch.src || `assets/chars/${ch.id}.svg`);
      img.alt = ch.name || ch.id || 'Personagem';
      img.style.order = String(idx);
      if(ch.x) img.style.setProperty('--char-x', ch.x);
      if(ch.y) img.style.setProperty('--char-y', ch.y);
      box.appendChild(img);
    });
  }

  function interpolate(text=''){
    return text.replace(/\{(\w+)\}/g, (_, key) => state.flags[key] ?? '');
  }

  function updateProgress(){
    const all = state.story.scenes.reduce((acc,s)=>acc + (s.lines?.length || 0),0);
    let before = 0;
    for(const s of state.story.scenes){
      if(s.id === state.sceneId) break;
      before += (s.lines?.length || 0);
    }
    const pct = all ? ((before + state.lineIndex + 1)/all)*100 : 0;
    $('#progressBar').style.setProperty('--progress', `${Math.max(0, Math.min(100, pct))}%`);
  }

  function renderSpeaker(ln){
    const speaker = $('#speaker');
    const box = $('#dialogueBox');
    const name = ln.speaker || '';
    speaker.textContent = name;
    speaker.hidden = !name;
    box.classList.toggle('thought', !!ln.thought);
    box.classList.toggle('stage-direction', !!ln.stage);
    if(ln.thought) speaker.setAttribute('data-mode','pensamento');
    else speaker.removeAttribute('data-mode');
  }

  function render(){
    const s = scene();
    if(!s) return;
    const ln = line();
    if(!ln) return goNextScene();

    setSceneVisuals(s);
    renderTitleCard(s, ln);
    renderCharacters(s.characters || []);
    renderSpeaker(ln);

    $('#lineText').textContent = interpolate(ln.text || '');
    $('#cardFocus').hidden = !ln.card;
    if(ln.card) $('#cardFocus').src = asset(ln.card === true ? 'assets/cards/command-and-conquer-misprint.svg' : ln.card);
    setEffect(ln.effect || s.effect || '');
    renderChoices(ln.choices || null);
    updateProgress();
    maybeOpenInvestigation(ln);
  }

  function renderChoices(choices){
    const wrap = $('#choices');
    wrap.innerHTML = '';
    if(!choices || !choices.length){
      wrap.hidden = true;
      $('#nextHint').hidden = false;
      return;
    }
    wrap.hidden = false;
    $('#nextHint').hidden = true;
    choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.textContent = choice.label;
      btn.addEventListener('click', (ev) => { ev.stopPropagation(); choose(choice); });
      wrap.appendChild(btn);
    });
  }

  function choose(choice){
    if(choice.set) Object.assign(state.flags, choice.set);
    if(choice.next){
      state.visited.push(state.sceneId);
      state.sceneId = choice.next;
      state.lineIndex = 0;
    } else {
      state.lineIndex++;
    }
    render();
  }

  function goNextScene(){
    const idx = state.story.scenes.findIndex(s => s.id === state.sceneId);
    const cur = scene();
    if(cur?.next){
      state.visited.push(state.sceneId);
      state.sceneId = cur.next;
      state.lineIndex = 0;
      render();
      return;
    }
    if(idx >= 0 && idx < state.story.scenes.length - 1){
      state.visited.push(state.sceneId);
      state.sceneId = state.story.scenes[idx+1].id;
      state.lineIndex = 0;
      render();
      return;
    }
    $('#sceneTitleCard').hidden = true;
    $('#speaker').textContent = 'Mesa 42';
    $('#speaker').hidden = false;
    $('#speaker').removeAttribute('data-mode');
    $('#dialogueBox').classList.remove('thought','stage-direction');
    $('#lineText').textContent = 'Fim da História #001.';
    $('#nextHint').textContent = 'Voltar para Mesa 42';
    $('#dialogueBox').onclick = () => location.href = state.basePath;
    saveProgress(true);
  }

  function next(){
    const ln = line();
    if(ln?.choices?.length) return;
    const s = scene();
    if(state.lineIndex < (s.lines.length - 1)){
      state.lineIndex++;
      render();
    } else {
      goNextScene();
    }
  }

  function maybeOpenInvestigation(ln){
    const panel = $('#investigatePanel');
    if(ln.inspect) panel.classList.add('open');
    else panel.classList.remove('open');
  }

  function setupInvestigation(){
    document.querySelectorAll('[data-inspect]').forEach(btn => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const key = btn.dataset.inspect;
        const texts = state.story.inspect || {};
        const item = texts[key] || {};
        $('#speaker').textContent = item.speaker || 'JP';
        $('#speaker').hidden = false;
        $('#speaker').removeAttribute('data-mode');
        $('#dialogueBox').classList.remove('thought','stage-direction');
        $('#lineText').textContent = item.text || 'Nada aqui parece normal.';
        state.flags[`inspect_${key}`] = true;
        const required = ['nome','topo','baixo','foil'];
        if(required.every(k => state.flags[`inspect_${k}`])){
          setTimeout(()=>{
            $('#investigatePanel').classList.remove('open');
            state.lineIndex++;
            render();
          }, 650);
        }
      });
    });
  }

  async function saveProgress(completed=false){
    const payload = { scene_id: state.sceneId, line_index: state.lineIndex, flags: state.flags, completed };
    const result = await window.Mesa42Progress.save(state.slug, payload);
    const btn = $('#saveBtn');
    const old = btn.textContent;
    btn.textContent = result.source === 'supabase' ? 'Salvo no Supabase' : 'Salvo local';
    setTimeout(()=> btn.textContent = old, 1200);
  }

  async function restore(){
    const saved = await window.Mesa42Progress.load(state.slug);
    if(saved?.scene_id){
      state.sceneId = saved.scene_id;
      state.lineIndex = Number(saved.line_index || 0);
      state.flags = saved.flags || {};
    }
  }

  async function init(opts){
    state.slug = opts.storySlug;
    state.basePath = opts.basePath || '';
    const res = await fetch(opts.storyUrl);
    state.story = await res.json();
    state.sceneId = state.story.startScene || state.story.scenes[0].id;
    $('#storyTitle').textContent = state.story.title;
    await restore();
    setupInvestigation();
    $('#dialogueBox').addEventListener('click', next);
    $('#dialogueBox').addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); next(); }});
    document.addEventListener('keydown', (e)=>{ if(e.key === 'ArrowRight' || e.key === 'Enter') next(); });
    $('#saveBtn').addEventListener('click', (e)=>{ e.stopPropagation(); saveProgress(false); });
    render();
  }

  window.Mesa42VN = { init };
})();
