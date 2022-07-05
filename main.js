const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
  "Eu se fosse você, não faria isso.",
  "Concerteza não!.",
];

// clicar em fazer pergunta
function fazerPergunta() {
  let caracterPergunta = inputPergunta.value;
  if (inputPergunta.value == "" || caracterPergunta.length < 7) {
    alert("Digite sua pergunta.");
    location.reload();
    return;
  }

  buttonPerguntar.setAttribute("disabled", true);

  const pergunta = "<div>" + inputPergunta.value + "</div>";

  // gerar numero aletorio
  const totalRespostas = respostas.length;
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  //   console.log(respostas[numeroAleatorio]);
  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
  elementoResposta.style.opacity = 1;

  //sumir respostas após 3 segundos
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
  }, 3000);
  setTimeout(function () {
    location.reload(1);
  }, 4000);
}
