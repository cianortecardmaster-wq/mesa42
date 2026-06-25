# Mesa 42

Home do projeto Mesa 42, área narrativa do Cianorte Card Masters.

## Como subir no GitHub Pages

1. Extraia o ZIP.
2. Envie o conteúdo da pasta para a raiz do repositório.
3. No GitHub, vá em Settings > Pages.
4. Configure a branch `main` e a pasta `/root`.

## Link da visual novel

Na home, o botão **Abrir obra** aponta para:

```txt
./obras/command-and-conquer/
```

A visual novel está em:

```txt
obras/command-and-conquer/index.html
```

Os arquivos dela são independentes da home:

```txt
obras/command-and-conquer/
├── index.html
├── style.css
├── story.js
├── engine.js
└── assets/
```

## Adicionar novas obras

Crie uma nova pasta dentro de `obras/` e adicione um novo card no `index.html` da home.
