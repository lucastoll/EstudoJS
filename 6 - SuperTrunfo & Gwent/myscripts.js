var listacartas = [{
  foto: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/geralt-sword-the-witcher-phong-nguyen.jpg",
  nome: "Geralt",
  atributos: {
  Ataque: 9,
  Defesa: 8,
  Magia: 6
  } //atributos
} //personagem
, 
{
  foto: "https://i.pinimg.com/originals/2c/98/9f/2c989f1a666ee3870b3ba1f2fa7a0461.jpg",
  nome: "Yennefer",
  atributos: {
  Ataque: 4,
  Defesa: 6,
  Magia: 9
  } //atributos
}
,
{
  foto: "https://cdna.artstation.com/p/assets/images/images/000/968/766/large/marek-madej-eredin-by-marek-madej.jpg?1443928557&dl=1",
  nome: "Eredin",
  atributos: {
  Ataque: 7,
  Defesa: 9,
  Magia: 7,
  } //atributos
}
,
{
  foto: "http://pm1.narvii.com/6548/6731c622ea060e693bdec180df3f69f7b2b8a8ef_00.jpg",
  nome: "Gaunter",
  atributos: {
  Ataque: 2,
  Defesa: 8,
  Magia: 10,
  } //atributos
}
,
{
  foto: "https://64.media.tumblr.com/bba3c7e781561c7493deee30b277e59c/tumblr_obd9dyPKKE1t7b5qro1_1280.jpg",
  nome: "Ciri",
  atributos: {
  Ataque: 10,
  Defesa: 6,
  Magia: 6,
  } //atributos
}
] //fim cards

var tabelacards =  document.getElementById("tabelaJogadores");
var cardbot = parseInt(Math.random() * 3);
var cardplayer = parseInt(Math.random() * 3);
var vitorias = 0;
var derrotas = 0;
var cards = listacartas[1].atributos.ataque;
var lastcard = "";

var x = "";


var placar = document.getElementById("placar");
var y = "Placar" + "<br>" + "Player: " + vitorias + "   | Bot: " + derrotas;
placar.innerHTML = y;


for(var carta in listacartas) {
  x += "<td>" + "<img class='card' src=" + listacartas[carta].foto + ">" + "<br>" +  "<div class='textocard'>" +
    "Nome: " + listacartas[carta].nome + "<br>" +
    /*
    "Ataque: " + listacartas[carta].atributos.Ataque + "<br>" +
    "Defesa: " + listacartas[carta].atributos.Defesa + "<br>" +
    "Magia: " + listacartas[carta].atributos.Magia  + "<br>" 
    */ 
     "</div>" + "</td>";
  tabelacards.innerHTML = x;
}

function sortearCarta() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  
while (cardplayer == cardbot || cardplayer == lastcard) {
  cardplayer = parseInt(Math.random() * 3);
  }
  exibirOpcoes(cardplayer);
}


function exibirOpcoes(cardplayer) {
  var opcoes = document.getElementById("opcoes");
  var opcoesconteudo = "";
  var contador = 0;
  
  for(var att in listacartas[1].atributos) {
    if (contador==1){
      opcoesconteudo += 
      "<input class='checkbox' checked='checked' type='radio' name='atributo' value='" + att  + "'>" + att + "   ";
    }
    else{
      opcoesconteudo += 
      "<input class='checkbox' type='radio' name='atributo' value='" + att + "'>" + att + "   ";
    }
    contador++;
  }
  var cardplayernome = listacartas[cardplayer].nome;
  opcoes.innerHTML = "Carta: " + cardplayernome + "<br>" + opcoesconteudo;
}


function obteratributocheck() {
  var radioAtributos = document.getElementsByName("atributo");
  
  for(var i = 0; i < radioAtributos.length; i++) {
    if(radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    } //if
  } //for 
} //function


function jogar() {
  var attselecionado = obteratributocheck();
  var valorcartajogador = listacartas[cardplayer].atributos[attselecionado];
  var valorcartabot = listacartas[cardbot].atributos[attselecionado];
  var printar = document.getElementById("resultado");
  var x = "";
    

  x = "<div class='textoresultado'>" +  "Card do jogador: " + listacartas[cardplayer].nome + " | " + attselecionado + " = " +              valorcartajogador + '<br>' +'Card do bot: ' + listacartas[cardbot].nome + " | " + attselecionado + " = "  + valorcartabot + "</div>";
 
  printar.innerHTML = x;
  
  if (valorcartajogador > valorcartabot){
    printar.innerHTML += "<div class='textoresultado'>" + '<br>' + 'Você ganhou!!'+ "</div>";
    vitorias++;
  }
  else if(valorcartajogador == valorcartabot){
    printar.innerHTML += "<div class='textoresultado'>" + '<br>' + "Empate!" + "</div>"
  }
  else{
    printar.innerHTML += "<div class='textoresultado'>" + '<br>' + 'Você perdeu ;0' + "</div>";
    derrotas++;
  }
  //reinicio do game
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  lastcard = cardplayer;
  cardbot = parseInt(Math.random() * 3);
  cardplayer = parseInt(Math.random() * 3);
  y = "Placar" + "<br>" + "Player: " + vitorias + "   | Bot: " + derrotas;
  placar.innerHTML = y;
} //function jogar