// Use o reduce para obter o maior valor do array 

const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];

const maiorValor = movimentacao.reduce((acc, valor) => {
    if(valor > acc)
        acc = valor;
    return acc;
}, -Infinity);

console.log(maiorValor);

