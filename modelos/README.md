# Modelos do Mesa 42

## `obra-texto.html`

Use este modelo para páginas de leitura simples:

- contos;
- reportagem fictícia;
- ficção documental;
- cartas;
- documentos;
- ensaios narrativos;
- textos sem interação própria.

Não use este modelo em obras com visual próprio, como visual novel, mini game, campanha falsa muito específica ou página interativa.

## Como usar

1. Crie uma pasta nova dentro de `obras/`, por exemplo:

```txt
obras/minha-obra/
```

2. Copie `modelos/obra-texto.html` para:

```txt
obras/minha-obra/index.html
```

3. Ajuste os caminhos do HTML copiado para subir dois níveis até a raiz:

```html
<link rel="icon" type="image/png" href="../../assets/icon-mesa42.png" />
<img src="../../assets/logo-mesa-42.png" alt="Mesa 42" />
<link rel="stylesheet" href="../../css/site-header.css" />
<link rel="stylesheet" href="../../css/obra-texto.css" />
<link rel="stylesheet" href="../../css/site-footer.css" />
<script src="../../js/site-header.js"></script>
<script src="../../js/blog-share.js"></script>
```

4. Mantenha no cabeçalho as abas `Início`, `Acervo`, `Textos`, `Séries`, `Interativos` e `Sobre`.

5. Cadastre a obra em `js/obras-data.js`, preenchendo título, autor, data, categoria, tipos, resumo, imagem, link e tags. Use `textos`, `series` e/ou `interativos` no campo `tipos`.

6. Para colocar a obra em destaque na home, adicione a tag `favorita` ou `destaque`. Se houver mais de uma, a mais recente fica em destaque.

7. Atualize as metatags `canonical`, `og:*` e `twitter:*` com a URL pública, o título, o resumo, o tempo de leitura e a imagem de capa da obra. No `og:description` e no `twitter:description`, mantenha o tempo de leitura junto ao resumo (por exemplo: `Resumo da obra · 6 min de leitura.`). Use URLs absolutas para que WhatsApp, Facebook e X consigam montar a prévia do link.

8. Mantenha o script `../../js/blog-share.js` e os grupos `.share-icons` do modelo. O script preenche os links de WhatsApp, Facebook e X e trata o compartilhamento no Instagram.
