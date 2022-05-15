let palavra;
let letra1;
let letra2;
let novaPalavra = "";

palavra = prompt("Digite uma palavra: ");

while(!isNaN(parseInt(palavra))){
    palavra = prompt("Você não deve digitar números. Digite uma palavra:");
}

letra1 = prompt("Digite a letra que gostaria de alterar:");

while(!isNaN(parseInt(letra1)) || letra1.length > 1){
    letra1 = prompt("Você digitou caracteres inválidos. Digite a letra que gostaria de alterar:");
}

letra2 = prompt("Digite a letra para substituir a que deverá ser alterada:");

while(!isNaN(parseInt(letra2)) || letra2.length > 1){
    letra2 = prompt("Você digitou caracteres inválidos. Digite a letra para substituir a que deverá ser alterada:");
}


function replaceStr(p, l1, l2){

    for(let i=0; i < p.length; i++){
        if(p[i] == l1){
            novaPalavra+=l2;
        }else{
            novaPalavra+=p[i];
        }
    }
    return novaPalavra;
}

console.log(`A palavra com a letra "${letra1}" substituida pela letra "${letra2}" ficou assim: ${replaceStr(palavra, letra1, letra2)}`);








