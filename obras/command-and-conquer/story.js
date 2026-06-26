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
},
{
  "id": "scene-09-room-check-entry",
  "type": "visual",
  "hideDialog": true,
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
  }
},
{
  "id": "scene-09-01",
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
  "id": "scene-09-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Não vou fechar nada só com um nome."
},
{
  "id": "scene-09-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Melhor perguntar pra quem estava nos últimos eventos."
},
{
  "id": "scene-09-bruno-chat",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/quarto-01.webp",
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Bruno, você lembra de um Marcos que jogou Flesh por aqui?",
        "side": "me"
      },
      {
        "from": "Bruno",
        "text": "Marcos?",
        "side": "other"
      },
      {
        "from": "Bruno",
        "text": "Acho que não.",
        "side": "other"
      },
      {
        "from": "Bruno",
        "text": "Se jogou comigo, não lembro.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-09-rafael-chat",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/quarto-01.webp",
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Rafael, você conhece um Marcos que apareceu nos eventos?",
        "side": "me"
      },
      {
        "from": "Rafael",
        "text": "Conhecer, não conheço.",
        "side": "other"
      },
      {
        "from": "Rafael",
        "text": "Mas esse nome não me é estranho.",
        "side": "other"
      },
      {
        "from": "Rafael",
        "text": "Pergunta pra Camila. Ela costuma lembrar dessas coisas.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-09-camila-chat",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/quarto-01.webp",
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Camila, você lembra de um Marcos que jogou uns eventos aqui?",
        "side": "me"
      },
      {
        "from": "Camila",
        "text": "Lembro sim.",
        "side": "other"
      },
      {
        "from": "Camila",
        "text": "Ele veio jogar o último torneio.",
        "side": "other"
      },
      {
        "from": "Camila",
        "text": "Não ficou entre os finalistas, mas jogou umas rodadas.",
        "side": "other"
      },
      {
        "from": "Camila",
        "text": "Depois ficou trocando carta com o pessoal.",
        "side": "other"
      },
      {
        "from": "Camila",
        "text": "Inclusive fez umas trocas comigo.",
        "side": "other"
      },
      {
        "from": "Camila",
        "text": "Ele jogava Magic também, se não me engano.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-09-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Tá."
},
{
  "id": "scene-09-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Então ele existe."
},
{
  "id": "scene-09-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Veio no torneio."
},
{
  "id": "scene-09-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Jogou."
},
{
  "id": "scene-09-08",
  "type": "thought",
  "speaker": "JP",
  "text": "Fez troca."
},
{
  "id": "scene-09-09",
  "type": "thought",
  "speaker": "JP",
  "text": "Camila lembra dele."
},
{
  "id": "scene-09-pause-03",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Isso não prova que a carta é real."
},
{
  "id": "scene-09-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Mas prova que ele não saiu do nada."
},
{
  "id": "scene-09-pause-04",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-look-phone",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Verdadeiro o suficiente."
},
{
  "id": "scene-09-pause-05",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-09-13",
  "type": "thought",
  "speaker": "JP",
  "text": "Agora falta ver a carta."
},
{
  "id": "scene-10-photo-chat-entry",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/mesa-deck-01.webp",
  "camera": "center",
  "clearCharacters": true,
  "clearObjects": true,
  "clearEffects": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Consegue mandar foto?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-10-photo-chat-02",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/mesa-deck-01.webp",
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Consegue mandar foto?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Mando.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-10-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-10-photo-chat-03",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Consegue mandar foto?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Mando.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Pera.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-10-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-10-photo-chat-04",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Consegue mandar foto?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Mando.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Pera.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Tá aqui.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "[foto enviada]",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-10-01",
  "type": "thought",
  "speaker": "JP",
  "text": "Vamos ver."
},
{
  "id": "scene-10-pause-03",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-10-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Sem empolgar."
},
{
  "id": "scene-10-pause-04",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-10-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Só olha."
},
{
  "id": "scene-11-room-card-entry",
  "type": "visual",
  "hideDialog": true,
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
  }
},
{
  "id": "scene-11-01",
  "type": "thought",
  "speaker": "JP",
  "text": "É ela.",
  "bg": "assets/bg/quarto-01.webp",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-desconfiado.png",
    "position": "left",
    "effect": "phone-side"
  }
},
{
  "id": "scene-11-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Command and Conquer."
},
{
  "id": "scene-11-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Primeira impressão."
},
{
  "id": "scene-11-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Rainbow Foil."
},
{
  "id": "scene-11-pause-05",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-05",
  "type": "thought",
  "speaker": "JP",
  "text": "A foto é ruim."
},
{
  "id": "scene-11-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Claro que é ruim."
},
{
  "id": "scene-11-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Mesa escura, luz estourada, câmera tremida…"
},
{
  "id": "scene-11-pause-08",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-08",
  "type": "thought",
  "speaker": "JP",
  "text": "Mas mesmo assim dá pra ver."
},
{
  "id": "scene-11-09",
  "type": "thought",
  "speaker": "JP",
  "text": "A carta brilha diferente."
},
{
  "id": "scene-11-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Não bonito."
},
{
  "id": "scene-11-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Forte."
},
{
  "id": "scene-11-pause-12",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Bonita demais."
},
{
  "id": "scene-11-13",
  "type": "thought",
  "speaker": "JP",
  "text": "Quase absurda demais pra cair no meu colo assim."
},
{
  "id": "scene-11-pause-14",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-phone-close",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-14",
  "type": "thought",
  "speaker": "JP",
  "text": "E tem erro."
},
{
  "id": "scene-11-15",
  "type": "thought",
  "speaker": "JP",
  "text": "A borda de cima tá levemente cortada."
},
{
  "id": "scene-11-16",
  "type": "thought",
  "speaker": "JP",
  "text": "Não muito."
},
{
  "id": "scene-11-17",
  "type": "thought",
  "speaker": "JP",
  "text": "Só o suficiente pra incomodar."
},
{
  "id": "scene-11-pause-18",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-18",
  "type": "thought",
  "speaker": "JP",
  "text": "E embaixo…"
},
{
  "id": "scene-11-19",
  "type": "thought",
  "speaker": "JP",
  "text": "tem uma faixa de cor que não devia estar ali."
},
{
  "id": "scene-11-20",
  "type": "thought",
  "speaker": "JP",
  "text": "Um pedaço de outra impressão."
},
{
  "id": "scene-11-21",
  "type": "thought",
  "speaker": "JP",
  "text": "Como se a carta tivesse puxado alguma coisa junto."
},
{
  "id": "scene-11-pause-22",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-22",
  "type": "thought",
  "speaker": "JP",
  "text": "Misprint."
},
{
  "id": "scene-11-23",
  "type": "thought",
  "speaker": "JP",
  "text": "Estranha."
},
{
  "id": "scene-11-pause-24",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-11-24",
  "type": "thought",
  "speaker": "JP",
  "text": "Mas real."
},
{
  "id": "scene-12-video-chat-entry",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/mesa-deck-01.webp",
  "camera": "center",
  "clearCharacters": true,
  "clearObjects": true,
  "clearEffects": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Ela é misprint?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-12-video-chat-02",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Ela é misprint?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sim.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Faço mais barato.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-12-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-video-chat-03",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Ela é misprint?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sim.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Faço mais barato.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Manda vídeo?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-12-video-chat-04",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Ela é misprint?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sim.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Faço mais barato.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Manda vídeo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Mando.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-12-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-video-chat-05",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Ela é misprint?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sim.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Faço mais barato.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Manda vídeo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Mando.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Só um minuto.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "[vídeo enviado]",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-12-01",
  "type": "thought",
  "speaker": "JP",
  "text": "Vídeo é melhor."
},
{
  "id": "scene-12-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Foto mente fácil."
},
{
  "id": "scene-12-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Ângulo mente."
},
{
  "id": "scene-12-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Luz mente."
},
{
  "id": "scene-12-pause-05",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Mas vídeo entrega."
},
{
  "id": "scene-12-pause-06",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Frente."
},
{
  "id": "scene-12-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Verso."
},
{
  "id": "scene-12-08",
  "type": "thought",
  "speaker": "JP",
  "text": "Foil."
},
{
  "id": "scene-12-09",
  "type": "thought",
  "speaker": "JP",
  "text": "Textura."
},
{
  "id": "scene-12-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Borda."
},
{
  "id": "scene-12-pause-11",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Se o vídeo bater, a carta existe."
},
{
  "id": "scene-12-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Se a carta existe…"
},
{
  "id": "scene-12-pause-13",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-12-13",
  "type": "thought",
  "speaker": "JP",
  "text": "o resto eu resolvo."
},
{
  "id": "scene-13-price-entry",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/quarto-01.webp",
  "camera": "center",
  "clearObjects": true,
  "clearEffects": true,
  "clearCharacters": true,
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-animado.png",
    "position": "left",
    "effect": "phone-excited"
  }
},
{
  "id": "scene-13-marcos-price",
  "type": "dialogue",
  "speaker": "Marcos",
  "text": "Faço por [preço baixo].",
  "bg": "assets/bg/quarto-01.webp",
  "character": {
    "id": "jp",
    "src": "assets/characters/jp-celular-animado.png",
    "position": "left",
    "effect": "phone-excited"
  }
},
{
  "id": "scene-13-01",
  "type": "thought",
  "speaker": "JP",
  "text": "…quê?"
},
{
  "id": "scene-13-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Não."
},
{
  "id": "scene-13-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Esse preço tá errado."
},
{
  "id": "scene-13-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Muito baixo."
},
{
  "id": "scene-13-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Baixo demais pra ser normal."
},
{
  "id": "scene-13-pause-06",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Não é preço de amigo."
},
{
  "id": "scene-13-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Não é preço de quem tá parando."
},
{
  "id": "scene-13-08",
  "type": "thought",
  "speaker": "JP",
  "text": "Não é “preciso pagar um boleto até amanhã”."
},
{
  "id": "scene-13-09",
  "type": "thought",
  "speaker": "JP",
  "text": "É preço de quem quer se livrar logo."
},
{
  "id": "scene-13-pause-10",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-10",
  "type": "thought",
  "speaker": "JP",
  "text": "Isso devia me afastar."
},
{
  "id": "scene-13-11",
  "type": "thought",
  "speaker": "JP",
  "text": "Devia ser o momento em que eu agradeço, invento uma desculpa e deixo pra lá."
},
{
  "id": "scene-13-pause-12",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-look-table",
  "type": "visual",
  "hideDialog": true,
  "camera": "desk"
},
{
  "id": "scene-13-12",
  "type": "thought",
  "speaker": "JP",
  "text": "Mas a carta tá certa."
},
{
  "id": "scene-13-13",
  "type": "thought",
  "speaker": "JP",
  "text": "A foto tá certa."
},
{
  "id": "scene-13-14",
  "type": "thought",
  "speaker": "JP",
  "text": "O vídeo tá certo."
},
{
  "id": "scene-13-15",
  "type": "thought",
  "speaker": "JP",
  "text": "O erro tá certo."
},
{
  "id": "scene-13-pause-16",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-16",
  "type": "thought",
  "speaker": "JP",
  "text": "E o preço…"
},
{
  "id": "scene-13-pause-17",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-17",
  "type": "thought",
  "speaker": "JP",
  "text": "O preço é a parte errada que eu mais quero aceitar."
},
{
  "id": "scene-13-pause-18",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-breathe",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-18",
  "type": "thought",
  "speaker": "JP",
  "text": "O cara precisa de dinheiro."
},
{
  "id": "scene-13-19",
  "type": "thought",
  "speaker": "JP",
  "text": "Simples."
},
{
  "id": "scene-13-20",
  "type": "thought",
  "speaker": "JP",
  "text": "Humano."
},
{
  "id": "scene-13-21",
  "type": "thought",
  "speaker": "JP",
  "text": "Acontece."
},
{
  "id": "scene-13-pause-22",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-13-22",
  "type": "thought",
  "speaker": "JP",
  "text": "Essa explicação serve."
},
{
  "id": "scene-14-deal-chat-entry",
  "type": "visual",
  "hideDialog": true,
  "bg": "assets/bg/mesa-deck-01.webp",
  "camera": "center",
  "clearCharacters": true,
  "clearObjects": true,
  "clearEffects": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-14-deal-chat-02",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Tá.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-14-deal-chat-03",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Tá.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Sem dobra? Sem marca forte?",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-14-deal-chat-04",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Tá.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Sem dobra? Sem marca forte?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sem.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Só o misprint mesmo.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-14-pause-01",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-deal-chat-05",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Tá.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Sem dobra? Sem marca forte?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sem.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Só o misprint mesmo.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Fecho.",
        "side": "me"
      }
    ]
  }
},
{
  "id": "scene-14-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-deal-chat-06",
  "type": "visual",
  "hideDialog": true,
  "phone": {
    "src": "assets/objects/whatsapp-cel.png",
    "messages": [
      {
        "from": "JP",
        "text": "Tá inteira mesmo?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Tá.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Sem dobra? Sem marca forte?",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Sem.",
        "side": "other"
      },
      {
        "from": "Marcos",
        "text": "Só o misprint mesmo.",
        "side": "other"
      },
      {
        "from": "JP",
        "text": "Fecho.",
        "side": "me"
      },
      {
        "from": "Marcos",
        "text": "Obrigado.",
        "side": "other"
      }
    ]
  }
},
{
  "id": "scene-14-01",
  "type": "thought",
  "speaker": "JP",
  "text": "“Obrigado”?"
},
{
  "id": "scene-14-pause-02",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-02",
  "type": "thought",
  "speaker": "JP",
  "text": "Não “fechou”."
},
{
  "id": "scene-14-03",
  "type": "thought",
  "speaker": "JP",
  "text": "Não “manda o Pix”."
},
{
  "id": "scene-14-04",
  "type": "thought",
  "speaker": "JP",
  "text": "Não “vou separar aqui”."
},
{
  "id": "scene-14-pause-05",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-05",
  "type": "thought",
  "speaker": "JP",
  "text": "Obrigado."
},
{
  "id": "scene-14-06",
  "type": "thought",
  "speaker": "JP",
  "text": "Como se eu tivesse feito um favor."
},
{
  "id": "scene-14-pause-07",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-07",
  "type": "thought",
  "speaker": "JP",
  "text": "Como se eu tivesse aceitado ficar com alguma coisa…"
},
{
  "id": "scene-14-pause-08",
  "type": "visual",
  "hideDialog": true
},
{
  "id": "scene-14-08",
  "type": "thought",
  "speaker": "JP",
  "text": "que ele queria longe."
}
];
