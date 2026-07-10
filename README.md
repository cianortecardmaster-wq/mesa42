# Mesa 42

Home do projeto Mesa 42, área narrativa do Cianorte Card Masters.

## Como subir no GitHub Pages

1. Extraia o ZIP.
2. Envie o conteúdo da pasta para a raiz do repositório.
3. No GitHub, vá em Settings > Pages.
4. Configure a branch `main` e a pasta `/root`.

## Estrutura principal

```txt
index.html              # home do arquivo narrativo
css/style.css           # visual da home
css/obra-texto.css      # padrão das páginas de texto
js/obras-data.js        # cadastro central das obras
js/obras.js             # renderização e busca da home
js/catalogo.js           # filtros e paginação das páginas de acervo
modelos/obra-texto.html # modelo para obras estilo blog/texto
obras/                  # páginas das obras
```

## Obras cadastradas na home

As obras exibidas na homepage e nas páginas Acervo, Textos, Séries e Interativos ficam em `js/obras-data.js`.

Cada item deve ter, no mínimo:

```js
{
  titulo: 'Título da obra',
  autor: 'Neto',
  data: '2026-07-09',
  dataLabel: '9 de julho de 2026',
  categoria: 'Contos',
  resumo: 'Resumo curto da obra.',
  tipos: ['textos'],
  url: 'obras/nome-da-obra/',
  imagem: 'obras/nome-da-obra/assets/capa.png',
  imagemAlt: 'Descrição da imagem',
  cta: 'Ler',
  tags: ['conto', 'mesa 42']
}
```

A home mostra as 10 últimas obras publicadas. As páginas de catálogo mostram até 25 itens por página e criam a navegação para publicações anteriores automaticamente.

## Marcação de destaque

Para dar destaque visual a uma obra nos cards, adicione a tag:

```js
tags: ['favorita']
```

ou:

```js
tags: ['destaque']
```

A tag recebe um tratamento visual especial nos cards. A ordem das obras continua sendo definida pela data de publicação.

## Páginas estilo blog/texto

Use `modelos/obra-texto.html` como base para textos menos interativos, como:

- contos;
- ficção documental;
- reportagem fictícia;
- cartas;
- documentos;
- ensaios narrativos.

O CSS compartilhado dessas páginas fica em:

```txt
css/obra-texto.css
```

Esse padrão não deve ser usado em obras com visual próprio, como visual novel, mini game, campanha falsa muito específica ou experiência interativa.

## Obras com visual próprio

Obras interativas ou com identidade específica mantêm seus próprios arquivos de HTML, CSS e JS dentro da pasta da obra.

Exemplos:

```txt
obras/command-and-conquer/
obras/venca-o-campeao-nacional/
obras/financiamento-coletivo-cartas-nosso-dinheiro/
```

## Adicionar nova obra

1. Crie uma pasta em `obras/`.
2. Para texto simples, copie `modelos/obra-texto.html` para a pasta da nova obra.
3. Para obra com visual próprio, crie HTML/CSS/JS próprios dentro da pasta da obra.
4. Cadastre a obra em `js/obras-data.js` e informe em `tipos` se ela pertence a `textos`, `series` e/ou `interativos`.
5. Use a tag `favorita` ou `destaque` apenas quando quiser dar tratamento visual especial ao card.
