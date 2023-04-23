const sessao = document.getElementById("sessao");
const botaoIniciar = document.getElementById("iniciar");
let tempo = 300;

function startCountdown() {
  if (tempo - 1 >= 0) {
    let min = parseInt(tempo / 60);
    let seg = tempo % 60;

    if (min <= 9) {
      min = `0${min}`;
    }
    if (seg <= 9) {
      seg = `0${seg}`;
    }

    horaImprimivel = `${min}:${seg}`;
    sessao.innerHTML = horaImprimivel;

    tempo--;
    setTimeout(`{startCountdown(${tempo})}`, 1000);
  } else {
    sessao.innerHTML = "Acabou o tempo!";
  }
}

botaoIniciar.addEventListener("click", startCountdown);
