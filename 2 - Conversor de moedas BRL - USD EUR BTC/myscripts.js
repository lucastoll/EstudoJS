function Converter() {
    var moeda = document.getElementById("tipomoeda").value;
  
    if (moeda === "USD") {
      var ValorElemento =
        "O valor convertido em dólar é = " +
        parseFloat(document.getElementById("valor").value / 5.24).toFixed(2) +
        " USD";
  
      document.getElementById("valorConvertido").innerHTML = ValorElemento;
    } else if (moeda === "EUR") {
      var ValorElemento =
        "O valor convertido em euros é = " +
        parseFloat(document.getElementById("valor").value / 6.19).toFixed(2) +
        " EUR";
  
      document.getElementById("valorConvertido").innerHTML = ValorElemento;
    } else {
      var ValorElemento =
        "O valor convertido em bitcoin é = " +
        parseFloat(document.getElementById("valor").value * 0.0000041) +
        " BTC";
  
      document.getElementById("valorConvertido").innerHTML = ValorElemento;
    }
  }
  