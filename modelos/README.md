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
<link rel="stylesheet" href="../../css/obra-texto.css" />
```

4. Cadastre a obra em `js/obras.js`, preenchendo título, autor, data, categoria, resumo, imagem, link e tags.

5. Para colocar a obra em destaque na home, adicione a tag `favorita` ou `destaque`. Se houver mais de uma, a mais recente fica em destaque.
