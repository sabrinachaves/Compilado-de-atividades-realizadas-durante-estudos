let valorDaCompra;
let valorDaVenda;
 valorDaCompra = parseFloat(prompt("Digite o valor do produto: "));

 while(isNaN(valorDaCompra)){
     valorDaCompra = parseFloat(prompt("Você digitou um valor inválido. Digite o valor do produto: "))
 }

if  (valorDaCompra < 20){
    valorDaVenda = valorDaCompra * 1.45;
}else{
    valorDaVenda = valorDaCompra * 1.30;
}

console.log("O valor da venda deverá ser R$ ", valorDaVenda);