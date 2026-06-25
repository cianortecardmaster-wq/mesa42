# Mesa 42

Site estático para o projeto **Mesa 42**, com foco em histórias de ficção sobre card games e a comunidade local.

## Ideia principal

A Home não carrega a história em si. Ela apenas lista as postagens em ordem de publicação e direciona para páginas independentes.

Formatos previstos:

- Visual Novel
- Textos
- Graphic Novels
- Outros formatos literários futuros

## Estrutura

```txt
index.html                         # Home / vitrine cronológica
assets/                            # logos, fundos, personagens, cartas
css/style.css                      # estilo geral
css/vn.css                         # estilo da visual novel
js/home.js                         # carrega data/posts.json na Home
js/vn-engine.js                    # motor simples de visual novel
data/posts.json                    # lista de postagens da Home
data/command-and-conquer-vn.json   # roteiro da VN #001
postagens/001-command-and-conquer/ # central da postagem
historias/command-and-conquer/     # visual novel
textos/command-and-conquer/        # versão texto
graphic-novels/command-and-conquer/# versão graphic novel futura
docs/estrutura.html                # guia rápido dentro do site
```

## Como criar nova postagem

1. Crie a pasta da postagem em `postagens/`.
2. Crie as páginas de formato que precisar, por exemplo `historias/`, `textos/` ou `graphic-novels/`.
3. Cadastre a postagem em `data/posts.json`.

Exemplo:

```json
{
  "date": "2026-06-25",
  "number": "História #002",
  "kind": "História",
  "title": "Nome da História",
  "format": "Visual Novel",
  "status": "Publicado",
  "summary": "Resumo curto para a Home.",
  "url": "postagens/002-nome-da-historia/",
  "cover": "assets/bg/capa.webp",
  "tags": ["Flesh and Blood", "Suspense"]
}
```

## Como editar a visual novel

Edite `data/command-and-conquer-vn.json`.

Cada item de `steps` representa um clique da história. Uma etapa pode ter:

- `background`: fundo da cena ou `black`
- `titleCard`: título central
- `characters`: personagens visíveis
- `objects`: objetos visíveis, como carta ou celular
- `speaker`: nome de quem fala
- `mode`: `fala`, `pensamento`, `narração`, etc.
- `text`: texto da caixa
- `effect`: `flash`, `shake` ou `focus`

## Publicação

Pode subir direto no GitHub Pages. Não precisa de build, npm ou banco de dados para essa versão inicial.

## Visual Novel no mobile

A página da Visual Novel abre em modo horizontal no celular por padrão.

O botão `Vertical`, no canto superior da interface, remove o modo horizontal forçado e volta para a leitura vertical. Depois disso, o botão passa a mostrar `Horizontal`, permitindo voltar ao modo horizontal.

Essa preferência fica salva no navegador do visitante usando `localStorage`, então cada pessoa pode escolher como prefere ler.

