const A = 'assets/';

const CARDS = {
  victor: {
    id: 'victor', name: 'Victor Goldmane, High and Mighty', image: A + 'victor-goldmane.webp',
    type: 'Guardian Hero', cost: '—', pitch: '—', attack: '—', defense: '—', life: 40,
    text: [
      '<em>Tradução:</em> A primeira vez em cada turno que você cria um token de Gold por um efeito que você controla, compre uma carta.',
      'A primeira vez em cada turno que você perderia um <em>clash</em>, em vez disso você pode destruir um Gold que controla. Se fizer isso, coloque todos os cards revelados no fundo dos decks de seus donos e faça <em>clash</em> novamente.'
    ],
    role: 'Seu herói. No exercício, Victor está com 1 de vida e precisa sobreviver à resposta arcana do Oscilio.'
  },
  oscilio: {
    id: 'oscilio', name: 'Oscilio, Constella Intelligence', image: A + 'oscilio-constella-intelligence.webp',
    type: 'Elemental Wizard Hero', cost: '—', pitch: '—', attack: '—', defense: '—', life: 36,
    text: [
      '<em>Once per Turn Instant</em> — Descarte um instant: compre uma carta.',
      '<em>Essence of Lightning</em> — Você pode ter cards Lightning em seu deck.'
    ],
    role: 'O oponente. Ele está sem equipamentos, com 1 de vida e 4 cartas na mão. A linha dele é fixa neste puzzle.'
  },
  volzar: {
    id: 'volzar', name: 'Volzar, Meteor Storm', image: A + 'volzar-meteor-storm.webp',
    type: 'Weapon', cost: '—', pitch: '—', attack: '—', defense: '—',
    text: ['<em>Instant</em> — {t}: <em>Amp 1</em>. Ative apenas se um card instant foi colocado no seu graveyard neste turno.'],
    role: 'Arma do Oscilio. No fim da sequência, Volzar aumenta a pressão arcana e obriga Victor a pagar 2 recursos para sobreviver.'
  },
  crown: {
    id: 'crown', name: 'Crown of Dominion', image: A + 'crown-of-dominion.webp',
    type: 'Equipment — Head', cost: '—', pitch: '—', attack: '—', defense: '—',
    text: ['Equipamento em campo. A coroa já cumpriu seu papel no cenário: Victor começou com 2 Gold.'],
    role: 'Carta de mesa. Clique para consultar, mas ela não tem uma ação ativa neste exercício.'
  },
  aegis: {
    id: 'aegis', name: 'Aurum Aegis', image: A + 'aurum-aegis.webp',
    type: 'Guardian Equipment — Off-Hand', cost: '—', pitch: '—', attack: '—', defense: 2,
    text: [
      '<em>Victor Specialization</em> — Você só pode ter isso no deck se seu herói é Victor.',
      'Isso conta como um Gold.',
      '<em>Temper</em> — Quando a combat chain fecha, se isso defendeu, coloque um marcador -1{d} nele; se tiver 0{d}, destrua-o.'
    ],
    role: 'Escudo de Victor. Ele fica ao lado do herói como off-hand e também conta como Gold.'
  },
  gloves: {
    id: 'gloves', name: 'Nullrune Gloves', image: A + 'nullrune-gloves.webp',
    type: 'Equipment — Arms', cost: '—', pitch: '—', attack: '—', defense: '—',
    text: ['<em>Arcane Barrier 1</em> — Se seu herói seria alvo de dano arcano, você pode pagar 1 recurso para prevenir 1 daquele dano arcano.'],
    role: 'Uma das peças que permite sobreviver. No exercício, ela representa parte do pagamento de recursos contra dano arcano.'
  },
  boots: {
    id: 'boots', name: 'Nullrune Boots', image: A + 'nullrune-boots.webp',
    type: 'Equipment — Legs', cost: '—', pitch: '—', attack: '—', defense: '—',
    text: ['<em>Arcane Barrier 1</em> — Se seu herói seria alvo de dano arcano, você pode pagar 1 recurso para prevenir 1 daquele dano arcano.'],
    role: 'A segunda peça de prevenção arcana. Na pressão final, pagar 2 recursos com Nullrune é o ponto central do puzzle.'
  },
  millers: {
    id: 'millers', name: "Miller's Grindstone", image: A + 'millers-grindstone.webp',
    type: 'Weapon', cost: '—', pitch: '—', attack: '—', defense: '—',
    text: ['Arma em campo do Victor. Neste recorte, ela está na mesa para contextualizar a posição, mas a linha de vitória passa pelas cartas da mão e pela prevenção arcana.'],
    role: 'Carta de mesa. Consulta visual apenas nesta versão do exercício.'
  },
  boulder: {
    id: 'boulder', name: 'Boulder Drop', image: A + 'boulder-drop.webp',
    type: 'Guardian Action — Attack', color: 'red', cost: 3, pitch: 1, attack: 7, defense: 3,
    text: ['<em>Crush</em> — Quando isso causa 4 ou mais de dano a um herói, aquele herói coloca um card da própria mão no topo do próprio deck.'],
    role: 'Ataque caro. Custa 3 recursos e ameaça dano letal, mas pode deixar você sem recurso para a resposta do Oscilio se o pitch for mal escolhido.'
  },
  golden: {
    id: 'golden', name: 'The Golden Son', image: A + 'the-golden-son.webp',
    type: 'Guardian Action — Attack', color: 'yellow', cost: 4, pitch: 2, attack: 7, defense: 3,
    text: [
      '<em>Victor Specialization</em>.',
      'Como custo adicional para jogar isso, você pode destruir um Gold que controla. Se fizer isso, isso recebe +3 de ataque e <em>overpower</em>.',
      'Quando você vence um <em>clash</em> revelando isso, crie um token de Gold.'
    ],
    role: 'Ataque forte, mas exige 4 recursos. Como o Oscilio está a 1 de vida, o ponto não é causar muito dano: é atacar sem gastar toda a defesa contra arcano.'
  },
  clash: {
    id: 'clash', name: 'Clash of Might', image: A + 'clash-of-might.webp',
    type: 'Brute / Guardian Action — Attack', color: 'blue', cost: 2, pitch: 3, attack: 4, defense: 3,
    text: ['Quando isso defende, faça <em>clash</em> com o herói atacante. O vencedor cria um token de Might.'],
    role: 'Melhor carta para pitch porque gera 3 recursos. Também pode ser jogada como ataque barato de custo 2.'
  },
  shelter: {
    id: 'shelter', name: 'Shelter from the Storm', image: A + 'shelter-from-the-storm.webp',
    type: 'Generic Defense Reaction', color: 'red', cost: 0, pitch: 1, attack: '—', defense: 4,
    text: ['<em>Instant</em> — Descarte isso: As próximas 3 vezes que você receberia dano neste turno, previna 1 daquele dano.'],
    role: 'Carta defensiva. No exercício, ela pode salvar o primeiro ponto de dano de Astral Bridge, mas a pressão final ainda exige 2 recursos.'
  },
  visit: {
    id: 'visit', name: 'Visit Goldmane Estate', image: A + 'visit-goldmane-estate.webp',
    type: 'Guardian Action', color: 'blue', cost: 1, pitch: 3, attack: '—', defense: 3,
    text: ['<em>Victor Specialization</em>. Crie um token de Gold. Então, se você controla 3 ou mais Gold, crie aquela quantidade de tokens de Might.', '<em>Go again</em>.'],
    role: 'Carta comprada ao destruir um Gold. Ela entra na mão e pode virar recurso importante para sobreviver ao dano arcano.'
  },
  blink: {
    id: 'blink', name: 'Blink', image: A + 'blink.webp',
    type: 'Instant', color: 'blue', cost: 0, pitch: 3, attack: '—', defense: '—',
    text: ['Ganhe 1 action point.'],
    role: 'Oscilio descarta Blink para ativar Constella Intelligence e compra uma carta sem revelá-la.'
  },
  echoflash: {
    id: 'echoflash', name: 'Echoflash', image: A + 'echoflash.webp',
    type: 'Instant', color: 'yellow', cost: 0, pitch: 2, attack: '—', defense: '—',
    text: ['Cause 1 dano arcano ao herói alvo.', 'Quando isso é colocado no seu graveyard vindo de qualquer lugar, seu herói causa 1 dano arcano ao herói alvo.'],
    role: 'Carta revelada quando Oscilio a joga. Junto de Cloud Cover e Volzar, cria a pressão final.'
  },
  astral: {
    id: 'astral', name: 'Astral Bridge', image: A + 'astral-bridge.webp',
    type: 'Instant', color: 'red', cost: 0, pitch: 1, attack: '—', defense: '—',
    text: ['Coloque o card do topo do seu deck no graveyard. Se for um instant, você pode jogá-lo neste turno.', '<em>Starfall</em> — Se um instant foi colocado no seu graveyard neste turno, cause 1 dano arcano ao herói alvo.'],
    role: 'Primeira ameaça da linha do Oscilio: 1 dano arcano por Starfall.'
  },
  cloud: {
    id: 'cloud', name: 'Cloud Cover', image: A + 'cloud-cover.webp',
    type: 'Instant', color: 'red', cost: 0, pitch: 1, attack: '—', defense: '—',
    text: ['A próxima vez que você receberia dano neste turno, previna 3 daquele dano.'],
    role: 'Carta descartada/colocada no graveyard durante a linha do Oscilio para habilitar a pressão de Echoflash.'
  },
  comet: {
    id: 'comet', name: 'Comet Collision', image: A + 'comet-collision.webp',
    type: 'Instant', color: 'red', cost: 0, pitch: 1, attack: '—', defense: '—',
    text: ['Cause 3 dano arcano a qualquer alvo.', '<em>Starfall</em> — Se um instant foi colocado no seu graveyard neste turno, em vez disso cause 4 dano arcano.'],
    role: 'Está na mão reposta do Oscilio, mas não é a linha escolhida neste exercício.'
  },
  gone: {
    id: 'gone', name: 'Gone in a Flash', image: A + 'gone-in-a-flash.webp',
    type: 'Action — Attack', color: 'red', cost: '—', pitch: 1, attack: '—', defense: '—',
    text: ['Quando isso ataca, a próxima vez que você joga um instant neste chain link, você pode retornar isso para a mão de seu dono.'],
    role: 'Já estava banida antes do recorte da jogada.'
  },
  second: {
    id: 'second', name: 'Second Strike', image: A + 'second-strike.webp',
    type: 'Action — Attack', color: 'red', cost: '—', pitch: 1, attack: '—', defense: '—',
    text: ['Quando isso ataca, se você causou dano neste turno, isso recebe +1{p} e <em>go again</em>.'],
    role: 'É revelada por Astral Bridge e colocada no Graveyard do Oscilio logo depois.'
  }
};

const state = {
  phase: 'intro',
  resources: 0,
  playerLife: 1,
  opponentLife: 1,
  gold: 2,
  actionPoint: 1,
  opponentHand: 4,
  hand: ['boulder', 'golden', 'clash', 'shelter'],
  pitched: [],
  played: [],
  discarded: [],
  revealed: ['gone'],
  opponentArena: [],
  opponentGraveyard: [],
  volzarTapped: false,
  earlyShelter: false,
  currentAttack: null,
  pending: null,
  selectedPitch: new Set(),
  log: []
};

const el = {
  intro: document.getElementById('introScreen'),
  game: document.getElementById('gameScreen'),
  start: document.getElementById('startBtn'),
  status: document.getElementById('statusBar'),
  table: document.getElementById('tableLayer'),
  revealed: document.getElementById('revealedCards'),
  hand: document.getElementById('playerHand'),
  title: document.getElementById('phaseTitle'),
  message: document.getElementById('messageBox'),
  actions: document.getElementById('actionBox'),
  log: document.getElementById('logList'),
  modal: document.getElementById('cardModal'),
  modalImage: document.getElementById('modalImage'),
  modalTitle: document.getElementById('modalTitle'),
  modalType: document.getElementById('modalType'),
  modalStats: document.getElementById('modalStats'),
  modalText: document.getElementById('modalText'),
  modalRole: document.getElementById('modalRole'),
  modalButtons: document.getElementById('modalButtons')
};

el.start.addEventListener('click', startGame);
document.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});

function startGame() {
  state.phase = 'planning';
  el.intro.classList.add('hidden');
  el.game.classList.remove('hidden');
  addLog('Você chegou ao seu turno com Victor. Ambos os jogadores estão com 1 de vida.');
  render();
}

function resetGame() {
  state.phase = 'planning';
  state.resources = 0;
  state.playerLife = 1;
  state.opponentLife = 1;
  state.gold = 2;
  state.actionPoint = 1;
  state.opponentHand = 4;
  state.hand = ['boulder', 'golden', 'clash', 'shelter'];
  state.pitched = [];
  state.played = [];
  state.discarded = [];
  state.revealed = ['gone'];
  state.opponentArena = [];
  state.opponentGraveyard = [];
  state.volzarTapped = false;
  state.earlyShelter = false;
  state.currentAttack = null;
  state.pending = null;
  state.selectedPitch = new Set();
  state.log = ['Jogo reiniciado. Você está de volta ao início do turno.'];
  render();
}

function addLog(text) {
  state.log.push(text);
}

function render() {
  renderStatus();
  renderTable();
  renderRevealed();
  renderHand();
  renderLog();
  renderPhase();
}

function renderStatus() {
  el.status.innerHTML = [
    pill('Victor', `${state.playerLife} vida`),
    pill('Oscilio', `${state.opponentLife} vida`),
    pill('Recursos', state.resources),
    pill('Gold', state.gold),
    pill('Ação', state.actionPoint > 0 ? 'sim' : 'não'),
    pill('Mão Oscilio', state.opponentHand)
  ].join('');
}

function pill(label, value) {
  return `<div class="status-pill">${label}: <strong>${value}</strong></div>`;
}

function renderTable() {
  const items = [
    tableCard('oscilio', 45.5, 14.5, 'Oscilio'),
    tableCard('volzar', 33.6, 14.5, 'Volzar', state.volzarTapped ? 'tapped-card' : ''),
    tableCard('gone', 6.2, 3.2, 'Banished'),
    ...opponentHandBacks(),
    ...opponentArenaCards(),
    ...opponentGraveyardCards(),
    tableCard('crown', 5.7, 59.5, 'Head'),
    tableCard('gloves', 18.1, 73.5, 'Arms'),
    tableCard('boots', 5.7, 86.5, 'Legs'),
    tableCard('millers', 34.3, 73.5, 'Weapon'),
    tableCard('victor', 46.1, 70.8, 'Victor'),
    tableCard('aegis', 56.2, 73.5, 'Off-hand'),
    ...playerDiscardCards(),
    goldToken(75.0, 59.5, 1),
    goldToken(80.2, 59.5, 2)
  ];

  if (state.currentAttack) {
    const label = state.currentAttack.overpower
      ? `${state.currentAttack.damage} atk · overpower`
      : `${state.currentAttack.damage} atk`;
    items.push(tableCard(state.currentAttack.id, 45.2, 47.2, label, 'attack-card'));
  }

  el.table.innerHTML = items.join('');
  el.table.querySelectorAll('[data-card-id]').forEach(node => {
    node.addEventListener('click', () => openCard(node.dataset.cardId));
  });
  el.table.querySelectorAll('[data-gold-token]').forEach(node => {
    node.addEventListener('click', () => openGoldInfo());
  });
}

function opponentHandBacks() {
  const backs = [];
  const count = Math.max(0, Math.min(4, state.opponentHand));
  for (let i = 0; i < count; i += 1) {
    backs.push(tableBack(73 + (i * 5), 3.2));
  }
  return backs;
}

function opponentArenaCards() {
  const positions = [
    { left: 35.7, top: 34.2 },
    { left: 45.5, top: 34.2 },
    { left: 55.3, top: 34.2 }
  ];
  return state.opponentArena.map((id, index) => {
    const pos = positions[index] || positions[positions.length - 1];
    return tableCard(id, pos.left + Math.max(0, index - 2) * 3, pos.top, 'Oscilio', 'opponent-play-card');
  });
}

function opponentGraveyardCards() {
  return state.opponentGraveyard.map((id, index) => tableCard(id, 5.9 + index * 2.2, 33.8 + index * 2.5, 'Graveyard', 'graveyard-card'));
}

function playerDiscardCards() {
  return state.discarded.map((id, index) => tableCard(id, 86.6 - index * 2.1, 59.4 + index * 2.2, 'Graveyard', 'player-discard-card'));
}

function tableCard(id, left, top, label, extraClass = '') {
  const card = CARDS[id];
  return `<button class="table-card ${extraClass}" style="left:${left}%;top:${top}%" data-card-id="${id}" title="${card.name}">
    <img src="${card.image}" alt="${card.name}">
    <span class="card-label">${label}</span>
  </button>`;
}

function tableBack(left, top) {
  return `<button class="table-card back-card" style="left:${left}%;top:${top}%" title="Carta oculta da mão do Oscilio">
    <img src="${A}card-back.png" alt="Carta virada para baixo">
    <span class="card-label">Mão</span>
  </button>`;
}

function goldToken(left, top, n) {
  if (n > state.gold) return '';
  return `<button class="table-card gold-token" style="left:${left}%;top:${top}%" data-gold-token="${n}" title="Gold ${n}">
    <img src="${A}gold.webp" alt="Gold token">
    <span class="card-label">Gold</span>
  </button>`;
}

function openGoldInfo() {
  el.modalImage.src = A + 'gold.webp';
  el.modalImage.alt = 'Token Gold';
  el.modalTitle.textContent = 'Gold Token';
  el.modalType.textContent = 'Token — Item';
  el.modalStats.innerHTML = stat('Custo da habilidade', '2 recursos') + stat('Efeito', 'Comprar 1 carta') + stat('Go again', 'sim') + stat('Gold em campo', state.gold);
  el.modalText.innerHTML = '<p><em>Action</em> — Pague 2 recursos e destrua Gold: compre uma carta. <em>Go again</em>.</p><p>A carta comprada não é informada antes da ação resolver.</p>';
  el.modalRole.textContent = 'Usar Gold pode melhorar sua mão, mas exige 2 recursos. Se você fizer overpitch, o recurso restante continua no pool até o fim do turno.';
  el.modalButtons.innerHTML = state.phase === 'planning' ? `<button class="card-action-btn" data-use-gold-modal>Usar um Gold</button>` : '';
  el.modal.classList.remove('hidden');
  const btn = el.modalButtons.querySelector('[data-use-gold-modal]');
  if (btn) btn.addEventListener('click', () => { closeModal(); chooseGold(); });
}

function renderRevealed() {
  const unique = [...new Set(state.revealed)];
  if (!unique.length) {
    el.revealed.innerHTML = '<p class="empty-revealed">Nenhuma carta do Oscilio foi revelada ainda.</p>';
    return;
  }
  el.revealed.innerHTML = unique.map(id => {
    const c = CARDS[id];
    return `<button class="revealed-card" data-card-id="${id}" title="${c.name}"><img src="${c.image}" alt="${c.name}"></button>`;
  }).join('');
  el.revealed.querySelectorAll('[data-card-id]').forEach(node => node.addEventListener('click', () => openCard(node.dataset.cardId)));
}

function renderHand() {
  if (!state.hand.length) {
    el.hand.innerHTML = '<p class="empty-revealed">Sua mão está vazia.</p>';
    return;
  }
  el.hand.innerHTML = state.hand.map(id => {
    const c = CARDS[id];
    const selected = state.selectedPitch.has(id) ? ' pitched-preview' : '';
    return `<button class="hand-card${selected}" data-card-id="${id}" title="${c.name}">
      <img src="${c.image}" alt="${c.name}">
      <span class="hand-name">${c.name}</span>
    </button>`;
  }).join('');
  el.hand.querySelectorAll('[data-card-id]').forEach(node => node.addEventListener('click', () => openCard(node.dataset.cardId)));
}

function renderLog() {
  el.log.innerHTML = state.log.slice(-18).map(item => `<li>${item}</li>`).join('');
}

function renderPhase() {
  el.actions.innerHTML = '';

  if (state.phase === 'planning') {
    el.title.textContent = 'Planejamento';
    el.message.innerHTML = `<p>Seu oponente acabou de repor a mão e tem <strong>4 cartas</strong>. Você está com <strong>1 de vida</strong>. Clique nas cartas para reler e escolha sua primeira ação.</p>`;
    renderPlanningActions();
    return;
  }

  if (state.phase === 'choosePitch') {
    renderPitchChoice();
    return;
  }

  if (state.phase === 'chooseGoldPitch') {
    renderGoldPitchChoice();
    return;
  }

  if (state.phase === 'shelterInfo') {
    renderShelterInfo();
    return;
  }

  if (state.phase === 'goldenBonus') {
    renderGoldenBonusChoice();
    return;
  }

  if (state.phase === 'opponent') {
    renderOpponentStep();
    return;
  }

  if (state.phase === 'preventPayment') {
    renderPreventPayment();
    return;
  }

  if (state.phase === 'win') {
    el.title.textContent = 'Parabéns!';
    el.message.innerHTML = `<div class="congrats-box"><p><strong>Você encontrou a linha da final.</strong></p><p>Esta é uma simulação de uma final real entre <strong>Átila Lima</strong> (<strong>Victor</strong>) e <strong>Michel Luis</strong> (<strong>Oscilio</strong>) no Nacional Brasileiro de Flesh and Blood, em <strong>28 de junho de 2026</strong>.</p><p>Na partida real, Michel foi campeão com essa mesma jogada.</p></div>`;
    el.actions.innerHTML = `<button class="primary-btn" data-reset>Jogar novamente</button>`;
    el.actions.querySelector('[data-reset]').addEventListener('click', resetGame);
    return;
  }

  if (state.phase === 'lose') {
    el.title.textContent = 'Derrota';
    el.message.innerHTML = `<p><strong>Você não sobreviveu à resposta.</strong></p><p>${state.pending?.reason || 'O Oscilio encontrou dano arcano suficiente antes do seu ataque resolver.'}</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-reset>Tentar de novo</button>`;
    el.actions.querySelector('[data-reset]').addEventListener('click', resetGame);
  }
}

function renderPlanningActions() {
  const buttons = [];
  for (const id of ['boulder', 'golden', 'clash', 'shelter']) {
    if (!state.hand.includes(id)) continue;
    const c = CARDS[id];
    const suffix = id === 'shelter' ? 'defensiva' : `custo ${c.cost} · ataque ${c.attack}`;
    buttons.push(`<button class="choice-btn" data-action-card="${id}">${c.name}<span>${suffix}</span></button>`);
  }
  if (state.gold > 0) {
    buttons.push(`<button class="choice-btn" data-action-gold>Usar um Gold<span>custo 2 · comprar uma carta</span></button>`);
  }
  buttons.push(`<button class="ghost-btn" data-reset>Reiniciar exercício</button>`);

  el.actions.innerHTML = `<div class="choice-grid">${buttons.join('')}</div>
    <p class="mini-note">Regra aplicada: se você fizer overpitch, o recurso que sobrar fica no pool e pode pagar custos posteriores no mesmo turno, inclusive Nullrune.</p>`;

  el.actions.querySelectorAll('[data-action-card]').forEach(btn => btn.addEventListener('click', () => chooseAction(btn.dataset.actionCard)));
  const goldBtn = el.actions.querySelector('[data-action-gold]');
  if (goldBtn) goldBtn.addEventListener('click', chooseGold);
  el.actions.querySelector('[data-reset]').addEventListener('click', resetGame);
}

function chooseAction(id) {
  if (id === 'shelter') {
    state.phase = 'shelterInfo';
    render();
    return;
  }
  const card = CARDS[id];
  state.pending = { kind: 'attack', cardId: id, cost: Number(card.cost), selected: new Set() };
  state.selectedPitch = new Set();
  state.phase = 'choosePitch';
  render();
}

function chooseGold() {
  state.pending = { kind: 'gold', cost: 2, selected: new Set() };
  state.selectedPitch = new Set();
  state.phase = 'chooseGoldPitch';
  render();
}

function renderPitchChoice() {
  const p = state.pending;
  const card = CARDS[p.cardId];
  const candidates = state.hand.filter(id => id !== p.cardId);
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  const leftover = available - p.cost;
  const enough = leftover >= 0;

  el.title.textContent = 'Escolha de pitch';
  el.message.innerHTML = `<p>Você escolheu jogar <strong>${card.name}</strong>. Ela custa <strong>${p.cost}</strong> recursos e ameaça <strong>${card.attack}</strong> de dano físico.</p><p>Escolha as cartas que serão usadas como pitch. O recurso excedente permanece no pool.</p>`;
  el.actions.innerHTML = `
    ${costPanel(p.cost, generated, available, leftover)}
    <div class="choice-grid">
      ${candidates.map(id => pitchButton(id)).join('')}
    </div>
    <button class="primary-btn" ${enough ? '' : 'disabled'} data-confirm-attack>Confirmar jogada</button>
    <button class="secondary-btn" data-back>Voltar</button>
    ${leftover > 0 ? '<p class="mini-note good">Você está fazendo overpitch. Esse recurso pode ser usado depois contra o dano arcano.</p>' : ''}
  `;
  bindPitchButtons();
  el.actions.querySelector('[data-confirm-attack]').addEventListener('click', confirmAttack);
  el.actions.querySelector('[data-back]').addEventListener('click', backToPlanning);
}

function renderGoldPitchChoice() {
  const p = state.pending;
  const candidates = [...state.hand];
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  const leftover = available - p.cost;
  const enough = leftover >= 0;

  el.title.textContent = 'Usar Gold';
  el.message.innerHTML = `<p>Você quer destruir um <strong>Gold</strong> para comprar uma carta. Isso custa <strong>2 recursos</strong> e tem <strong>Go again</strong>.</p><p>A carta comprada não será informada antes da ação resolver.</p>`;
  el.actions.innerHTML = `
    ${costPanel(p.cost, generated, available, leftover)}
    <div class="choice-grid">
      ${candidates.map(id => pitchButton(id)).join('')}
    </div>
    <button class="primary-btn" ${enough ? '' : 'disabled'} data-confirm-gold>Confirmar Gold</button>
    <button class="secondary-btn" data-back>Voltar</button>
    ${leftover > 0 ? '<p class="mini-note good">Sobra recurso no pool depois do Gold. Isso pode ser relevante contra o Oscilio.</p>' : ''}
  `;
  bindPitchButtons();
  el.actions.querySelector('[data-confirm-gold]').addEventListener('click', confirmGold);
  el.actions.querySelector('[data-back]').addEventListener('click', backToPlanning);
}

function costPanel(cost, generated, available, leftover) {
  const leftClass = leftover >= 0 ? 'good' : 'danger';
  const leftText = leftover >= 0 ? leftover : `faltam ${Math.abs(leftover)}`;
  return `<div class="cost-panel">
    <div class="cost-row"><span>Recurso no pool</span><strong>${state.resources}</strong></div>
    <div class="cost-row"><span>Pitch selecionado</span><strong>${generated}</strong></div>
    <div class="cost-row"><span>Custo</span><strong>${cost}</strong></div>
    <div class="cost-row"><span>Depois de pagar</span><strong class="${leftClass}">${leftText}</strong></div>
  </div>`;
}

function pitchButton(id) {
  const c = CARDS[id];
  const selected = state.selectedPitch.has(id) ? ' selected' : '';
  return `<button class="choice-btn${selected}" data-pitch-card="${id}">${c.name}<span>pitch ${c.pitch}</span></button>`;
}

function bindPitchButtons() {
  el.actions.querySelectorAll('[data-pitch-card]').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.pitchCard;
      if (state.selectedPitch.has(id)) state.selectedPitch.delete(id);
      else state.selectedPitch.add(id);
      if (state.pending) state.pending.selected = new Set(state.selectedPitch);
      render();
    });
  });
}

function calcSelectedPitch() {
  return [...state.selectedPitch].reduce((sum, id) => sum + (Number(CARDS[id].pitch) || 0), 0);
}

function confirmAttack() {
  const p = state.pending;
  const card = CARDS[p.cardId];
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  if (available < p.cost) return;

  const selected = [...state.selectedPitch];
  state.resources = available - p.cost;
  state.hand = state.hand.filter(id => id !== p.cardId && !state.selectedPitch.has(id));
  state.pitched.push(...selected);
  state.played.push(p.cardId);
  state.currentAttack = { id: p.cardId, damage: Number(card.attack) || 0, overpower: false };
  state.actionPoint = 0;
  state.selectedPitch = new Set();

  const pitchNames = selected.length ? selected.map(id => CARDS[id].name).join(', ') : 'nenhuma carta';
  addLog(`Você jogou ${card.name}, pagou ${p.cost}, usou pitch: ${pitchNames}. Recurso restante: ${state.resources}.`);

  if (p.cardId === 'golden' && state.gold > 0) {
    state.phase = 'goldenBonus';
    state.pending = { kind: 'goldenBonus' };
  } else {
    state.phase = 'opponent';
    state.pending = { step: 0 };
  }
  render();
}

function renderGoldenBonusChoice() {
  el.title.textContent = 'The Golden Son';
  el.message.innerHTML = `<p><strong>The Golden Son</strong> entrou na combat chain com <strong>7 de ataque</strong>.</p><p>Como custo adicional, você pode destruir um <strong>Gold</strong>. Se fizer isso, ele ganha <strong>+3 de ataque</strong> e <strong>overpower</strong>, ficando com <strong>10 de ataque</strong>.</p>`;
  el.actions.innerHTML = `<div class="choice-grid">
    <button class="primary-btn" data-golden-bonus>Destruir um Gold: 10 ataque + overpower</button>
    <button class="secondary-btn" data-golden-normal>Não destruir: 7 ataque</button>
  </div>`;
  el.actions.querySelector('[data-golden-bonus]').addEventListener('click', () => confirmGoldenBonus(true));
  el.actions.querySelector('[data-golden-normal]').addEventListener('click', () => confirmGoldenBonus(false));
}

function confirmGoldenBonus(useGold) {
  if (useGold && state.gold > 0) {
    state.gold -= 1;
    state.currentAttack.damage = 10;
    state.currentAttack.overpower = true;
    addLog('Você destruiu um Gold para dar +3 de ataque e overpower ao The Golden Son. Ele fica com 10 de ataque.');
  } else {
    addLog('Você manteve seus Golds. The Golden Son fica com 7 de ataque.');
  }
  state.pending = { step: 0 };
  state.phase = 'opponent';
  render();
}

function confirmGold() {
  const p = state.pending;
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  if (available < p.cost || state.gold <= 0) return;

  const selected = [...state.selectedPitch];
  state.resources = available - p.cost;
  state.hand = state.hand.filter(id => !state.selectedPitch.has(id));
  state.pitched.push(...selected);
  state.gold -= 1;
  if (!state.hand.includes('visit') && !state.played.includes('visit') && !state.pitched.includes('visit')) {
    state.hand.push('visit');
  }
  state.selectedPitch = new Set();
  state.pending = null;
  state.phase = 'planning';
  addLog(`Você destruiu um Gold, comprou uma carta e ficou com ${state.resources} recurso(s) no pool.`);
  render();
}

function backToPlanning() {
  state.pending = null;
  state.selectedPitch = new Set();
  state.phase = 'planning';
  render();
}

function renderShelterInfo() {
  el.title.textContent = 'Shelter from the Storm';
  el.message.innerHTML = `<p><strong>Shelter</strong> não é ataque. Ela deve ser usada quando o dano arcano aparecer.</p><p>Se você descartar agora, a carta aparece na arena virada e depois fica no Graveyard do Victor.</p>`;
  el.actions.innerHTML = `
    <button class="secondary-btn" data-keep-shelter>Guardar Shelter para a resposta do Oscilio</button>
    <button class="danger-btn" data-use-shelter-now>Descartar agora</button>
  `;
  el.actions.querySelector('[data-keep-shelter]').addEventListener('click', backToPlanning);
  el.actions.querySelector('[data-use-shelter-now]').addEventListener('click', () => {
    state.hand = state.hand.filter(id => id !== 'shelter');
    addToZone(state.discarded, 'shelter');
    state.pending = null;
    state.phase = 'planning';
    addLog('Você descartou Shelter from the Storm cedo demais. Ela aparece virada no Graveyard do Victor. A prevenção ficará marcada para o primeiro ponto de dano do exercício.');
    state.earlyShelter = true;
    render();
  });
}

function renderOpponentStep() {
  const step = state.pending?.step ?? 0;
  el.title.textContent = 'Resposta do Oscilio';

  if (step === 0) {
    el.message.innerHTML = `<p>Você declara o ataque. Oscilio precisa responder antes do dano resolver.</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-next-step>Continuar</button>`;
  }
  if (step === 1) {
    reveal('blink');
    addToZone(state.opponentGraveyard, 'blink');
    state.opponentHand = 4;
    el.message.innerHTML = `<p>Oscilio usa <strong>Constella Intelligence</strong>: descarta <strong>Blink</strong>, que vai para o <strong>Graveyard</strong>, e compra uma carta.</p><p>A carta comprada fica oculta para você.</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-next-step>Continuar</button>`;
  }
  if (step === 2) {
    reveal('astral');
    reveal('second');
    addToZone(state.opponentArena, 'astral');
    addToZone(state.opponentGraveyard, 'second');
    state.opponentHand = 3;
    el.message.innerHTML = `<p>Oscilio joga <strong>Astral Bridge</strong>, que aparece na arena.</p><p>Logo depois, <strong>Second Strike</strong> é revelada e colocada no <strong>Graveyard</strong> do Oscilio.</p><p>Como um instant entrou no graveyard neste turno, <strong>Starfall</strong> ameaça <strong>1 dano arcano</strong>.</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-first-damage>Responder ao dano arcano</button>`;
  }
  if (step === 3) {
    reveal('echoflash');
    addToZone(state.opponentArena, 'echoflash');
    state.opponentHand = 2;
    el.message.innerHTML = `<p>Você sobreviveu ao primeiro ponto. Oscilio continua e revela a carta que estava oculta somente agora: ele joga <strong>Echoflash</strong>.</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-next-step>Continuar</button>`;
  }
  if (step === 4) {
    reveal('cloud');
    addToZone(state.opponentArena, 'cloud');
    state.opponentHand = 1;
    state.volzarTapped = true;
    el.message.innerHTML = `<p>Depois de <strong>Echoflash</strong>, aparece <strong>Cloud Cover</strong>. Em seguida, <strong>Volzar, Meteor Storm</strong> gira 90 graus para indicar a ativação de <strong>Amp 1</strong>.</p><p>Oscilio termina a jogada com apenas <strong>1 carta na mão</strong>, ainda não revelada. Agora você precisa pagar <strong>2 recursos</strong> para sobreviver ao dano arcano final.</p>`;
    el.actions.innerHTML = `<button class="primary-btn" data-final-damage>Responder ao dano final</button>`;
  }

  const next = el.actions.querySelector('[data-next-step]');
  if (next) next.addEventListener('click', nextOpponentStep);
  const first = el.actions.querySelector('[data-first-damage]');
  if (first) first.addEventListener('click', () => firstDamagePrompt());
  const final = el.actions.querySelector('[data-final-damage]');
  if (final) final.addEventListener('click', () => finalDamagePrompt());
}

function nextOpponentStep() {
  state.pending.step += 1;
  if (state.pending.step === 1) addLog('Oscilio descarta Blink com Constella Intelligence e compra uma carta sem revelá-la.');
  if (state.pending.step === 2) addLog('Oscilio joga Astral Bridge. Second Strike é revelada e colocada no Graveyard do Oscilio.');
  if (state.pending.step === 4) addLog('Oscilio joga Cloud Cover, ativa Volzar e termina com 1 carta oculta na mão.');
  render();
}

function reveal(id) {
  if (!state.revealed.includes(id)) state.revealed.push(id);
}

function addToZone(zone, id) {
  if (!zone.includes(id)) zone.push(id);
}

function firstDamagePrompt() {
  if (state.earlyShelter) {
    addLog('A prevenção de Shelter descartada cedo cobre o primeiro dano de Astral Bridge.');
    state.pending = { step: 3 };
    state.phase = 'opponent';
    render();
    return;
  }

  state.phase = 'preventPayment';
  state.pending = {
    kind: 'prevent',
    label: 'Starfall de Astral Bridge',
    amount: 1,
    after: 'toFinalSequence',
    allowShelter: state.hand.includes('shelter'),
    selected: new Set()
  };
  state.selectedPitch = new Set();
  render();
}

function finalDamagePrompt() {
  state.phase = 'preventPayment';
  state.pending = {
    kind: 'prevent',
    label: 'Echoflash + Cloud Cover + Volzar',
    amount: 2,
    after: 'finish',
    allowShelter: false,
    selected: new Set()
  };
  state.selectedPitch = new Set();
  render();
}

function renderPreventPayment() {
  const p = state.pending;
  const candidates = [...state.hand];
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  const leftover = available - p.amount;
  const enough = leftover >= 0;

  el.title.textContent = 'Prevenir dano arcano';
  el.message.innerHTML = `<p><strong>${p.label}</strong> ameaça <strong>${p.amount}</strong> de dano arcano.</p><p>Você está com 1 de vida. Pague recursos com Nullrune ou use a opção defensiva disponível.</p>`;

  const shelterButton = p.allowShelter
    ? `<button class="secondary-btn" data-use-shelter>Descartar Shelter para prevenir este dano</button>`
    : state.hand.includes('shelter')
      ? `<p class="mini-note">Shelter está na sua mão, mas neste recorte a pressão final exige pagamento de 2 recursos com Nullrune.</p>`
      : '';

  el.actions.innerHTML = `
    ${costPanel(p.amount, generated, available, leftover)}
    <div class="choice-grid">
      ${candidates.map(id => pitchButton(id)).join('')}
    </div>
    <button class="primary-btn" ${enough ? '' : 'disabled'} data-pay-prevent>Pagar ${p.amount} recurso(s) com Nullrune</button>
    ${shelterButton}
    <button class="danger-btn" data-take-damage>Não prevenir</button>
  `;
  bindPitchButtons();
  el.actions.querySelector('[data-pay-prevent]').addEventListener('click', confirmPreventPayment);
  const shelter = el.actions.querySelector('[data-use-shelter]');
  if (shelter) shelter.addEventListener('click', useShelterForFirstDamage);
  el.actions.querySelector('[data-take-damage]').addEventListener('click', () => lose(`Você recebeu ${p.amount} de dano arcano com 1 de vida.`));
}

function useShelterForFirstDamage() {
  if (!state.hand.includes('shelter')) return;
  state.hand = state.hand.filter(id => id !== 'shelter');
  addToZone(state.discarded, 'shelter');
  addLog('Você descartou Shelter from the Storm e preveniu o primeiro dano de Astral Bridge.');
  state.selectedPitch = new Set();
  state.pending = { step: 3 };
  state.phase = 'opponent';
  render();
}

function confirmPreventPayment() {
  const p = state.pending;
  const generated = calcSelectedPitch();
  const available = state.resources + generated;
  if (available < p.amount) return;

  const selected = [...state.selectedPitch];
  state.resources = available - p.amount;
  state.hand = state.hand.filter(id => !state.selectedPitch.has(id));
  state.pitched.push(...selected);
  addLog(`Você pagou ${p.amount} recurso(s) com Nullrune. Pitch usado: ${selected.length ? selected.map(id => CARDS[id].name).join(', ') : 'nenhum'}. Recurso restante: ${state.resources}.`);
  state.selectedPitch = new Set();

  if (p.after === 'toFinalSequence') {
    state.pending = { step: 3 };
    state.phase = 'opponent';
  } else {
    finishExercise();
  }
  render();
}

function finishExercise() {
  if (state.currentAttack && state.currentAttack.damage > 0) {
    addLog(`Seu ataque (${CARDS[state.currentAttack.id].name}) resolve contra um Oscilio a 1 de vida.`);
    state.phase = 'win';
  } else {
    lose('Você sobreviveu, mas não havia ataque ameaçando dano letal.');
  }
}

function lose(reason) {
  state.playerLife = 0;
  state.phase = 'lose';
  state.pending = { reason };
  addLog(`Derrota: ${reason}`);
  render();
}

function openCard(id) {
  const c = CARDS[id];
  if (!c) return;
  el.modalImage.src = c.image;
  el.modalImage.alt = c.name;
  el.modalTitle.textContent = c.name;
  el.modalType.textContent = c.type || '';
  el.modalStats.innerHTML = [
    stat('Custo', valueOrDash(c.cost)),
    stat('Pitch', valueOrDash(c.pitch)),
    stat('Ataque', valueOrDash(c.attack)),
    stat('Defesa', valueOrDash(c.defense))
  ].join('');
  el.modalText.innerHTML = c.text.map(t => `<p>${t}</p>`).join('');
  el.modalRole.textContent = c.role || '';

  const canUseFromModal = state.phase === 'planning' && state.hand.includes(id);
  const canGoldFromModal = false;
  el.modalButtons.innerHTML = `${canUseFromModal ? `<button class="card-action-btn" data-use-card-modal="${id}">Usar esta carta</button>` : ''}<button class="secondary-btn" data-close-modal>Fechar</button>`;
  el.modalButtons.querySelectorAll('[data-close-modal]').forEach(btn => btn.addEventListener('click', closeModal));
  const useBtn = el.modalButtons.querySelector('[data-use-card-modal]');
  if (useBtn) useBtn.addEventListener('click', () => { closeModal(); chooseAction(id); });
  el.modal.classList.remove('hidden');
}

function stat(label, value) {
  return `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`;
}

function valueOrDash(v) {
  return v === undefined || v === null ? '—' : v;
}

function closeModal() {
  el.modal.classList.add('hidden');
}

render();
