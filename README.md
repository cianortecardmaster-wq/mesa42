# Mesa 42

Home estática do projeto **Mesa 42**, área narrativa do Cianorte Card Masters.

A home funciona como uma vitrine de obras. Cada card aponta para uma obra em pasta própria, com HTML, CSS, JS e assets independentes.

## Estrutura principal

```txt
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── obras.js
├── assets/
│   ├── icon-mesa42.png
│   ├── logo-mesa-42.png
│   ├── logo-cc-masters.png
│   ├── command-and-conquer-logo.png
│   └── placeholders/
└── obras/
    └── command-and-conquer/
        ├── index.html
        ├── style.css
        ├── story.js
        ├── engine.js
        └── assets/
```

## Obra já ligada na home

- **História #001 — Command and Conquer**
- Tipo: Visual Novel
- Link da home: `obras/command-and-conquer/index.html`

## Como adicionar nova obra

1. Crie uma nova pasta dentro de `obras/`, por exemplo:

```txt
obras/nome-da-obra/index.html
```

2. Coloque os arquivos próprios da obra dentro dessa pasta.
3. Abra `js/obras.js` e adicione um novo objeto no array `obras`.

Exemplo:

```js
{
  numero: "História #002",
  titulo: "Nome da Obra",
  tipo: "Fanfic",
  status: "Disponível",
  resumo: "Resumo curto da obra.",
  imagem: "assets/placeholders/obra-placeholder.svg",
  link: "obras/nome-da-obra/index.html",
  disponivel: true,
  destaque: false
}
```

## GitHub Pages

Suba todos os arquivos na raiz do repositório e ative o GitHub Pages usando a branch `main` e a pasta `/root`.
