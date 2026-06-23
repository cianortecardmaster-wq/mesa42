(function(){
  const cfg = window.MESA42_CONFIG || {};
  const storageKey = (slug) => `mesa42:progress:${slug}`;

  async function saveLocal(slug, payload){
    localStorage.setItem(storageKey(slug), JSON.stringify({ ...payload, updated_at: new Date().toISOString() }));
    return { ok:true, source:'localStorage' };
  }
  async function loadLocal(slug){
    try { return JSON.parse(localStorage.getItem(storageKey(slug)) || 'null'); }
    catch { return null; }
  }

  async function supabaseFetch(path, options={}){
    if(!cfg.SUPABASE_URL || !cfg.SUPABASE_ANON_KEY) throw new Error('Supabase não configurado.');
    const url = `${cfg.SUPABASE_URL.replace(/\/$/,'')}${path}`;
    const headers = {
      apikey: cfg.SUPABASE_ANON_KEY,
      Authorization: `Bearer ${cfg.SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates'
    };
    const res = await fetch(url, { ...options, headers:{...headers, ...(options.headers||{})} });
    if(!res.ok) throw new Error(`Supabase error ${res.status}`);
    return res;
  }

  async function save(slug, payload){
    if(!cfg.ENABLE_SUPABASE_PROGRESS) return saveLocal(slug, payload);
    // Versão sem login: cria/atualiza progresso anônimo por device_id.
    // Para login por e-mail, use a tabela/políticas em supabase/schema.sql e adapte user_id.
    let deviceId = localStorage.getItem('mesa42:device_id');
    if(!deviceId){ deviceId = crypto.randomUUID(); localStorage.setItem('mesa42:device_id', deviceId); }
    const body = [{ device_id: deviceId, story_slug: slug, ...payload, updated_at: new Date().toISOString() }];
    await supabaseFetch('/rest/v1/mesa42_progress?on_conflict=device_id,story_slug', { method:'POST', body: JSON.stringify(body) });
    await saveLocal(slug, payload);
    return { ok:true, source:'supabase' };
  }

  async function load(slug){
    if(!cfg.ENABLE_SUPABASE_PROGRESS) return loadLocal(slug);
    let deviceId = localStorage.getItem('mesa42:device_id');
    if(!deviceId) return loadLocal(slug);
    try{
      const res = await supabaseFetch(`/rest/v1/mesa42_progress?device_id=eq.${encodeURIComponent(deviceId)}&story_slug=eq.${encodeURIComponent(slug)}&select=*`, { method:'GET' });
      const rows = await res.json();
      return rows[0] || loadLocal(slug);
    }catch(err){
      console.warn(err);
      return loadLocal(slug);
    }
  }

  window.Mesa42Progress = { save, load };
})();
