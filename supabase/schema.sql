-- Mesa42 — schema inicial para salvar progresso no Supabase.
-- Funciona para progresso anônimo por device_id. Para login por e-mail, adicione user_id/auth depois.

create table if not exists public.mesa42_progress (
  device_id uuid not null,
  story_slug text not null,
  scene_id text not null,
  line_index integer not null default 0,
  flags jsonb not null default '{}'::jsonb,
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (device_id, story_slug)
);

alter table public.mesa42_progress enable row level security;

-- Para a primeira versão, o progresso é anônimo por device_id.
-- A policy abaixo permite inserir/ler/atualizar com a anon key.
-- Se quiser login depois, substitua por policies usando auth.uid().
create policy "mesa42 anonymous read progress"
  on public.mesa42_progress for select
  using (true);

create policy "mesa42 anonymous insert progress"
  on public.mesa42_progress for insert
  with check (true);

create policy "mesa42 anonymous update progress"
  on public.mesa42_progress for update
  using (true)
  with check (true);
