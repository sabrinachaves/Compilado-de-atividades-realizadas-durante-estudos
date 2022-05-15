let listaNum = [];
let quantidade;
let resultado = 1;

quantidade = parseInt(prompt("Digite a quantidade de números a serem inseridos na lista: "));

while(isNaN(quantidade)){
    quantidade = parseInt(prompt("Você digitou caracteres inválidos. Digite a quantidade de números a serem inseridos na lista: "));
}

for(let i=0; i < quantidade; i++){
    listaNum[i] = parseFloat(prompt(`Digite o ${i+1}º elemento da lista:`));
    while(isNaN(listaNum[i])){
        listaNum[i] = parseFloat(prompt(`Você digitou caracteres inválidos. Digite o ${i+1}º elemento da lista:`));
    } 
}

function multiplicar(arr){
    for(let i=0; i < arr.length; i++){
        resultado*=arr[i];
    }
    return resultado;
}

console.log(`O resultado da multiplicação dos números da lista é: ${multiplicar(listaNum)}`);