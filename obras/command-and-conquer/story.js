const story = [
  {
    id: "intro-logo",
    type: "logo",
    logo: "assets/ui/logo-command-and-conquer.png"
  },
  {
    id: "scene-01-bg",
    type: "visual",
    bg: "assets/bg/quarto-01.webp",
    camera: "center",
    hideDialog: true
  },
  {
    id: "scene-01-jp-entry",
    type: "visual",
    bg: "assets/bg/quarto-01.webp",
    character: {
      id: "jp",
      src: "assets/characters/jp-normal.png",
      position: "left"
    },
    hideDialog: true
  },
  {
    id: "scene-01-01",
    type: "thought",
    speaker: "JP",
    text: "Não é que o deck esteja ruim.",
    bg: "assets/bg/quarto-01.webp",
    character: {
      id: "jp",
      src: "assets/characters/jp-normal.png",
      position: "left"
    }
  },
  {
    id: "scene-01-02",
    type: "thought",
    speaker: "JP",
    text: "Isso seria mais fácil."
  },
  {
    id: "scene-01-03",
    type: "thought",
    speaker: "JP",
    text: "Deck ruim você arruma."
  },
  {
    id: "scene-01-04",
    type: "thought",
    speaker: "JP",
    text: "Corta carta morta. Troca equipamento. Muda o plano contra os heróis que estão aparecendo mais."
  },
  {
    id: "scene-01-05",
    type: "thought",
    speaker: "JP",
    text: "Deck ruim pelo menos tem a decência de mostrar onde dói."
  },
  {
    id: "scene-01-pause-01",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-01-06",
    type: "thought",
    speaker: "JP",
    text: "O problema é quando a lista funciona."
  },
  {
    id: "scene-01-07",
    type: "thought",
    speaker: "JP",
    text: "Quando você olha para ela e sabe que faz sentido."
  },
  {
    id: "scene-01-08",
    type: "thought",
    speaker: "JP",
    text: "Quando as contas fecham."
  },
  {
    id: "scene-01-09",
    type: "thought",
    speaker: "JP",
    text: "E mesmo assim alguma coisa continua faltando."
  },
  {
    id: "scene-01-look-table",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
  {
    id: "scene-01-10",
    type: "thought",
    speaker: "JP",
    text: "A Ira tá pronta."
  },
  {
    id: "scene-01-11",
    type: "thought",
    speaker: "JP",
    text: "Quase pronta."
  },
  {
    id: "scene-01-pause-02",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-01-12",
    type: "thought",
    speaker: "JP",
    text: "Essa palavra é uma desgraça."
  },
  {
    id: "scene-01-13",
    type: "thought",
    speaker: "JP",
    text: "\"Quase\"."
  },
  {
    id: "scene-01-14",
    type: "thought",
    speaker: "JP",
    text: "Quase ganha. Quase segura. Quase vira. Quase fecha o jogo."
  },
  {
    id: "scene-01-15",
    type: "thought",
    speaker: "JP",
    text: "Quase é só outro nome para perder sabendo exatamente o que teria salvado você."
  },
  {
    id: "scene-01-pause-03",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-01-16",
    type: "thought",
    speaker: "JP",
    text: "E eu sei o que falta."
  },
  {
    id: "scene-01-17",
    type: "thought",
    speaker: "JP",
    text: "Não quero admitir."
  },
  {
    id: "scene-01-18",
    type: "thought",
    speaker: "JP",
    text: "Mas sei."
  },
  {
    id: "scene-01-table-silence",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
  {
    id: "scene-01-19",
    type: "thought",
    speaker: "JP",
    text: "Command and Conquer.",
    emphasis: true
  }
  ,
  {
    id: "scene-02-table-entry",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    camera: "center",
    clearCharacters: true,
    clearObjects: true,
    clearEffects: true,
    hideDialog: true
  },
  {
    id: "scene-02-01",
    type: "thought",
    speaker: "JP",
    text: "Ataque tem.",
    bg: "assets/bg/mesa-deck-01.webp",
    clearCharacters: true
  },
  {
    id: "scene-02-02",
    type: "thought",
    speaker: "JP",
    text: "Defesa tem."
  },
  {
    id: "scene-02-03",
    type: "thought",
    speaker: "JP",
    text: "Equipamento tem."
  },
  {
    id: "scene-02-04",
    type: "thought",
    speaker: "JP",
    text: "Plano de jogo também."
  },
  {
    id: "scene-02-05",
    type: "thought",
    speaker: "JP",
    text: "Mas ainda falta peso."
  },
  {
    id: "scene-02-06",
    type: "thought",
    speaker: "JP",
    text: "Falta a carta que faz o outro lado respeitar a mesa."
  },
  {
    id: "scene-03-phone-entry",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: []
    }
  },
  {
    id: "scene-03-phone-jp-message",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        }
      ]
    }
  },
  {
    id: "scene-03-phone-reply-01",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        },
        {
          from: "Lucas",
          text: "Boa sorte.",
          side: "other"
        }
      ]
    }
  },
  {
    id: "scene-03-phone-reply-02",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        },
        {
          from: "Lucas",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Hermes",
          text: "Se achar duas, me avisa.",
          side: "other"
        }
      ]
    }
  },
  {
    id: "scene-03-phone-reply-03",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        },
        {
          from: "Lucas",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Hermes",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Marcelo",
          text: "Essa aí sumiu do mapa.",
          side: "other"
        }
      ]
    }
  },
  {
    id: "scene-03-phone-reply-04",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        },
        {
          from: "Lucas",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Hermes",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Marcelo",
          text: "Essa aí sumiu do mapa.",
          side: "other"
        },
        {
          from: "Rafael",
          text: "Quem tem não vende.",
          side: "other"
        }
      ]
    }
  },
  {
    id: "scene-03-phone-reply-05",
    type: "visual",
    bg: "assets/bg/mesa-deck-01.webp",
    hideDialog: true,
    phone: {
      src: "assets/objects/whatsapp-cel.png",
      messages: [
        {
          from: "JP",
          text: "Alguém tem Command and Conquer pra vender?",
          side: "me"
        },
        {
          from: "Lucas",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Hermes",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Marcelo",
          text: "Essa aí sumiu do mapa.",
          side: "other"
        },
        {
          from: "Rafael",
          text: "Quem tem não vende.",
          side: "other"
        },
        {
          from: "Yuri",
          text: "Quem vende pede um rim.",
          side: "other"
        }
      ]
    }
  },
  {
    id: "scene-03-01",
    type: "thought",
    speaker: "JP",
    text: "Engraçadões."
  },
  {
    id: "scene-03-02",
    type: "thought",
    speaker: "JP",
    text: "Mas ninguém falou que tinha."
  }
  ,
  {
    id: "scene-04-room-return",
    type: "visual",
    bg: "assets/bg/quarto-01.webp",
    camera: "center",
    clearObjects: true,
    clearEffects: true,
    clearCharacters: true,
    character: {
      id: "jp",
      src: "assets/characters/jp-pensativo.png",
      position: "left"
    },
    hideDialog: true
  },
  {
    id: "scene-04-01",
    type: "thought",
    speaker: "JP",
    text: "Todo mundo sabe o valor dela.",
    bg: "assets/bg/quarto-01.webp",
    character: {
      id: "jp",
      src: "assets/characters/jp-pensativo.png",
      position: "left"
    }
  },
  {
    id: "scene-04-02",
    type: "thought",
    speaker: "JP",
    text: "Por isso ninguém larga."
  },
  {
    id: "scene-04-pause-01",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-03",
    type: "thought",
    speaker: "JP",
    text: "Não é só porque é cara."
  },
  {
    id: "scene-04-04",
    type: "thought",
    speaker: "JP",
    text: "Carta cara aparece."
  },
  {
    id: "scene-04-05",
    type: "thought",
    speaker: "JP",
    text: "Sempre tem alguém vendendo coleção. Alguém parando de jogar. Alguém precisando levantar dinheiro rápido."
  },
  {
    id: "scene-04-pause-02",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-06",
    type: "thought",
    speaker: "JP",
    text: "Mas Command and Conquer é diferente."
  },
  {
    id: "scene-04-07",
    type: "thought",
    speaker: "JP",
    text: "Quem tem, guarda."
  },
  {
    id: "scene-04-08",
    type: "thought",
    speaker: "JP",
    text: "Quem não tem, fica fazendo conta."
  },
  {
    id: "scene-04-09",
    type: "thought",
    speaker: "JP",
    text: "E quem quer comprar escuta piada."
  },
  {
    id: "scene-04-look-table-01",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
  {
    id: "scene-04-10",
    type: "thought",
    speaker: "JP",
    text: "O pior é que eu entendo."
  },
  {
    id: "scene-04-11",
    type: "thought",
    speaker: "JP",
    text: "Se eu tivesse uma, também não venderia."
  },
  {
    id: "scene-04-pause-03",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-12",
    type: "thought",
    speaker: "JP",
    text: "Talvez seja isso que irrita."
  },
  {
    id: "scene-04-13",
    type: "thought",
    speaker: "JP",
    text: "Não tem vilão."
  },
  {
    id: "scene-04-14",
    type: "thought",
    speaker: "JP",
    text: "Não tem injustiça."
  },
  {
    id: "scene-04-15",
    type: "thought",
    speaker: "JP",
    text: "Só tem eu, meu deck quase pronto…"
  },
  {
    id: "scene-04-16",
    type: "thought",
    speaker: "JP",
    text: "E uma carta que todo mundo sabe que falta."
  },
  {
    id: "scene-04-pause-04",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-17",
    type: "dialogue",
    speaker: "JP",
    text: "Droga…"
  },
  {
    id: "scene-04-silence-01",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-18",
    type: "thought",
    speaker: "JP",
    text: "Eu não preciso dela."
  },
  {
    id: "scene-04-pause-05",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-19",
    type: "thought",
    speaker: "JP",
    text: "Essa é a parte racional."
  },
  {
    id: "scene-04-20",
    type: "thought",
    speaker: "JP",
    text: "A parte que sabe que deck nenhum deveria depender de uma carta só."
  },
  {
    id: "scene-04-21",
    type: "thought",
    speaker: "JP",
    text: "A parte que fala que consistência vale mais que teimosia."
  },
  {
    id: "scene-04-pause-06",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-22",
    type: "thought",
    speaker: "JP",
    text: "Mas eu também sei quando estou mentindo."
  },
  {
    id: "scene-04-look-phone-01",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
  {
    id: "scene-04-23",
    type: "thought",
    speaker: "JP",
    text: "Se eu tivesse uma Command and Conquer, esse deck mudava de nível."
  },
  {
    id: "scene-04-24",
    type: "thought",
    speaker: "JP",
    text: "Não porque ela resolve tudo."
  },
  {
    id: "scene-04-25",
    type: "thought",
    speaker: "JP",
    text: "Nada resolve tudo."
  },
  {
    id: "scene-04-26",
    type: "thought",
    speaker: "JP",
    text: "Mas ela obriga o outro lado a respeitar a mesa."
  },
  {
    id: "scene-04-pause-07",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-27",
    type: "thought",
    speaker: "JP",
    text: "Pune arsenal."
  },
  {
    id: "scene-04-28",
    type: "thought",
    speaker: "JP",
    text: "Pune conforto."
  },
  {
    id: "scene-04-29",
    type: "thought",
    speaker: "JP",
    text: "Pune aquele turno em que o cara acha que conseguiu respirar."
  },
  {
    id: "scene-04-pause-08",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-30",
    type: "thought",
    speaker: "JP",
    text: "Ira não precisa de muito."
  },
  {
    id: "scene-04-31",
    type: "thought",
    speaker: "JP",
    text: "Ela só precisa de uma abertura."
  },
  {
    id: "scene-04-32",
    type: "thought",
    speaker: "JP",
    text: "Uma rachadura."
  },
  {
    id: "scene-04-33",
    type: "thought",
    speaker: "JP",
    text: "Uma hesitação."
  },
  {
    id: "scene-04-pause-09",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-34",
    type: "thought",
    speaker: "JP",
    text: "Command and Conquer cria isso."
  },
  {
    id: "scene-04-35",
    type: "thought",
    speaker: "JP",
    text: "Ela faz o oponente escolher o que vai perder."
  },
  {
    id: "scene-04-breathe-01",
    type: "visual",
    camera: "center",
    hideDialog: true
  },
  {
    id: "scene-04-36",
    type: "thought",
    speaker: "JP",
    text: "Não precisava nem ser perfeita."
  },
  {
    id: "scene-04-37",
    type: "thought",
    speaker: "JP",
    text: "Não precisava ser bonita."
  },
  {
    id: "scene-04-38",
    type: "thought",
    speaker: "JP",
    text: "Não precisava vir de pasta de colecionador, sleeve novo, anúncio cheio de frescura."
  },
  {
    id: "scene-04-pause-10",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-39",
    type: "thought",
    speaker: "JP",
    text: "Podia ter marca."
  },
  {
    id: "scene-04-40",
    type: "thought",
    speaker: "JP",
    text: "Podia ter detalhe."
  },
  {
    id: "scene-04-41",
    type: "thought",
    speaker: "JP",
    text: "Podia ser daquelas cartas que colecionador olha torto…"
  },
  {
    id: "scene-04-42",
    type: "thought",
    speaker: "JP",
    text: "e jogador coloca no deck sem pensar duas vezes."
  },
  {
    id: "scene-04-pause-11",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-43",
    type: "thought",
    speaker: "JP",
    text: "Só precisava ser real."
  },
  {
    id: "scene-04-look-phone-02",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
  {
    id: "scene-04-44",
    type: "thought",
    speaker: "JP",
    text: "Real e minha."
  },
  {
    id: "scene-04-pause-12",
    type: "visual",
    hideDialog: true
  },
  {
    id: "scene-04-phone-vibrates",
    type: "visual",
    camera: "desk",
    hideDialog: true
  },
{
  "id": "scene-06-room-phone-entry",
  "type": "visual",
  "bg": "assets/bg/quarto-01.webp",
  "camera": "center",
  "clearObjects": true,
  "clearEffects": true,
  "clearCharacters": true,
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  },
  "hideDialog": true
},
{
  "id": "scene-06-01",
  "type": "thought",
  "speaker": "JP",
  "text": "…",
  "bg": "assets/bg/quarto-01.webp",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  }
},
{
  "id": "scene-06-phone-light",
  "type": "visual",
  "bg": "assets/bg/quarto-01.webp",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side phone-glow"
  },
  "hideDialog": true
},
{
  "id": "scene-06-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Mensagem privada?",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  }
},
{
  "id": "scene-06-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-06-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Depois daquilo no grupo?"
},
{
  "id": "scene-06-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Ou é alguém zoando…"
},
{
  "id": "scene-06-05",
  "type": "thought",
  "speaker": "JP",
  "text": "…ou alguém resolveu falar sério."
},
{
  "id": "scene-06-lift-phone",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-06-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Se for piada, eu ignoro."
},
{
  "id": "scene-06-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-06-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Se não for…"
},
{
  "id": "scene-06-08",
  "type": "thought",
  "speaker": "JP",
  "text": "Então vamos ver."
},
{
  "id": "scene-07-private-chat-entry",
  "type": "visual",
  "bg": "assets/bg/mesa-deck-01.webp",
  "camera": "center",
  "clearCharacters": true,
  "clearObjects": true,
  "clearEffects": true,
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "Desconhecido",
        "text": "Tenho uma.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-07-private-chat-02",
  "type": "visual",
  "bg": "assets/bg/mesa-deck-01.webp",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "Desconhecido",
        "text": "Tenho uma.",
        "side": "other"
      },
      {
        "from": "Desconhecido",
        "text": "Preciso vender hoje.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-07-01",
  "type": "thought",
  "speaker": "JP",
  "text": "Hoje?"
},
{
  "id": "scene-07-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Rápido assim?"
},
{
  "id": "scene-07-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-07-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Ou o cara tá desesperado…"
},
{
  "id": "scene-07-04",
  "type": "thought",
  "speaker": "JP",
  "text": "…ou isso é golpe."
},
{
  "id": "scene-07-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-07-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Curto demais."
},
{
  "id": "scene-07-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Direto demais."
},
{
  "id": "scene-07-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Como se ele soubesse exatamente o que eu queria ler."
},
{
  "id": "scene-07-pause-03",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-07-08",
  "type": "thought",
  "speaker": "JP",
  "text": "E sabe."
},
{
  "id": "scene-07-jp-typing",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "Desconhecido",
        "text": "Tenho uma.",
        "side": "other"
      },
      {
        "from": "Desconhecido",
        "text": "Preciso vender hoje.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Quem é?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-07-pause-04",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-07-marcos-01",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "Desconhecido",
        "text": "Tenho uma.",
        "side": "other"
      },
      {
        "from": "Desconhecido",
        "text": "Preciso vender hoje.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Quem é?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Marcos.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-07-marcos-02",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "Desconhecido",
        "text": "Tenho uma.",
        "side": "other"
      },
      {
        "from": "Desconhecido",
        "text": "Preciso vender hoje.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Quem é?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Marcos.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Joguei uns eventos aí um tempo atrás.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-07-09",
  "type": "thought",
  "speaker": "JP",
  "text": "Marcos."
},
{
  "id": "scene-07-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Nome comum demais."
},
{
  "id": "scene-07-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Ajuda pouco."
},
{
  "id": "scene-07-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Podia ser verdade."
},
{
  "id": "scene-07-13",
  "type": "thought",
  "speaker": "JP",
  "text": "Podia ser inventado em dez segundos."
},
{
  "id": "scene-08-room-return",
  "type": "visual",
  "bg": "assets/bg/quarto-01.webp",
  "camera": "center",
  "clearObjects": true,
  "clearEffects": true,
  "clearCharacters": true,
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  },
  "hideDialog": true
},
{
  "id": "scene-08-01",
  "type": "thought",
  "speaker": "JP",
  "text": "Marcos…",
  "bg": "assets/bg/quarto-01.webp",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  }
},
{
  "id": "scene-08-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Marcos, Marcos…"
},
{
  "id": "scene-08-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Eu lembro desse nome?"
},
{
  "id": "scene-08-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Ou só quero lembrar?"
},
{
  "id": "scene-08-memory",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Todo grupo tem uns três Marcos."
},
{
  "id": "scene-08-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Dois aparecem em evento."
},
{
  "id": "scene-08-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Um some por meses."
},
{
  "id": "scene-08-08",
  "type": "thought",
  "speaker": "JP",
  "text": "E sempre tem aquele cara que você já viu de longe…"
},
{
  "id": "scene-08-09",
  "type": "thought",
  "speaker": "JP",
  "text": "…mas não conhece o suficiente pra confiar."
},
{
  "id": "scene-08-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Talvez eu já tenha visto esse nome em lista de evento."
},
{
  "id": "scene-08-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Talvez ele tenha jogado no Centro Cultural."
},
{
  "id": "scene-08-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Talvez eu esteja completando o resto sozinho."
},
{
  "id": "scene-08-pause-03",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-13",
  "type": "thought",
  "speaker": "JP",
  "text": "Se for golpe, tá bem montado."
},
{
  "id": "scene-08-14",
  "type": "thought",
  "speaker": "JP",
  "text": "Não veio com exagero."
},
{
  "id": "scene-08-15",
  "type": "thought",
  "speaker": "JP",
  "text": "Não prometeu milagre."
},
{
  "id": "scene-08-16",
  "type": "thought",
  "speaker": "JP",
  "text": "Não tentou empurrar um monte de coisa."
},
{
  "id": "scene-08-17",
  "type": "thought",
  "speaker": "JP",
  "text": "Só falou o suficiente."
},
{
  "id": "scene-08-pause-04",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-18",
  "type": "thought",
  "speaker": "JP",
  "text": "Suficiente pra me fazer pensar duas vezes."
},
{
  "id": "scene-08-phone-grip",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-08-19",
  "type": "thought",
  "speaker": "JP",
  "text": "Calma."
},
{
  "id": "scene-08-20",
  "type": "thought",
  "speaker": "JP",
  "text": "Primeiro confirma se esse cara existe."
},
{
  "id": "scene-08-21",
  "type": "thought",
  "speaker": "JP",
  "text": "Se ele jogou por aqui…"
},
{
  "id": "scene-08-22",
  "type": "thought",
  "speaker": "JP",
  "text": "…alguém vai lembrar."
}
];
