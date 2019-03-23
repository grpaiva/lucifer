const configs = {
  lang: 'en-US',
  triggerKey: ';',
  textResponse: false,
  voiceResponse: true,
};

var copy = [];
var praises = [];
var noPraiseMessages = [];
var escapeMessages = {};

switch (configs.lang) {

  case 'en-US':

    copy.appName = "Beelzebub";
    copy.subtitle = "Ask me anything";
    copy.submitButton = "Feeling lucky?";
    copy.muted = "For the brave, hit [ return ]";
    copy.inputPlaceholder = "Praise first, ask later...";

    praises.push(
      "Almighty lord of darkness",
      "Great master of the universe",
      "Unmeasurable world's wisdom",
      "Oh supreme force of the evil"
    );

    noPraiseMessages.push(
      "You are kidding me, right?",
      "I don't know what you're talking about",
      "What?",
      "Don't talk to me",
      "I will curse you for ever"
    );

    escapeMessages.future = [
      "I can not forecast the future, baby",
      "This hasn't happened yet",
      "Who knows..."
    ];

    escapeMessages.joke = [
      "LOL",
      "You're not serious",
      "Asshole!"
    ];

    break;
  
  // default is pt-BR
  default:

    copy.appName = "Lucifer";
    copy.subtitle = "Pergunte ao oráculo";
    copy.submitButton = "Tente a sorte";
    copy.muted = "Ou, se for corajoso, aperte [ enter ]";
    copy.inputPlaceholder = "Primeiro um elogio, depois a pergunta...";

    praises.push(
      "Poderoso chefão das trevas",
      "Grande conhecedor de todo universo",
      "Supremo oráculo do mundo",
      "Grande sabedoria e imensidão dos mundos",
      "Ó força suprema do mal"
    );

    noPraiseMessages.push(
      "Vai brincando, vai",
      "Não sei do que você está falando",
      "Ahn?",
      "Não dirija a palavra à mim",
      "Vou amaldiçoá-lo eternamente!",
      "Não vai me elogiar não?",
      "Sem elogio não respondo"
    );

    escapeMessages.future = [
      "Não consigo prever o futuro",
      "Isso ainda não aconteceu!",
      "Como você espera que eu saiba isso?",
      "Vai saber...",
      "Não sei!"
    ];

    escapeMessages.joke = [
      "Você está de brincadeira comigo, né?",
      "Ta de palhaçada?",
      "Você é um fanfarrão!",
      "Babaca."
    ];

    break;
}