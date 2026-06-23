# Mesa42

Projeto narrativo da CC Master com histórias em formato Visual Novel.

## Histórias

- História #001 — Command and Conquer

## Publicação

Funciona como site estático. Pode subir direto no GitHub Pages.

## Estrutura

```txt
Mesa42/
├─ index.html
├─ historias/command-and-conquer/index.html
├─ data/command-and-conquer.json
├─ content/command-and-conquer.md
├─ css/
├─ js/
├─ assets/
└─ supabase/schema.sql
```

## Supabase

A primeira versão funciona sem Supabase, salvando o progresso em `localStorage`.

Para ativar Supabase:

1. Crie um projeto no Supabase.
2. Rode o SQL de `supabase/schema.sql`.
3. Em `js/config.js`, preencha:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ENABLE_SUPABASE_PROGRESS: true`

## Como adicionar histórias futuras

Crie outro JSON em `/data/` seguindo o formato de `command-and-conquer.json`.

A engine já aceita escolhas:

```json
{
  "speaker": "Narrador",
  "text": "Você escuta um barulho atrás da mesa.",
  "choices": [
    { "label": "Investigar", "next": "cena-investigar" },
    { "label": "Ignorar", "next": "cena-ignorar" }
  ]
}
```

A História #001 é linear, mas a estrutura já suporta caminhos diferentes.
