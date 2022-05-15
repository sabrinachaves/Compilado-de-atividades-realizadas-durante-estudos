let number;
let finalNumber = 0;
let contador = 1;

number = parseInt(prompt("Digite um número inteiro acima de 50:"));

while (isNaN(number) || number <= 50) {
    number = parseInt(prompt("Você digitou caracteres inválidos. Digite um número acima de 50:"));
}


function soma(num){
    while (contador < num) {
        finalNumber = finalNumber + contador;
        contador++;
    }
    return finalNumber;
}

console.log(`A soma dos números entre 0 e ${number} é ${soma(number)}`);
