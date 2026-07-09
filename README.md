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
js/obras.js             # cadastro das obras exibidas na home
modelos/obra-texto.html # modelo para obras estilo blog/texto
obras/                  # páginas das obras
```

## Obras cadastradas na home

As obras exibidas na homepage ficam em `js/obras.js`.

Cada item deve ter, no mínimo:

```js
{
  titulo: 'Título da obra',
  autor: 'Neto',
  data: '2026-07-09',
  dataLabel: '9 de julho de 2026',
  categoria: 'Contos',
  chamadaCategoria: 'Último conto',
  resumo: 'Resumo curto da obra.',
  url: './obras/nome-da-obra/index.html',
  imagem: './obras/nome-da-obra/assets/capa.png',
  imagemAlt: 'Descrição da imagem',
  cta: 'Ler',
  tags: ['conto', 'mesa 42']
}
```

A home mostra as 10 últimas obras publicadas.

## Destaque da home

Para colocar uma obra no destaque principal, adicione a tag:

```js
tags: ['favorita']
```

ou:

```js
tags: ['destaque']
```

Se houver mais de uma obra marcada, a mais recente pela data fica em destaque.

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
4. Cadastre a obra em `js/obras.js`.
5. Use a tag `favorita` ou `destaque` apenas quando quiser que ela apareça no destaque da home.
