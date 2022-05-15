const vetor = [1, 2, 3, 4, 5, 6];

const palavra = vetor.reduce((acc, num) => {
    return acc += num;
}, "");

console.log(`O vetor transformado em string é: ${palavra}`);
