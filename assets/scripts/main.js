let tempo = new Number();
tempo = 300;

function startCountdown() {
  sessao = document.getElementById("sessao");

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
    setTimeout("startCountdown()", 1000);
  } else {
    sessao.innerHTML = "Acabou o tempo!";
  }
}

startCountdown();
