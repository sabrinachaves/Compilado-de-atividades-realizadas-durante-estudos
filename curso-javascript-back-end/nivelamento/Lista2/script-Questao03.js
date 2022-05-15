let palavra;
let letra;
let novaPalavra = "";

palavra = prompt("Digite uma palavra: ");

while(!isNaN(parseInt(palavra))){
    palavra = prompt("Você não deve digitar números. Digite uma palavra:");
}

letra = prompt("Digite a letra que gostaria de alterar para maiúscula:");

while(!isNaN(parseInt(letra)) || letra.length > 1){
    letra = prompt("Você digitou caracteres inválidos. Digite uma letra:");
}


function turnUpperCase(p, l){

    for(let i=0; i < p.length; i++){
        if(p[i] == l){
            novaPalavra+=p[i].toUpperCase();
        }else{
            novaPalavra+=p[i];
        }
    }
    return novaPalavra;
}

console.log(`A palavra com a letra "${letra}" em maiúsculo ficou assim: ${turnUpperCase(palavra, letra)}`);








