# Command and Conquer — Cena 01

Primeira cena da visual novel **História #001 — Command and Conquer**.

## Arquivos

- `index.html` — estrutura principal da página
- `style.css` — layout, visual da novel e responsividade
- `engine.js` — motor da visual novel
- `story.js` — roteiro da Cena 01
- `assets/bg/quarto-01.webp` — fundo do quarto iluminado
- `assets/characters/jp-normal.png` — sprite do JP
- `assets/ui/logo-command-and-conquer.png` — logo de abertura

## Recursos incluídos

- layout desktop ocupando a tela toda
- mobile com recomendação para usar na horizontal
- botão no canto superior direito para alternar entre horizontal e vertical
- clique na tela para avançar
- botões **Voltar** e **Avançar** dentro da caixa de diálogo
- suporte a teclado:
  - `Enter`, `Espaço`, `→` avançam
  - `←` e `Backspace` voltam
  - `H` abre o histórico
- efeito de digitação
- pensamentos em estilo visual diferente
- histórico
- modo auto
- pular 3 passos de cada vez
- salvar/carregar progresso no `localStorage`
- reiniciar história

## Como publicar

1. Envie toda a pasta para o repositório/pasta da novel no GitHub.
2. Garanta que a estrutura de pastas seja mantida.
3. Abra o `index.html` dentro da rota pública do site.

## Próximo passo recomendado

Criar a **Cena 02**, com a mesa vista de cima, deck aberto e objetos aparecendo conforme o texto avança.
