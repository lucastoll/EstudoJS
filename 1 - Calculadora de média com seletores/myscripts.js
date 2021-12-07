function calc() {
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var n3 = parseInt(document.getElementById('n3').value);
    var n4 = parseInt(document.getElementById('n4').value);

    n5 = (n1 + n2 + n3 + n4) / 4
    if (n5 >= 5) {
        document.getElementById('resultado').value = "Média final = " + n5 + ", Aluno aprovado!"
    } else {
        document.getElementById('resultado').value = "Média final = " + n5 + ", Aluno reprovado!"
    }
}


