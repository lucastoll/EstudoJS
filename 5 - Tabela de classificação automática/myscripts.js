// <button id="botaoremover" style="width: 170px; font-size: 30px;" onClick="remover(jo)">Remover</button>

document.getElementById("inputnome").value = "Limas";
document.getElementById("inputfoto").value =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKunKXk6zzcXaag3gLG5Lk8YUJZSdrDpxwRA&usqp=CAU";

var Lucas = {
  nome: "Lucas",
  vitorias: 2,
  empates: 1,
  derrotas: 3,
  pontos: 0,
  foto: "https://avatars.githubusercontent.com/u/86172649?v=4"
};
var Rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 0,
  derrotas: 3,
  pontos: 0,
  foto:
    "https://yt3.ggpht.com/3mP1Ica4tOxQXrb5vxfyja5P7grAdOCzjaxHOVGMWhFBw9dKQtAKimlhrXizP7nbZndFsBviQA=s88-c-k-c0x00ffffff-no-rj"
};

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

Lucas.pontos = calculaPontos(Lucas);
Rafa.pontos = calculaPontos(Rafa);

var jogadores = [Lucas, Rafa];

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += `<td>${jogadores[i].nome}<br><img src=${jogadores[i].foto}></td>`;
    elemento += `<td>${jogadores[i].vitorias}</td>`;
    elemento += `<td>${jogadores[i].empates}</td>`;
    elemento += `<td>${jogadores[i].derrotas}</td>`;
    elemento += `<td>${jogadores[i].pontos}</td>`;
    elemento += `<td><button id="vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>`;
    elemento += `<td><button id="empate" onClick="adicionarEmpate(${i})">Empate</button></td>`;
    elemento += `<td><button id="derrota" onClick="adicionarDerrota(${i})">Derrota</button></td>`;
    elemento += `</tr>`;
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function reset(jogadores) {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
    exibeJogadoresNaTela(jogadores);
  }
}

function Inserir(jogadores) {
  var nome = document.getElementById("inputnome").value;
  var foto = document.getElementById("inputfoto").value;
  var jogador = {
    foto: foto,
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(jogador);
  exibeJogadoresNaTela(jogadores);

  document.getElementById("inputnome").value = "";
  document.getElementById("inputfoto").value = "";
}
