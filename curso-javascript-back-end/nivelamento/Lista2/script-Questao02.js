let numeros = [];
let quantidade;
let i = 0;
let newArray = [];
let j = 0;

quantidade = parseInt(prompt("Digite a quantidade de números desejados na lista:"));

while (isNaN(quantidade)) {
    quantidade = parseInt(prompt("Você digitou caracteres inválidos. Digite a quantidade de números desejados na lista:"))
}

while (i < quantidade) {
    numeros[i] = parseFloat(prompt(`Digite o ${i + 1}º número da lista:`));

    while (isNaN(numeros[i])) {
        numeros[i] = parseFloat(prompt(`Você digitou caracteres inválidos. Digite o ${i + 1}º número da lista:`));
    }

    i++;
}

i = 0;

function pares(arr) {
    while (i < quantidade) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i]);
        }
        i++;
    }
    return newArray;
}

console.log(`O array somente com números pares é`);
console.log(pares(numeros));
