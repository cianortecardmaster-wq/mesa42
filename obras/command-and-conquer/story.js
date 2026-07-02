const story = [
  {
    "id": "intro-logo",
    "type": "logo",
    "logo": "assets/ui/logo-command-and-conquer.png"
  },
  {
    "id": "scene-01-bg",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "camera": "center",
    "hideDialog": true
  },
  {
    "id": "scene-01-jp-entry",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left"
    },
    "hideDialog": true
  },
  {
    "id": "scene-01-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Não é que o deck esteja ruim.",
    "bg": "assets/bg/quarto-01.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left"
    }
  },
  {
    "id": "scene-01-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Isso seria mais fácil."
  },
  {
    "id": "scene-01-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Deck ruim você arruma."
  },
  {
    "id": "scene-01-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Corta carta morta. Troca equipamento. Muda o plano contra os heróis que estão aparecendo mais."
  },
  {
    "id": "scene-01-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Deck ruim pelo menos tem a decência de mostrar onde dói."
  },
  {
    "id": "scene-01-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-01-06",
    "type": "thought",
    "speaker": "JP",
    "text": "O problema é quando a lista funciona."
  },
  {
    "id": "scene-01-07",
    "type": "thought",
    "speaker": "JP",
    "text": "Quando você olha para ela e sabe que faz sentido."
  },
  {
    "id": "scene-01-08",
    "type": "thought",
    "speaker": "JP",
    "text": "Quando as contas fecham."
  },
  {
    "id": "scene-01-09",
    "type": "thought",
    "speaker": "JP",
    "text": "E mesmo assim alguma coisa continua faltando."
  },
  {
    "id": "scene-01-look-table",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
  },
  {
    "id": "scene-01-10",
    "type": "thought",
    "speaker": "JP",
    "text": "A Ira tá pronta."
  },
  {
    "id": "scene-01-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Quase pronta."
  },
  {
    "id": "scene-01-pause-02",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-01-12",
    "type": "thought",
    "speaker": "JP",
    "text": "Essa palavra é uma desgraça."
  },
  {
    "id": "scene-01-13",
    "type": "thought",
    "speaker": "JP",
    "text": "\"Quase\"."
  },
  {
    "id": "scene-01-14",
    "type": "thought",
    "speaker": "JP",
    "text": "Quase ganha. Quase segura. Quase vira. Quase fecha o jogo."
  },
  {
    "id": "scene-01-15",
    "type": "thought",
    "speaker": "JP",
    "text": "Quase é só outro nome para perder sabendo exatamente o que teria salvado você."
  },
  {
    "id": "scene-01-pause-03",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-01-16",
    "type": "thought",
    "speaker": "JP",
    "text": "E eu sei o que falta."
  },
  {
    "id": "scene-01-17",
    "type": "thought",
    "speaker": "JP",
    "text": "Não quero admitir."
  },
  {
    "id": "scene-01-18",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas sei."
  },
  {
    "id": "scene-01-table-silence",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
  },
  {
    "id": "scene-01-19",
    "type": "thought",
    "speaker": "JP",
    "text": "Command and Conquer.",
    "emphasis": true
  },
  {
    "id": "scene-02-table-entry",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "camera": "center",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-02-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Ataque tem.",
    "bg": "assets/bg/mesa-deck-01.webp",
    "clearCharacters": true
  },
  {
    "id": "scene-02-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Defesa tem."
  },
  {
    "id": "scene-02-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Equipamento tem."
  },
  {
    "id": "scene-02-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Plano de jogo também."
  },
  {
    "id": "scene-02-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas ainda falta peso."
  },
  {
    "id": "scene-02-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Falta a carta que faz o outro lado respeitar a mesa."
  },
  {
    "id": "scene-03-phone-entry",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": []
    }
  },
  {
    "id": "scene-03-phone-jp-message",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        }
      ]
    }
  },
  {
    "id": "scene-03-phone-reply-01",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        },
        {
          "from": "Lucas",
          "text": "Boa sorte.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-03-phone-reply-02",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        },
        {
          "from": "Lucas",
          "text": "Boa sorte.",
          "side": "other"
        },
        {
          "from": "Hermes",
          "text": "Se achar duas, me avisa.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-03-phone-reply-03",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        },
        {
          "from": "Lucas",
          "text": "Boa sorte.",
          "side": "other"
        },
        {
          "from": "Hermes",
          "text": "Se achar duas, me avisa.",
          "side": "other"
        },
        {
          "from": "Marcelo",
          "text": "Essa aí sumiu do mapa.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-03-phone-reply-04",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        },
        {
          "from": "Lucas",
          "text": "Boa sorte.",
          "side": "other"
        },
        {
          "from": "Hermes",
          "text": "Se achar duas, me avisa.",
          "side": "other"
        },
        {
          "from": "Marcelo",
          "text": "Essa aí sumiu do mapa.",
          "side": "other"
        },
        {
          "from": "Rafael",
          "text": "Quem tem não vende.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-03-phone-reply-05",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Alguém tem Command and Conquer pra vender?",
          "side": "me"
        },
        {
          "from": "Lucas",
          "text": "Boa sorte.",
          "side": "other"
        },
        {
          "from": "Hermes",
          "text": "Se achar duas, me avisa.",
          "side": "other"
        },
        {
          "from": "Marcelo",
          "text": "Essa aí sumiu do mapa.",
          "side": "other"
        },
        {
          "from": "Rafael",
          "text": "Quem tem não vende.",
          "side": "other"
        },
        {
          "from": "Yuri",
          "text": "Quem vende pede um rim.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-03-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Engraçadões."
  },
  {
    "id": "scene-03-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas ninguém falou que tinha."
  },
  {
    "id": "scene-04-room-return",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "camera": "center",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-pensativo.png",
      "position": "left"
    },
    "hideDialog": true
  },
  {
    "id": "scene-04-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Todo mundo sabe o valor dela.",
    "bg": "assets/bg/quarto-01.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-pensativo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-04-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Por isso ninguém larga."
  },
  {
    "id": "scene-04-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Não é só porque é cara."
  },
  {
    "id": "scene-04-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Carta cara aparece."
  },
  {
    "id": "scene-04-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Sempre tem alguém vendendo coleção. Alguém parando de jogar. Alguém precisando levantar dinheiro rápido."
  },
  {
    "id": "scene-04-pause-02",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas Command and Conquer é diferente."
  },
  {
    "id": "scene-04-07",
    "type": "thought",
    "speaker": "JP",
    "text": "Quem tem, guarda."
  },
  {
    "id": "scene-04-08",
    "type": "thought",
    "speaker": "JP",
    "text": "Quem não tem, fica fazendo conta."
  },
  {
    "id": "scene-04-09",
    "type": "thought",
    "speaker": "JP",
    "text": "E quem quer comprar escuta piada."
  },
  {
    "id": "scene-04-look-table-01",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
  },
  {
    "id": "scene-04-10",
    "type": "thought",
    "speaker": "JP",
    "text": "O pior é que eu entendo."
  },
  {
    "id": "scene-04-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Se eu tivesse uma, também não venderia."
  },
  {
    "id": "scene-04-pause-03",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-12",
    "type": "thought",
    "speaker": "JP",
    "text": "Talvez seja isso que irrita."
  },
  {
    "id": "scene-04-13",
    "type": "thought",
    "speaker": "JP",
    "text": "Não tem vilão."
  },
  {
    "id": "scene-04-14",
    "type": "thought",
    "speaker": "JP",
    "text": "Não tem injustiça."
  },
  {
    "id": "scene-04-15",
    "type": "thought",
    "speaker": "JP",
    "text": "Só tem eu, meu deck quase pronto…"
  },
  {
    "id": "scene-04-16",
    "type": "thought",
    "speaker": "JP",
    "text": "E uma carta que todo mundo sabe que falta."
  },
  {
    "id": "scene-04-pause-04",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-17",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Droga…"
  },
  {
    "id": "scene-04-silence-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-18",
    "type": "thought",
    "speaker": "JP",
    "text": "Eu não preciso dela."
  },
  {
    "id": "scene-04-pause-05",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-19",
    "type": "thought",
    "speaker": "JP",
    "text": "Essa é a parte racional."
  },
  {
    "id": "scene-04-20",
    "type": "thought",
    "speaker": "JP",
    "text": "A parte que sabe que deck nenhum deveria depender de uma carta só."
  },
  {
    "id": "scene-04-21",
    "type": "thought",
    "speaker": "JP",
    "text": "A parte que fala que consistência vale mais que teimosia."
  },
  {
    "id": "scene-04-pause-06",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-22",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas eu também sei quando estou mentindo."
  },
  {
    "id": "scene-04-look-phone-01",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
  },
  {
    "id": "scene-04-23",
    "type": "thought",
    "speaker": "JP",
    "text": "Se eu tivesse uma Command and Conquer, esse deck mudava de nível."
  },
  {
    "id": "scene-04-24",
    "type": "thought",
    "speaker": "JP",
    "text": "Não porque ela resolve tudo."
  },
  {
    "id": "scene-04-25",
    "type": "thought",
    "speaker": "JP",
    "text": "Nada resolve tudo."
  },
  {
    "id": "scene-04-26",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas ela obriga o outro lado a respeitar a mesa."
  },
  {
    "id": "scene-04-pause-07",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-27",
    "type": "thought",
    "speaker": "JP",
    "text": "Pune arsenal."
  },
  {
    "id": "scene-04-28",
    "type": "thought",
    "speaker": "JP",
    "text": "Pune conforto."
  },
  {
    "id": "scene-04-29",
    "type": "thought",
    "speaker": "JP",
    "text": "Pune aquele turno em que o cara acha que conseguiu respirar."
  },
  {
    "id": "scene-04-pause-08",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-30",
    "type": "thought",
    "speaker": "JP",
    "text": "Ira não precisa de muito."
  },
  {
    "id": "scene-04-31",
    "type": "thought",
    "speaker": "JP",
    "text": "Ela só precisa de uma abertura."
  },
  {
    "id": "scene-04-32",
    "type": "thought",
    "speaker": "JP",
    "text": "Uma rachadura."
  },
  {
    "id": "scene-04-33",
    "type": "thought",
    "speaker": "JP",
    "text": "Uma hesitação."
  },
  {
    "id": "scene-04-pause-09",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-34",
    "type": "thought",
    "speaker": "JP",
    "text": "Command and Conquer cria isso."
  },
  {
    "id": "scene-04-35",
    "type": "thought",
    "speaker": "JP",
    "text": "Ela faz o oponente escolher o que vai perder."
  },
  {
    "id": "scene-04-breathe-01",
    "type": "visual",
    "camera": "center",
    "hideDialog": true
  },
  {
    "id": "scene-04-36",
    "type": "thought",
    "speaker": "JP",
    "text": "Não precisava nem ser perfeita."
  },
  {
    "id": "scene-04-37",
    "type": "thought",
    "speaker": "JP",
    "text": "Não precisava ser bonita."
  },
  {
    "id": "scene-04-38",
    "type": "thought",
    "speaker": "JP",
    "text": "Não precisava vir de pasta de colecionador, sleeve novo, anúncio cheio de frescura."
  },
  {
    "id": "scene-04-pause-10",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-39",
    "type": "thought",
    "speaker": "JP",
    "text": "Podia ter marca."
  },
  {
    "id": "scene-04-40",
    "type": "thought",
    "speaker": "JP",
    "text": "Podia ter detalhe."
  },
  {
    "id": "scene-04-41",
    "type": "thought",
    "speaker": "JP",
    "text": "Podia ser daquelas cartas que colecionador olha torto…"
  },
  {
    "id": "scene-04-42",
    "type": "thought",
    "speaker": "JP",
    "text": "e jogador coloca no deck sem pensar duas vezes."
  },
  {
    "id": "scene-04-pause-11",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-43",
    "type": "thought",
    "speaker": "JP",
    "text": "Só precisava ser real."
  },
  {
    "id": "scene-04-look-phone-02",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
  },
  {
    "id": "scene-04-44",
    "type": "thought",
    "speaker": "JP",
    "text": "Real e minha."
  },
  {
    "id": "scene-04-pause-12",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-04-phone-vibrates",
    "type": "visual",
    "camera": "desk",
    "hideDialog": true
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
  },
  {
    "id": "scene-15-room-entry",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "camera": "center",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-celular-satisfeito.png",
      "position": "left",
      "effect": "phone-satisfied"
    },
    "hideDialog": true
  },
  {
    "id": "scene-15-01",
    "type": "thought",
    "speaker": "JP",
    "text": "…que ele queria longe.",
    "bg": "assets/bg/quarto-01.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-celular-satisfeito.png",
      "position": "left",
      "effect": "phone-satisfied"
    }
  },
  {
    "id": "scene-15-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Besteira."
  },
  {
    "id": "scene-15-03",
    "type": "thought",
    "speaker": "JP",
    "text": "É só impressão minha."
  },
  {
    "id": "scene-15-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Mensagem escrita não tem tom."
  },
  {
    "id": "scene-15-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Cada um responde do seu jeito."
  },
  {
    "id": "scene-15-pause-02",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-06",
    "type": "thought",
    "speaker": "JP",
    "text": "E, no fim das contas, o que importa é simples."
  },
  {
    "id": "scene-15-07",
    "type": "thought",
    "speaker": "JP",
    "text": "A carta existe."
  },
  {
    "id": "scene-15-08",
    "type": "thought",
    "speaker": "JP",
    "text": "A carta é dele."
  },
  {
    "id": "scene-15-09",
    "type": "thought",
    "speaker": "JP",
    "text": "Ele quer vender."
  },
  {
    "id": "scene-15-10",
    "type": "thought",
    "speaker": "JP",
    "text": "Eu quero comprar."
  },
  {
    "id": "scene-15-pause-03",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Pronto."
  },
  {
    "id": "scene-15-12",
    "type": "thought",
    "speaker": "JP",
    "text": "Sem mistério."
  },
  {
    "id": "scene-15-13",
    "type": "thought",
    "speaker": "JP",
    "text": "Sem viagem."
  },
  {
    "id": "scene-15-chat-01",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Vou fazer o Pix.",
          "side": "me"
        }
      ]
    }
  },
  {
    "id": "scene-15-chat-02",
    "type": "visual",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Vou fazer o Pix.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Te mando meus dados de correspondência.",
          "side": "me"
        }
      ]
    }
  },
  {
    "id": "scene-15-chat-03",
    "type": "visual",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Vou fazer o Pix.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Te mando meus dados de correspondência.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Quando enviar, me passa o código de rastreio.",
          "side": "me"
        }
      ]
    }
  },
  {
    "id": "scene-15-pause-04",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-chat-04",
    "type": "visual",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Vou fazer o Pix.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Te mando meus dados de correspondência.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Quando enviar, me passa o código de rastreio.",
          "side": "me"
        },
        {
          "from": "Marcos",
          "text": "Passo sim.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-15-chat-05",
    "type": "visual",
    "hideDialog": true,
    "phone": {
      "src": "assets/objects/whatsapp-cel.png",
      "messages": [
        {
          "from": "JP",
          "text": "Vou fazer o Pix.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Te mando meus dados de correspondência.",
          "side": "me"
        },
        {
          "from": "JP",
          "text": "Quando enviar, me passa o código de rastreio.",
          "side": "me"
        },
        {
          "from": "Marcos",
          "text": "Passo sim.",
          "side": "other"
        },
        {
          "from": "Marcos",
          "text": "Assim que postar.",
          "side": "other"
        }
      ]
    }
  },
  {
    "id": "scene-15-pause-05",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-14",
    "type": "thought",
    "speaker": "JP",
    "text": "Normal."
  },
  {
    "id": "scene-15-15",
    "type": "thought",
    "speaker": "JP",
    "text": "Tudo normal."
  },
  {
    "id": "scene-15-pause-06",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-16",
    "type": "thought",
    "speaker": "JP",
    "text": "Compra de carta."
  },
  {
    "id": "scene-15-17",
    "type": "thought",
    "speaker": "JP",
    "text": "Só isso."
  },
  {
    "id": "scene-15-pause-07",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-15-18",
    "type": "thought",
    "speaker": "JP",
    "text": "Pronto."
  },
  {
    "id": "scene-15-19",
    "type": "thought",
    "speaker": "JP",
    "text": "Negócio fechado."
  },
  {
    "id": "scene-16-desk-entry",
    "type": "visual",
    "bg": "assets/bg/mesa-deck-01.webp",
    "camera": "desk",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "hideDialog": true
  },
  {
    "id": "scene-16-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Agora vai.",
    "bg": "assets/bg/mesa-deck-01.webp"
  },
  {
    "id": "scene-16-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-16-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Agora esse deck fecha."
  },
  {
    "id": "scene-16-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Não hoje."
  },
  {
    "id": "scene-16-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Não nessa mesa."
  },
  {
    "id": "scene-16-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas fecha."
  },
  {
    "id": "scene-16-pause-02",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-16-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Ataque, defesa, equipamento…"
  },
  {
    "id": "scene-16-07",
    "type": "thought",
    "speaker": "JP",
    "text": "E agora a peça que faltava."
  },
  {
    "id": "scene-16-08",
    "type": "thought",
    "speaker": "JP",
    "text": "A peça que faz diferença."
  },
  {
    "id": "scene-16-09",
    "type": "thought",
    "speaker": "JP",
    "text": "A peça que pesa."
  },
  {
    "id": "scene-16-pause-03",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-16-10",
    "type": "thought",
    "speaker": "JP",
    "text": "Engraçado."
  },
  {
    "id": "scene-16-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Faz meia hora isso aqui era um buraco."
  },
  {
    "id": "scene-16-12",
    "type": "thought",
    "speaker": "JP",
    "text": "Agora já parece espaço reservado."
  },
  {
    "id": "scene-16-pause-04",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-16-13",
    "type": "thought",
    "speaker": "JP",
    "text": "Como se o deck soubesse."
  },
  {
    "id": "scene-17-close-entry",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "camera": "center",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-celular-satisfeito.png",
      "position": "left",
      "effect": "close-satisfied"
    },
    "hideDialog": true
  },
  {
    "id": "scene-17-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora sim.",
    "bg": "assets/bg/quarto-01.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-celular-satisfeito.png",
      "position": "left",
      "effect": "close-satisfied"
    }
  },
  {
    "id": "scene-17-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-17-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Agora o deck tá completo."
  },
  {
    "id": "scene-17-pause-02",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-17-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Só falta chegar."
  },
  {
    "id": "scene-17-pause-03",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-17-04",
    "type": "thought",
    "speaker": "JP",
    "text": "E, chegando, acabou."
  },
  {
    "id": "scene-17-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Aí não tem mais “quase”."
  },
  {
    "id": "scene-17-pause-04",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-17-breathe",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-17-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Finalmente."
  },
  {
    "id": "scene-17-fadeout",
    "type": "visual",
    "bg": "assets/bg/quarto-01.webp",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "hideDialog": true
  },
  {
    "id": "scene-next-black",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "camera": "center",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "hideDialog": true
  },
  {
    "id": "scene-next-timeskip",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "screenText": "Alguns dias depois.",
    "hideDialog": true
  },
  {
    "id": "scene-next-black-pause",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "hideDialog": true
  },
  {
    "id": "scene-delivery-house-open",
    "type": "visual",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "camera": "center",
    "clearObjects": true,
    "clearEffects": true,
    "clearCharacters": true,
    "hideDialog": true
  },
  {
    "id": "scene-delivery-valdir-entry",
    "type": "visual",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "clearCharacters": true,
    "character": {
      "id": "valdir",
      "src": "assets/characters/valdir-correio.png",
      "position": "right",
      "effect": "mailman"
    },
    "hideDialog": true
  },
  {
    "id": "scene-delivery-01",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Bom dia, JP.",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "character": {
      "id": "valdir",
      "src": "assets/characters/valdir-correio.png",
      "position": "right",
      "effect": "mailman"
    }
  },
  {
    "id": "scene-delivery-jp-entry",
    "type": "visual",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-delivery-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Opa, Valdir. Bom dia.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-03",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Mais carta, cara?",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, mas agora eu vou demorar um pouco.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Meu deck ficou pronto.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-06",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Ah, duvido.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pô, Valdir. Tá me zoando também?",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-rindo.png",
        "position": "left",
        "effect": "delivery-jp-laugh"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-08",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Eu só entrego. Quem compra toda semana é você.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-09",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Toda semana é exagero.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-10",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "É nada.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-11",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Já tô quase aprendendo esse jogo só de trazer envelope pra você.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Também não precisava entregar o pacote todo amassado, né, cara?",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-13",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Ah, já veio assim.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-14",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Você sabe que eu cuido bem das suas encomendas.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-delivery-15",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sei, sei.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-16",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tô brincando.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-17",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Assina aqui pra mim.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-18",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pronto.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-19",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Valeu.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-20",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Valeu, Valdir.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-21",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "Boa sorte aí com o deck pronto.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-22",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora vai.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-23",
    "type": "dialogue",
    "speaker": "Valdir",
    "text": "É o que você falou da outra vez.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "delivery-jp"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-24",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vai trabalhar, Valdir.",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido-falando.png",
        "position": "left",
        "effect": "delivery-jp-talk"
      },
      {
        "id": "valdir",
        "src": "assets/characters/valdir-correio.png",
        "position": "right",
        "effect": "mailman"
      }
    ]
  },
  {
    "id": "scene-delivery-alone-entry",
    "type": "visual",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "clearCharacters": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "delivery-jp"
    },
    "hideDialog": true
  },
  {
    "id": "scene-delivery-alone-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Quase duas semanas.",
    "bg": "assets/bg/casa-jp-frente-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "delivery-jp"
    }
  },
  {
    "id": "scene-delivery-alone-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Duas semanas olhando rastreio."
  },
  {
    "id": "scene-delivery-alone-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Duas semanas abrindo o celular como idiota."
  },
  {
    "id": "scene-delivery-alone-look-pack",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-delivery-alone-04",
    "type": "thought",
    "speaker": "JP",
    "text": "E agora ela tá aqui."
  },
  {
    "id": "scene-delivery-alone-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Amassada."
  },
  {
    "id": "scene-delivery-alone-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Claro."
  },
  {
    "id": "scene-delivery-alone-envelope",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-delivery-alone-07",
    "type": "thought",
    "speaker": "JP",
    "text": "Calma."
  },
  {
    "id": "scene-delivery-alone-08",
    "type": "thought",
    "speaker": "JP",
    "text": "Toploader segura."
  },
  {
    "id": "scene-delivery-alone-09",
    "type": "thought",
    "speaker": "JP",
    "text": "Sleeve segura."
  },
  {
    "id": "scene-delivery-alone-10",
    "type": "thought",
    "speaker": "JP",
    "text": "O cara parecia cuidadoso."
  },
  {
    "id": "scene-delivery-alone-pause-01",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-delivery-alone-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Cuidadoso até demais."
  },
  {
    "id": "scene-delivery-alone-cut-thought",
    "type": "visual",
    "hideDialog": true
  },
  {
    "id": "scene-delivery-alone-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Melhor abrir lá dentro.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "delivery-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-01-open",
    "type": "visual",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    },
    "hideDialog": true
  },
  {
    "id": "scene-kitchen-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Nossa senhora...",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tá bem amassado isso aqui.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Tomara que não tenha danificado a carta.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-kitchen-04-pause",
    "type": "visual",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    },
    "hideDialog": true
  },
  {
    "id": "scene-kitchen-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pô... será que capotou o caminhão dos Correios?",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    }
  },
  {
    "id": "scene-kitchen-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tá só o bagaço essa embalagem.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    }
  },
  {
    "id": "scene-kitchen-06",
    "type": "thought",
    "speaker": "JP",
    "text": "O duro de pegar assim, sem ser de loja, é que pode acontecer isso.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-kitchen-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Beleza. Vamos ver.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-table-pack-01-open",
    "type": "visual",
    "bg": "assets/bg/mesa-cozinha-topo.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "objects": [
      {
        "id": "pacote-centro",
        "src": "assets/objects/pacote-amassado.png",
        "x": 43,
        "y": 35,
        "w": 14,
        "effect": "package-small"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-table-pack-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Vamos com calma."
  },
  {
    "id": "scene-table-pack-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Se a carta veio inteira, já tá ótimo."
  },
  {
    "id": "scene-table-pack-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Nossa... papelão dos dois lados."
  },
  {
    "id": "scene-table-pack-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Plástico-bolha."
  },
  {
    "id": "scene-table-pack-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Mais sleeve."
  },
  {
    "id": "scene-table-pack-06",
    "type": "thought",
    "speaker": "JP",
    "text": "Mais fita."
  },
  {
    "id": "scene-table-open-01",
    "type": "visual",
    "bg": "assets/bg/mesa-cozinha-topo.webp",
    "clearObjects": true,
    "objects": [
      {
        "id": "pacote-aberto",
        "src": "assets/objects/pacote-aberto.png",
        "x": 38,
        "y": 25,
        "w": 24,
        "effect": "package-open-small"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-table-open-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Bom..."
  },
  {
    "id": "scene-table-open-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Ele tentou proteger a carta."
  },
  {
    "id": "scene-table-open-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Tentou bastante, aliás."
  },
  {
    "id": "scene-table-open-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Parece que ela tá bem protegida mesmo."
  },
  {
    "id": "scene-kitchen-08-open",
    "type": "visual",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    },
    "hideDialog": true
  },
  {
    "id": "scene-kitchen-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Meu Deus do céu...",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-09",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Quanto durex, cara.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tá querendo guardar ouro aqui dentro?",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    }
  },
  {
    "id": "scene-kitchen-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mais um pouco e eu precisava de ferramenta pra abrir isso.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-12",
    "type": "thought",
    "speaker": "JP",
    "text": "Tá... calma.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-kitchen-13",
    "type": "thought",
    "speaker": "JP",
    "text": "Se veio tudo isso de proteção, é porque a carta deve estar bem.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-kitchen-14-pause",
    "type": "visual",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    },
    "hideDialog": true
  },
  {
    "id": "scene-kitchen-14",
    "type": "dialogue",
    "speaker": "JP",
    "text": "...caramba.",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-card-table-open",
    "type": "visual",
    "bg": "assets/bg/mesa-cozinha-topo.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "objects": [
      {
        "id": "pacote-aberto-fundo",
        "src": "assets/objects/pacote-aberto.png",
        "x": 38,
        "y": 25,
        "w": 24,
        "effect": "package-open-small"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-card-reveal",
    "type": "visual",
    "bg": "assets/bg/mesa-cozinha-topo.webp",
    "objects": [
      {
        "id": "pacote-aberto-fundo",
        "src": "assets/objects/pacote-aberto.png",
        "x": 38,
        "y": 25,
        "w": 24,
        "effect": "package-open-small"
      },
      {
        "id": "carta-cnc",
        "src": "assets/objects/command-and-conquer-carta.png",
        "x": 40,
        "y": 18,
        "w": 18,
        "effect": "card-featured",
        "overlayEffect": "card-bottom-sweep"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-card-01",
    "type": "thought",
    "speaker": "JP",
    "text": "É ela mesmo."
  },
  {
    "id": "scene-card-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Command and Conquer."
  },
  {
    "id": "scene-card-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Primeira impressão."
  },
  {
    "id": "scene-card-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Rainbow Foil..."
  },
  {
    "id": "scene-card-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Ao vivo ela é ainda melhor."
  },
  {
    "id": "scene-card-06",
    "type": "thought",
    "speaker": "JP",
    "text": "A borda de cima veio cortada mesmo."
  },
  {
    "id": "scene-card-07",
    "type": "thought",
    "speaker": "JP",
    "text": "E essa faixa aqui embaixo..."
  },
  {
    "id": "scene-card-08",
    "type": "thought",
    "speaker": "JP",
    "text": "Estranho."
  },
  {
    "id": "scene-card-09",
    "type": "thought",
    "speaker": "JP",
    "text": "Mas não estraga."
  },
  {
    "id": "scene-card-10",
    "type": "thought",
    "speaker": "JP",
    "text": "Não."
  },
  {
    "id": "scene-card-11",
    "type": "thought",
    "speaker": "JP",
    "text": "Se bobear, isso deixa ela ainda melhor."
  },
  {
    "id": "scene-kitchen-postcard-entry",
    "type": "visual",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    },
    "hideDialog": true
  },
  {
    "id": "scene-kitchen-postcard-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora sim.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    }
  },
  {
    "id": "scene-kitchen-postcard-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vou sleevar a carta.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-postcard-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Logo mais chegam as outras duas pra fechar a trinca.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-postcard-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas essa aqui parece especial.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "kitchen-jp"
    }
  },
  {
    "id": "scene-kitchen-postcard-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Não vejo a hora de testar no Centro Cultural.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "kitchen-jp-talk"
    }
  },
  {
    "id": "scene-kitchen-postcard-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Amanhã ela já vê jogo.",
    "bg": "assets/bg/cozinha-entardecer.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "kitchen-jp-laugh"
    }
  },
  {
    "id": "scene-cc-title",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "screenText": "Domingo 13:30 — Centro Cultural",
    "hideDialog": true
  },
  {
    "id": "scene-cc-front-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno-falando.png",
        "position": "right",
        "effect": "cc-bruno-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-front-01",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "E aí, bora jogar uma partida hoje?",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno-falando.png",
        "position": "right",
        "effect": "cc-bruno-back"
      }
    ]
  },
  {
    "id": "scene-cc-front-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Com certeza.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-03",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ah, você parece mais animado que o comum.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-04",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Chegou sua carta?",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, cara… chegou.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Numa caixa toda estourada, mas chegou.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-07",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Puts, os Correios tão foda, hein.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-08",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ainda bem que não extraviaram.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-09",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, nunca perderam encomenda minha.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-10",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Que sorte.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-11",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Já perderam uma minha.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-12",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Mas carta, ainda não.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "right",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-13",
    "type": "dialogue",
    "speaker": "JP",
    "text": "É foda.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-rafael-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael-falando.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-front-14",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "E aí, do que os viciados tão falando?",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-front-15",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Chegou a carta secreta do JP.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-16",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Ah, quero ver.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-front-17",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Mas não é a carta que muda o jogo.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-front-18",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Tem que escutar o coração do deck.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-front-19",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Hehe.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-front-20",
    "type": "dialogue",
    "speaker": "JP",
    "text": "A lá.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-21",
    "type": "dialogue",
    "speaker": "JP",
    "text": "O jogador de Yu-Gi-Oh.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-22",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Mas é verdade.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-23",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Você tem que entender seu deck.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-24",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas eu entendi.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-25",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Só estava faltando uma carta.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-26",
    "type": "dialogue",
    "speaker": "JP",
    "text": "E agora ela chegou.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-27",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Na verdade, faltava o set.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-28",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas essa aqui vai dar conta.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-front-29",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Bora conferir, então.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-front-30",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Bora.",
    "bg": "assets/bg/centro-cultural-frente.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-normal.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-hall-empty-01",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Cara, chegamos cedo.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pois é.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-hall-empty-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Eu tava animado.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-hall-empty-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas estamos no horário.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-hall-empty-05",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Olha o cara, Rafael.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-06",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Tá tirando o deck como se fosse o Um Anel.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-07",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Kkkkk.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-08",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Que cuidado.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-09",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Agora eu tô ansioso pra descobrir qual é a carta.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-10",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Bora jogar já?",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-hall-empty-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Bora.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-timeskip",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "screenText": "Algumas partidas depois...",
    "hideDialog": true
  },
  {
    "id": "scene-cc-occupied-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-cc-occupied-01",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Cara… que jogo difícil.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-occupied-02",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Mas ainda não achei a carta nova.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-occupied-03",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Vou fazer um arsenal.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-occupied-04",
    "type": "thought",
    "speaker": "JP",
    "text": "…",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-occupied-05",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "É, mas não se anima não.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-occupied-06",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ainda tô no jogo.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-fps-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-cc-fps-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Não sei não.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-fps-02",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Manda ver, então.",
    "bg": "assets/bg/centro-cultural-partida-bruno.webp"
  },
  {
    "id": "scene-cc-jogadores-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-fps-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Kodachi pra 1.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-04",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "No blocks.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sem reações.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-06",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Sem reaction.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-07",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Vou pra 5 de vida.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Cut Through pra 4, go again.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-09",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Deckzinho safado esse, hein.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-10",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Quantas cartas na mão ainda?",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Uma.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "E dois recursos.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-13",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Que droga.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-14",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "E ainda tem momentum.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-15",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Beleza, bloco 3.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-16",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sem reaction.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-17",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Sem reaction.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-18",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Vou pra 4 de vida.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-19",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Vai lá.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-fps-20",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ou vai, ou racha.",
    "bg": "assets/bg/centro-cultural-jogadores.webp"
  },
  {
    "id": "scene-cc-cnc-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno-incredulo.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-cnc-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Command and Conquer pra 6.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Não pode usar defense reaction nessa chain link.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "E se hitar, perde o arsenal.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-04",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ahhh, mano.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-05",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Sério que essa era a carta?",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-06",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Vai se f%#$&.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-07",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Não tenho nem como blocar direito.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-08",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Eu guardei a reaction pra evitar o terceiro hit.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-09",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Bloco 4 usando 1 do peito.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-10",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Perco o arsenal.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "E eu compro uma carta.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Faço arsenal.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-13",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sua vez.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-14",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Reponho a mão…",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-15",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "…e passo o turno.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-16",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Acho que levei essa.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-cnc-17",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Levou.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-18",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Você manda Kodachi pra 1, eu levo.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-19",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "E ainda tem quatro cartas pra bater.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-cnc-20",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Já era.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-rindo.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno-incredulo.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-postplay-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Aí sim.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-postplay-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora encaixou.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-postplay-03",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Encaixou nada.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-04",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Isso aí foi maldade.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-05",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Eu tava segurando a reaction certinha.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-06",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Pior que ele montou o turno bonito.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-postplay-07",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Bonito pra ele, né?",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-08",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Pra mim foi um atropelo.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-09",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Você que deixou arsenal.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-postplay-10",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ah, claro.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-11",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Agora a culpa é minha.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tecnicamente…",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-postplay-13",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Tecnicamente você vai se ferrar.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-14",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Admito.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-postplay-15",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Foi uma jogada boa.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-postplay-16",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Foi.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-postplay-17",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Mas eu vou reclamar mesmo assim.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left",
        "effect": "cc-jp-front-left"
      },
      {
        "id": "bruno",
        "src": "assets/characters/bruno.png",
        "position": "center",
        "effect": "cc-bruno-back"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "cc-rafael-back"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-cc-end-01",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "É, levou.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-02",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Se eu não perco aquele arsenal, talvez dava jogo.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Talvez.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-04",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Nossa, que humildade.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tô sendo realista.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-06",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Realista nada.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-end-07",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Tá se achando.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-end-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Um pouco.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-09",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Também, ganhou com estilo.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Fazia tempo que o deck não rodava assim.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-11",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Então era isso que faltava?",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "cc-rafael-back"
    }
  },
  {
    "id": "scene-cc-end-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Acho que era.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-13",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Ih.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-14",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Começou.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-15",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Começou o quê?",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-cc-end-16",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Nada não.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-17",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Só tô vendo nascer um relacionamento tóxico.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "center",
      "effect": "cc-bruno-back"
    }
  },
  {
    "id": "scene-cc-end-18",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vai embaralhar logo.",
    "bg": "assets/bg/centro-cultural-jogadores.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-timeskip-01",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "screenText": "Algumas partidas depois...",
    "hideDialog": true
  },
  {
    "id": "scene-06-command-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Command and Conquer.",
    "bg": "assets/bg/cena-06-command-01.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "mode": "emphasis"
  },
  {
    "id": "scene-06-timeskip-02",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-06-command-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Command and Conquer.",
    "bg": "assets/bg/cena-06-command-02.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "mode": "emphasis"
  },
  {
    "id": "scene-06-timeskip-03",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-06-command-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Command and Conquer.",
    "bg": "assets/bg/cena-06-command-03.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "mode": "emphasis"
  },
  {
    "id": "scene-06-timeskip-04",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-06-hall-empty-entry",
    "type": "visual",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-06-aftertalk-01",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "É, realmente essa carta fez a diferença.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-02",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Até acho que você tá escondendo essa carta na mão pra usar na hora certa.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, impressionante… ela realmente apareceu nos momentos certos.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-04",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu me senti enganada. Achei que ia vencer.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Eu sabia que ia ganhar. :)",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-06",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Ah, pelo amor, hein...",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-07",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Pior que eu vi a mão dele e ele sabia mesmo.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus.png",
      "position": "right",
      "effect": "scene06-mateus"
    }
  },
  {
    "id": "scene-06-aftertalk-08",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Vocês são uns sacanas.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-09",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu nem tenho reaction pra sofrer, mas parece que ele esperou eu vir com três itens na mão pra jogar ela.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-10",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Ah, sempre essa desculpa.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-11",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "“Ah, só veio item…”",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-12",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "A pessoa coloca metade do deck de item que explode e manda o oponente pra lua, e depois reclama que tem muito item.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-13",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Mas é isso, é tudo ou nada.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-14",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Item não bloca. Jogar de Mecha é isso.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-15",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu quero ver tudo pegar fogo e explorar os recursos depois.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-16",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "risos",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-17",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Terrorista do futuro.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-18",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "A classe tem o Ultron, o Doutor Destino e um ladrão de banco.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-19",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "A pirata é a mais correta.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-20",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Minha Dash é a queridinha de Metrix.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-21",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Metrix é um lixão em Rathe.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-22",
    "type": "dialogue",
    "speaker": "JP",
    "text": "O cara joga com esqueletos podres e tá falando de lixão.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-23",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Não vamos perder o foco.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus.png",
      "position": "right",
      "effect": "scene06-mateus"
    }
  },
  {
    "id": "scene-06-aftertalk-24",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "A conversa é sobre o deck safado da Ira.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus.png",
      "position": "right",
      "effect": "scene06-mateus"
    }
  },
  {
    "id": "scene-06-aftertalk-25",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "É, essa carta deu um up.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-26",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Quando chegarem as outras duas, vai ser um pé no saco.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-27",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Nem me fale.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-28",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "O chato dela é ver que ela é defeituosa ainda.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-29",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pô, isso é um charme.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-30",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Command and Conquer Rainbow Foil misprint. Legal demais.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-31",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Pior que deve ter um comércio legal de misprint.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-32",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Só não deve ser fácil passar no valor certo.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-33",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pois é.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-34",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Deve ser por isso que o cara vendeu 50% abaixo do valor de mercado.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-35",
    "type": "dialogue",
    "speaker": "Todos",
    "text": "O QUÊEEEE!!!!!",
    "bg": "assets/bg/centro-cultural-vazio.webp"
  },
  {
    "id": "scene-06-aftertalk-36",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sim.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-37",
    "type": "dialogue",
    "speaker": "JP",
    "text": "O cara tava se livrando dela.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-38",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Doideira.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-incredulo.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-39",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Galera, tô indo nessa.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus.png",
      "position": "right",
      "effect": "scene06-mateus"
    }
  },
  {
    "id": "scene-06-aftertalk-40",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Colo na loja na quarta.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus.png",
      "position": "right",
      "effect": "scene06-mateus"
    }
  },
  {
    "id": "scene-06-aftertalk-41",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Fechou.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-42",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Quarta tem Armory, e eu quero manter minha liderança.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-43",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Sei não...",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-44",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Vou explodir esse velho podre aí.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-45",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Pô, nem sou tão velho.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-46",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Ah—",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-47",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Tô falando do Gravy!",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-48",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Tô te zoando.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-49",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Eu sei que não sou velho.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "scene06-rafael"
    }
  },
  {
    "id": "scene-06-aftertalk-50",
    "type": "dialogue",
    "speaker": "Bruno",
    "text": "Não é porque você não fede que a gente não sente sua alma podre.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "bruno",
      "src": "assets/characters/bruno-falando.png",
      "position": "left",
      "effect": "scene06-bruno"
    }
  },
  {
    "id": "scene-06-aftertalk-51",
    "type": "dialogue",
    "speaker": "",
    "text": "[Todos riem.]",
    "bg": "assets/bg/centro-cultural-vazio.webp"
  },
  {
    "id": "scene-06-aftertalk-52",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Ah, eu não entro nessa zoeira não.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-53",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Vocês são maus.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "scene06-camila"
    }
  },
  {
    "id": "scene-06-aftertalk-54",
    "type": "dialogue",
    "speaker": "JP",
    "text": "risos",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-55",
    "type": "dialogue",
    "speaker": "JP",
    "text": "O papo tá bom, mas eu tenho que ir.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-06-aftertalk-56",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Até quarta.",
    "bg": "assets/bg/centro-cultural-vazio.webp",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "cc-jp-front-left"
    }
  },
  {
    "id": "scene-07-room-night-entry",
    "type": "visual",
    "bg": "assets/bg/quarto-jp-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-07-room-night-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Fiquei invicto no Centro Cultural domingo.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-07-room-night-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Invicto.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-07-room-night-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Amanhã eu tiro a liderança do Rafael no Armory.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left"
    }
  },
  {
    "id": "scene-07-room-night-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Cadê ela?",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left"
    }
  },
  {
    "id": "scene-07-room-night-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tá aqui.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left"
    }
  },
  {
    "id": "scene-07-card-highlight",
    "type": "visual",
    "bg": "assets/bg/quarto-jp-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "objects": [
      {
        "id": "carta-cnc-scene07",
        "src": "assets/objects/command-and-conquer-carta.png",
        "x": 39,
        "y": 18,
        "w": 20,
        "effect": "card-featured",
        "overlayEffect": "card-bottom-sweep"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-07-card-thought-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Rainbow Foil.",
    "bg": "assets/bg/quarto-jp-noite.png"
  },
  {
    "id": "scene-07-card-thought-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Misprint.",
    "bg": "assets/bg/quarto-jp-noite.png"
  },
  {
    "id": "scene-07-card-thought-03",
    "type": "thought",
    "speaker": "JP",
    "text": "Borda superior cortada.",
    "bg": "assets/bg/quarto-jp-noite.png"
  },
  {
    "id": "scene-07-card-thought-04",
    "type": "thought",
    "speaker": "JP",
    "text": "Faixa colorida embaixo.",
    "bg": "assets/bg/quarto-jp-noite.png"
  },
  {
    "id": "scene-07-card-thought-05",
    "type": "thought",
    "speaker": "JP",
    "text": "Linda demais.",
    "bg": "assets/bg/quarto-jp-noite.png"
  },
  {
    "id": "scene-07-room-night-return",
    "type": "visual",
    "bg": "assets/bg/quarto-jp-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-07-room-night-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora sim.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-entry",
    "type": "visual",
    "bg": "assets/bg/quarto-jp-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-descontraido.png",
        "position": "left"
      }
    ],
    "hideDialog": true
  },
  {
    "id": "scene-08-room-deckbox-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Agora chegou a deck box novinha.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ela é muito legal.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-deckbox-insert",
    "type": "visual",
    "bg": "assets/bg/mesa-deckbox-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-08-room-deckbox-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Devia ter comprado antes.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "O Robertinho sempre me encheu o saco por eu usar minha lata de Pokémon amassada.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pô... ela tem um apego afetivo.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Minha vó que me deu.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas não vou falar isso, né?",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-08-room-deckbox-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Aí sim eu viro chacota na loja.",
    "bg": "assets/bg/quarto-jp-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left"
    }
  },
  {
    "id": "scene-09-table-entry",
    "type": "visual",
    "bg": "assets/bg/mesa-deckbox-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-09-table-01",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Bom.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Deck duplamente sleevado.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Deck box nova.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pena que a Command and Conquer não pode usar mini snap.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ia ficar um tijolo no deck.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas protegida ela ia ficar.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-thought-01",
    "type": "thought",
    "speaker": "JP",
    "text": "Amanhã é Armory.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-09-table-thought-02",
    "type": "thought",
    "speaker": "JP",
    "text": "Vamos ver se domingo foi só sorte.",
    "bg": "assets/bg/mesa-deckbox-noite.png"
  },
  {
    "id": "scene-10-timeskip-armory",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "screenText": "QUARTA-FEIRA\nBAZAR DO WEEZING\n19:30",
    "screenTextClass": "screen-text-stack",
    "hideDialog": true
  },
  {
    "id": "scene-11-armory-front-entry",
    "type": "visual",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-11-armory-front-01",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "E aí, JP.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-02",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Hoje sua Ira vai levar uma surra.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ela é a ninja mais teimosa de Rathe.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-11-armory-front-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ela não desiste.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-11-armory-front-05",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Ah, tá.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-06",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "A Dash tá abastecida hoje.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-07",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Vai queimar combustível até o infinito.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Deck roubado é isso aí.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-11-armory-front-09",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Olha quem fala.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-11-armory-front-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Meu deck é honesto.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-11-armory-front-11",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Honesto igual advogado de vilão.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-12-armory-front-01",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "E aí, JP!",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "armory-robert"
    }
  },
  {
    "id": "scene-12-armory-front-02",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "O Mateus já falou que hoje é pra jogar Pummel na tua cara.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "armory-robert"
    }
  },
  {
    "id": "scene-12-armory-front-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Cai fora.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tô bem de boas.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Meu deck tá normal.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Só mudou uma carta.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-07",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Uma carta.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-12-armory-front-08",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Uma carta que aparentemente faz o oponente perder a vontade de viver.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "armory-robert"
    }
  },
  {
    "id": "scene-12-armory-front-09",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Meu Kayo também teve umas alterações.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "armory-mateus"
    }
  },
  {
    "id": "scene-12-armory-front-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, sim.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Comprou um dado novo?",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "armory-jp"
    }
  },
  {
    "id": "scene-12-armory-front-12",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Vai se ferrar.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "armory-mateus"
    }
  },
  {
    "id": "scene-12-armory-front-13",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "E sim, comprei.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "armory-mateus"
    }
  },
  {
    "id": "scene-12-armory-front-14",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Dado novo dá mais dano psicológico.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "armory-robert"
    }
  },
  {
    "id": "scene-12-armory-front-15",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Bora entrar.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-12-armory-front-16",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Já vai começar.",
    "bg": "assets/bg/bazar-weezing-frente-noite.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "armory-camila"
    }
  },
  {
    "id": "scene-13-store-interior-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior-balcao.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true
  },
  {
    "id": "scene-13-store-interior-01",
    "type": "dialogue",
    "speaker": "Isa",
    "text": "Boa noite, JP.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "isa",
      "src": "assets/characters/isa.png",
      "position": "center",
      "effect": "store-isa"
    }
  },
  {
    "id": "scene-13-store-interior-02",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "A gente tava falando de você agora mesmo.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-13-store-interior-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Isso nunca é bom sinal.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-04",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "Relaxa.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-13-store-interior-05",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "Só falei que já vou dar play no Armory.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-13-store-interior-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Fechou.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Já tô pronto.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-08",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Pera.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "store-robert"
    }
  },
  {
    "id": "scene-13-store-interior-09",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Pera aí.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "store-robert"
    }
  },
  {
    "id": "scene-13-store-interior-10",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Até que enfim investiu numa deck box decente.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "store-robert"
    }
  },
  {
    "id": "scene-13-store-interior-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Lá vem.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-12",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "A lata de Pokémon amassada foi aposentada?",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho-falando.png",
      "position": "right",
      "effect": "store-robert"
    }
  },
  {
    "id": "scene-13-store-interior-13",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Foi promovida a item histórico.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-14",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Item histórico nada. Aquilo parecia que tinha sobrevivido a três pré-releases e um atropelamento.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-13-store-interior-15",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Respeita minha lata.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-16",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "A deck box nova é bonita.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-13-store-interior-17",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Obrigado, Camila.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-18",
    "type": "dialogue",
    "speaker": "Robertinho",
    "text": "Traição.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "robertinho",
      "src": "assets/characters/robertinho.png",
      "position": "right",
      "effect": "store-robert"
    }
  },
  {
    "id": "scene-13-store-interior-19",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu tenho bom senso.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-13-store-interior-20",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "Rodada um saiu.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-13-store-interior-21",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pô.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-22",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Caí contra o Mateus.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-13-store-interior-23",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Bora jogar.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-13-store-interior-24",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Hoje eu levo.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-13-store-interior-25",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vai nessa.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-title",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "screenText": "RODADA 1",
    "screenTextClass": "screen-text-stack",
    "hideDialog": true
  },
  {
    "id": "scene-14-round1-table-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-normal.png",
        "position": "left",
        "effect": "store-jp"
      },
      {
        "id": "mateus",
        "src": "assets/characters/mateus.png",
        "position": "right",
        "effect": "store-mateus"
      }
    ]
  },
  {
    "id": "scene-14-round1-01",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Ah, que pé no saco.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-02",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Hoje não veio nada bom.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Eu dei sorte.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-04",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Sorte nada.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-05",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Na verdade teve só uma vez que veio mão boa.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sim.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Eu vi você sofrendo pra não perder o arsenal.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-08",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Muito chato isso.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-09",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "A Camila falou que meu Maxx ia sofrer.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Contra Ira é difícil fazer o robô.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-11",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Eu nem tento.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Então você joga de Maxx pra quê?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-13",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Pra sonhar.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-14",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Justo.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-15",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "O problema é que seu deck não respeita o sonho dos outros.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-14-round1-16",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ira é disciplina.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-14-round1-17",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Ira é bullying de ninja.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-15-between-rounds-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior-balcao.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "characters": [
      {
        "id": "isa",
        "src": "assets/characters/isa.png",
        "position": "center",
        "effect": "store-isa"
      },
      {
        "id": "lucas",
        "src": "assets/characters/lucas.png",
        "position": "right",
        "effect": "store-lucas"
      }
    ]
  },
  {
    "id": "scene-15-between-rounds-01",
    "type": "dialogue",
    "speaker": "Isa",
    "text": "Galera, rodada dois!",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "isa",
      "src": "assets/characters/isa.png",
      "position": "center",
      "effect": "store-isa"
    }
  },
  {
    "id": "scene-15-between-rounds-02",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "Confiram o pareamento.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-15-between-rounds-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Que droga.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-15-between-rounds-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Caí com o Gabriel.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-15-between-rounds-05",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "E aí, JP.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-15-between-rounds-06",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Bora jogar?",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-15-between-rounds-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Bora.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-15-between-rounds-08",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Mas já aviso.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-15-between-rounds-09",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Se essa Command vier no momento perfeito, eu vou reclamar.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-15-between-rounds-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Você sempre reclama.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-15-between-rounds-11",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Sim.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-15-between-rounds-12",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Mas hoje vai ser com fundamento.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-title",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "screenText": "RODADA 2",
    "screenTextClass": "screen-text-stack"
  },
  {
    "id": "scene-16-round2-table-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-normal.png",
        "position": "left",
        "effect": "store-jp"
      },
      {
        "id": "gabriel",
        "src": "assets/characters/gabriel.png",
        "position": "right",
        "effect": "store-gabriel"
      }
    ]
  },
  {
    "id": "scene-16-round2-01",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Já era chato lidar com Censor.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-02",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Agora mais essa.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Você fala como se a Hala fosse tranquila.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-04",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Ela é uma guerreira de boas.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sim.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Só a tutora da Dorinthea.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-07",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Mas não é a Dori.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-08",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Se fosse a Dori, era outro jogo.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-09",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Toda vez que um warrior fala isso, alguém perde metade da vida do nada.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-10",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Isso é preconceito contra guerreiras disciplinadas.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Disciplinadas?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vocês jogam carta, compram carta, batem de novo e ainda acham que foram honestos.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-13",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "E você joga ninja com Command and Conquer.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-14",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Sua moral está em recurso flutuante.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-15",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tá, essa foi boa.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-16",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Mas falando sério...",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-17",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Essa carta veio de novo?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-18",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Veio.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-16-round2-19",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Claro que veio.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-16-round2-20",
    "type": "dialogue",
    "speaker": "Gabriel",
    "text": "Ela gosta de palco.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "gabriel",
      "src": "assets/characters/gabriel-falando.png",
      "position": "right",
      "effect": "store-gabriel"
    }
  },
  {
    "id": "scene-17-final-pairing-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior-balcao.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "characters": [
      {
        "id": "isa",
        "src": "assets/characters/isa.png",
        "position": "center",
        "effect": "store-isa"
      },
      {
        "id": "lucas",
        "src": "assets/characters/lucas.png",
        "position": "right",
        "effect": "store-lucas"
      }
    ]
  },
  {
    "id": "scene-17-final-pairing-01",
    "type": "dialogue",
    "speaker": "Isa",
    "text": "Galera, deu o tempo.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "isa",
      "src": "assets/characters/isa.png",
      "position": "center",
      "effect": "store-isa"
    }
  },
  {
    "id": "scene-17-final-pairing-02",
    "type": "dialogue",
    "speaker": "Lucas",
    "text": "Rodada três!",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "lucas",
      "src": "assets/characters/lucas.png",
      "position": "right",
      "effect": "store-lucas"
    }
  },
  {
    "id": "scene-17-final-pairing-03",
    "type": "dialogue",
    "speaker": "JP",
    "text": "É.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-04",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Caí contra o Rafael.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sabia.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-normal.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-06",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Bora, JP.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-17-final-pairing-07",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Hoje minha horda de defunto vai afogar você.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-17-final-pairing-08",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Só se conseguir acordar eles.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-09",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Tá abusadinho.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-17-final-pairing-10",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Rafa, por favor, ganha dele.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-17-final-pairing-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Nossa.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Que apoio bonito.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-17-final-pairing-13",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu gosto de equilíbrio no ambiente.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-17-final-pairing-14",
    "type": "dialogue",
    "speaker": "Mateus",
    "text": "Tradução: ela não quer ouvir o JP falando de Ira invicta a semana inteira.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "mateus",
      "src": "assets/characters/mateus-falando.png",
      "position": "right",
      "effect": "store-mateus"
    }
  },
  {
    "id": "scene-17-final-pairing-15",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Exatamente.",
    "bg": "assets/bg/loja-interior-balcao.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-18-round3-title",
    "type": "visual",
    "bg": "assets/bg/preto.webp",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "screenText": "RODADA 3",
    "screenTextClass": "screen-text-stack"
  },
  {
    "id": "scene-18-round3-table-entry",
    "type": "visual",
    "bg": "assets/bg/loja-interior.png",
    "clearCharacters": true,
    "clearObjects": true,
    "clearEffects": true,
    "hideDialog": true,
    "characters": [
      {
        "id": "jp",
        "src": "assets/characters/jp-normal.png",
        "position": "left",
        "effect": "store-jp"
      },
      {
        "id": "rafael",
        "src": "assets/characters/rafael.png",
        "position": "right",
        "effect": "store-rafael"
      },
      {
        "id": "camila",
        "src": "assets/characters/camila.png",
        "position": "center",
        "effect": "store-camila"
      }
    ]
  },
  {
    "id": "scene-18-round3-01",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Que deckzinho safado esse.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-02",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Ah, o maluco só blocando querendo me fadigar, e a Ira que é safada?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-03",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Cara, não sei.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-04",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Essa porcaria de carta vem muito na hora certa pra você.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-05",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Concordo.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-06",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Vem mesmo.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-07",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Essa semana chegam as outras duas.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-08",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Puxa.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-09",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Achou as outras?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-10",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Sim.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-11",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Paguei valor de mercado.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-12",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Mas acho que vai valer a pena.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-descontraido-falando.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-13",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Vou trombar com o Valdir e falar pra entregar essa encomenda em casa.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-14",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Cai fora.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-15",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Tinha que ensinar o Valdir a jogar.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-16",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Nada.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-17",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Se ensinar, aí sim as cartas vão se perder nos Correios.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-18",
    "type": "dialogue",
    "speaker": "JP",
    "text": "Pior que ele ia ser o tipo de jogador que reclama do deck e compra carta escondido.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-19",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Então ele já é do grupo.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-20",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "E aí, Rafa?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-18-round3-21",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Conseguiu derrotar a ninja sombria?",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  },
  {
    "id": "scene-18-round3-22",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Que nada.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-23",
    "type": "dialogue",
    "speaker": "Rafael",
    "text": "Esse deck tá osso.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "rafael",
      "src": "assets/characters/rafael-falando.png",
      "position": "right",
      "effect": "store-rafael"
    }
  },
  {
    "id": "scene-18-round3-24",
    "type": "dialogue",
    "speaker": "JP",
    "text": "A ninja sombria agradece.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "jp",
      "src": "assets/characters/jp-rindo.png",
      "position": "left",
      "effect": "store-jp"
    }
  },
  {
    "id": "scene-18-round3-25",
    "type": "dialogue",
    "speaker": "Camila",
    "text": "Eu não agradeço.",
    "bg": "assets/bg/loja-interior.png",
    "character": {
      "id": "camila",
      "src": "assets/characters/camila.png",
      "position": "center",
      "effect": "store-camila"
    }
  }
];
