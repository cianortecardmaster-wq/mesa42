# Mesa 42

Home estática para o projeto narrativo **Mesa 42**, do Cianorte Card Masters.

## Estrutura

```txt
/
├── index.html
├── css/style.css
├── js/obras.js
├── assets/
└── obras/
    └── command-and-conquer/
        └── index.html
```

## Como adicionar uma nova obra

1. Crie uma pasta em `obras/nome-da-obra/`.
2. Coloque o HTML, CSS, JS e assets próprios da obra nessa pasta.
3. Adicione um novo item no array `obras` em `js/obras.js`.

Exemplo:

```js
{
  numero: "História #002",
  titulo: "Nome da Obra",
  tipo: "Fanfic",
  status: "Disponível",
  resumo: "Resumo curto da obra.",
  imagem: "assets/minha-logo.png",
  link: "obras/nome-da-obra/index.html",
  disponivel: true,
  destaque: false
}
```

## Publicação no GitHub Pages

Suba todos os arquivos da pasta para o repositório e ative o GitHub Pages usando a branch `main` e a pasta `/root`.
