# Mesa 42

Site estático para o projeto **Mesa 42**, com histórias de ficção sobre card games e a comunidade local.

## Como ficou a estrutura

A **Home** é limpa e serve apenas como lista de histórias. Ela não carrega cenas, textos longos, capas grandes ou conteúdo interno das postagens.

História atual:

- `index.html` — Home com a lista de histórias.
- `historias/command-and-conquer/` — Visual Novel em tela cheia.
- `data/command-and-conquer-vn.json` — roteiro da Visual Novel.
- `css/vn.css` — layout da Visual Novel.
- `js/vn-engine.js` — motor da Visual Novel.

## Visual Novel

A Visual Novel começa sempre com fundo preto e título. Ao clicar em **Avançar**, entra o cenário, depois personagens, objetos e texto.

No mobile, a Visual Novel abre em modo horizontal por padrão. Há um botão no canto superior para alternar entre **Vertical** e **Horizontal**.

## Para adicionar uma nova história

1. Crie uma pasta em `historias/nome-da-historia/`.
2. Crie um JSON de roteiro em `data/nome-da-historia-vn.json`.
3. Adicione a nova história na lista da Home (`index.html`).

A Home deve continuar apenas listando e direcionando para as histórias.
