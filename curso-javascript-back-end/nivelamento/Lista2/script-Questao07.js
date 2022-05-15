let listaFrutas = [];
let carrinhoDeCompras = [];

for(let i=0; i < 5; i++){
    listaFrutas[i] = prompt(`Digite o nome da ${i+1}ª fruta:`);
    while(!isNaN(parseInt(listaFrutas[i]))){
        listaFrutas[i] = prompt(`Você digitou caracteres inválidos. Digite o nome da ${i+1}ª fruta:`);
    }
}

function carrinho(arr){
    for(let i=0; i < arr.length; i++){
        carrinhoDeCompras.push(arr[i]);
    }
    return carrinhoDeCompras;
}

console.log(`O carrinho de compras ficou assim:`)
console.log(carrinho(listaFrutas));
