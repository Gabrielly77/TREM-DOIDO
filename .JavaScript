alert("Bem vindo(a)! Tripulante!");

function ConverterDistancia() {
  var valor = parseFloat(document.getElementById("valorkm").value);
  var valorConvertido = (valor * 0.0000000000001057).toFixed(9);
  var txtoValorConvertido = (document.getElementById(
    "valorConvertidoDistancia"
  ).innerHTML =
    "Olá, tripulante! A distância da nave até o ponto escolhido é de:  " +
    valorConvertido +
    " Aperte bem os cintos e boa viagem!");
}
