let palavra;

palavra = prompt("Digite uma palavra para que ela apareça ao contrário:");

while(!isNaN(parseInt(palavra))){
    palavra = prompt("Você digitou caracteres inválidos. Digite uma palavra para que ela apareça ao contrário:");
}

function inverter(x){
    let arr = [];
    let novaPalavra = "";

    for(let i = 0; i < x.length; i++){
        arr.unshift(x[i]);
    }
    for(let i = 0; i < arr.length; i++){
        novaPalavra += arr[i];
    }
    return novaPalavra;
}

console.log(inverter(palavra));

