var secret = parseInt(Math.random() * 11);
var vidasvisual = document.getElementById("vidas");
var vidas = reiniciar();

if (vidas == 3) {
  vidasvisual.innerHTML = "Vidas = " + "\u2764" + "\u2764" + "\u2764";
}

function Chutar() {
  var visual = document.getElementById("resultado");
  var visual2 = document.getElementById("resultado1");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == secret) {
    if (chute == 10) {
      visual.innerHTML =
        "Você acertou! resposta ==" +
        "\u0031\uFE0F\u20E3" +
        "\u0030\uFE0F\u20E3";
    } else if (chute == 9) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0039\uFE0F\u20E3";
    } else if (chute == 8) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0038\uFE0F\u20E3";
    } else if (chute == 7) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0037\uFE0F\u20E3";
    } else if (chute == 6) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0036\uFE0F\u20E3";
    } else if (chute == 5) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0035\uFE0F\u20E3";
    } else if (chute == 4) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0034\uFE0F\u20E3";
    } else if (chute == 3) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0033\uFE0F\u20E3";
    } else if (chute == 2) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0032\uFE0F\u20E3";
    } else if (chute == 1) {
      visual.innerHTML = "Você acertou! resposta == " + "\u0031\uFE0F\u20E3";
    } else {
      visual.innerHTML = "Você acertou! resposta == " + "\u0030\uFE0F\u20E3";
    }
    vidas = reiniciar();
  } //fim (if chute == secreto)
  else if (chute > 10 || chute < 0) {
    visual.innerHTML = "Você errou! número não está no intervalo de 0 a 10";
    vidas = vidas - 1;
  } else if (chute < secret) {
    visual.innerHTML = "Você errou! (número secreto > numero chutado)";
    vidas = vidas - 1;
  } else if (chute > secret) {
    visual.innerHTML = "Você errou! (número secreto < numero chutado)";
    vidas = vidas - 1;
  } else if (chute === NaN) {
    visual.innerHTML = "Você errou! número chutado = nulo";
  }

  if (vidas == 3) {
    vidasvisual.innerHTML = "Vidas = " + "\u2764" + "\u2764" + "\u2764";
  } else if (vidas == 2) {
    vidasvisual.innerHTML = "Vidas = " + "\u2764" + "\u2764";
    visual2.innerHTML = "";
  } else if (vidas == 1) {
    vidasvisual.innerHTML = "Vidas = " + "\u2764";
    visual2.innerHTML = "";
  } else if (vidas == 0) {
    vidasvisual.innerHTML = "Vidas = " + "\u2620";
    visual2.innerHTML = "Recomeçando jogo :3";
    vidas = reiniciar();
  }
}

function reiniciar() {
  var visual2 = document.getElementById("resultado1");
  secret = parseInt(Math.random() * 11);
  visual2.innerHTML = "começando jogo :3";
  return 3;
}
