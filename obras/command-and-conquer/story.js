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
          from: "Grupo",
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
          from: "Grupo",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Grupo",
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
          from: "Grupo",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Grupo",
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
          from: "Grupo",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Essa aí sumiu do mapa.",
          side: "other"
        },
        {
          from: "Grupo",
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
          from: "Grupo",
          text: "Boa sorte.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Se achar duas, me avisa.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Essa aí sumiu do mapa.",
          side: "other"
        },
        {
          from: "Grupo",
          text: "Quem tem não vende.",
          side: "other"
        },
        {
          from: "Grupo",
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
];
