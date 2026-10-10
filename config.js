const APP_CONFIG = {
  appName: "Our Little World ♡",
  names: {
    hero: "Jones",
    heroine: "Cami",
    duo: "Jones & Cami",
    title: "Para a Cami"
  },
  story: {
    summary: "Amizade que virou afeto, proximidade que virou amor, e hoje um casal feliz vivendo o seu próprio mundo."
  },
  mood: {
    day: {
      sky: "linear-gradient(180deg, #9fe2ff 0%, #cfefff 30%, #f5d795 100%)",
      sun: "#ffd166"
    },
    dusk: {
      sky: "linear-gradient(180deg, #ffb88c 0%, #ffc971 25%, #a16aec 100%)",
      sun: "#ff8e5f"
    },
    night: {
      sky: "linear-gradient(180deg, #020817 0%, #111827 35%, #1d2432 100%)",
      sun: "#d7d9ef"
    }
  },
  achievements: [
    {
      id: "friendship-start",
      title: "A amizade começou no jogo",
      description: "Tudo começou por uma conversa leve e uma conexão que não sabia que viraria amor.",
      icon: "🎮"
    },
    {
      id: "returning-home",
      title: "Retorno e reencontro",
      description: "Depois do reencontro, a proximidade ganhou cor e a história ganhou raízes.",
      icon: "💫"
    },
    {
      id: "declaration",
      title: "Confissão e coração revelado",
      description: "Quando a verdade saiu, o amor ganhou a coragem de ser vivido.",
      icon: "💖"
    },
    {
      id: "love-story",
      title: "Casal feliz",
      description: "Hoje vocês são duas almas felizes vivendo um amor profundo e brilhante.",
      icon: "🏡"
    },
    {
      id: "mine-diamond",
      title: "O Diamante do Amor",
      description: "Uma descoberta rara: o tesouro mais belo foi você.",
      icon: "💎"
    },
    {
      id: "hidden-bunny",
      title: "Coelho Lendário",
      description: "Um segredo fofinho no santuário dos coelhinhos foi encontrado.",
      icon: "🐰"
    }
  ],
  inventory: [
    { id: "apple", name: "Maçã Dourada", icon: "🍏" },
    { id: "carrot", name: "Cenoura Pixelada", icon: "🥕" },
    { id: "heart", name: "Coração de Amor", icon: "💗" },
    { id: "diamond", name: "Diamante Lendário", icon: "💎" }
  ],
  mineBlocks: [
    { id: "dirt", name: "Terra", icon: "🟫" },
    { id: "stone", name: "Pedra", icon: "🪨" },
    { id: "iron", name: "Ferro", icon: "⚙️" },
    { id: "gold", name: "Ouro", icon: "🟡" },
    { id: "redstone", name: "Redstone", icon: "🔴" },
    { id: "lapis", name: "Lápis-Lazúli", icon: "🔵" },
    { id: "netherite", name: "Netherite", icon: "🖤" },
    { id: "diamond", name: "Diamante Lendário", icon: "💎" }
  ],
  rabbits: [
    { id: 1, name: "Dorminhoco", emoji: "🐇", trait: "Ama cochilar no sol e te acompanhar em silêncio." },
    { id: 2, name: "Orelhudo", emoji: "🐰", trait: "Fica atento a tudo, mas sempre te olha com ternura." },
    { id: 3, name: "Guloso", emoji: "🐣", trait: "Vai até a cenoura mais bonita do mundo sem hesitar." },
    { id: 4, name: "Carinhoso", emoji: "🐇", trait: "Pula e espalha corações quando sente amor no ar." }
  ],
  investigationNotes: [
    "Primeiro capítulo: o encontro foi simples, mas a conexão foi instantânea.",
    "Segundo capítulo: o retorno dela trouxe mais calor, mais confiança e mais ternura.",
    "Terceiro capítulo: a verdade saiu como uma luz. Ela gostava de você, e você já amava.",
    "Conclusão: o que nasceu com amizade hoje é um amor bonito, genuíno e real."
  ],
  puzzles: [
    { question: "Qual palavra melhor descreve o começo de tudo?", answer: "Amizade" },
    { question: "O que nasceu depois do retorno dela?", answer: "Proximidade" },
    { question: "Qual foi a grande revelação?", answer: "Que ela gostava de você" },
    { question: "Qual é o destino dessa história?", answer: "Casal feliz" }
  ],
  flowers: [
    { name: "Flor da manhã", message: "Você ilumina meus dias com a calma do seu sorriso." },
    { name: "Flor do reencontro", message: "O amor não precisa de pressa; ele floresce quando o coração reconhece o que é verdadeiro." },
    { name: "Flor do brilho", message: "Você é como uma luz que faz tudo parecer mais bonito." },
    { name: "Flor do destino", message: "Nosso mundo é mais lindo porque você está nele." }
  ],
  letter: {
    title: "Para a minha Cami",
    paragraphs: [
      "Cami, se eu pudesse resumir tudo em uma frase, seria que o amor que a gente construiu nasceu de uma amizade que parecia simples, mas era forte, bonita e verdadeira.",
      "Quando você voltou, a vida ganhou mais brilho e o meu coração começou a perceber que era mais do que um carinho antigo; era algo profundo, paciente e lindo.",
      "E então você me mostrou uma verdade tão delicada quanto preciosa: que o que a gente tinha também era um sentimento que florescia em silêncio e em intensidade.",
      "Hoje, olhando para a nossa história, eu só consigo sorrir. Porque o que a gente vive é real, é bonito, é nosso, e é tão cheio de afeto que parece um mundo pequeno feito por nós dois.",
      "Te amar é reconhecer que a vida foi mais gentil do que eu imaginava. E te ter ao meu lado é a melhor parte dessa história.",
      "Eu te amo, Cami. E quero levar você em cada detalhe do meu olhar, em cada sonho, em cada dia."
    ],
    signature: "Jones"
  },
  world: {
    sceneName: "Our Little World",
    palette: {
      accent: "#ff7cbf",
      secondary: "#7c8cff",
      deep: "#0f172a",
      light: "#f7f4ff",
      warm: "#f7d06b"
    }
  }
};

const SOUND_BANK = {
  click: [220, 330],
  success: [392, 523, 659],
  achievement: [440, 554, 659],
  mine: [110, 90, 70],
  heart: [523, 659, 784]
};

window.APP_CONFIG = APP_CONFIG;
window.SOUND_BANK = SOUND_BANK;
