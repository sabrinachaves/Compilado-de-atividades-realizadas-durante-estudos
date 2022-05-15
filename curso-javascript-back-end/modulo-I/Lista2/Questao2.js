const somar = (num1, num2) => {
    return num1 + num2;
}

const calcularMedia = (num1, num2) => {
    return somar(num1, num2) / 2;
}

const subtrair = (num1, num2) => {
    return num1 - num2;
}

const multiplicar = (num1, num2) => {
    return num1 * num2;
}

const dividir = (num1, num2) => {
    return num1 / num2;
}

const realizarOperacao = (x, y, fn) => {
    return fn(x, y);
}

console.log(`O resultado da soma é: ${realizarOperacao(2, 2, somar)}`);

console.log(`O resultado da média é: ${realizarOperacao(2, 2, calcularMedia)}`);

console.log(`O resultado da subtração é: ${realizarOperacao(2, 2, subtrair)}`);

console.log(`O resultado da multiplicação é: ${realizarOperacao(2, 2, multiplicar)}`);

console.log(`O resultado da divisão é: ${realizarOperacao(2, 2, dividir)}`);

