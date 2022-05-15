const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const somaDiagonal = matrix.reduce((acc, valorAtual, i) => {
        return acc += parseInt(valorAtual.filter((numero, j) => {
            if (i == j)
                return numero;
        }));
    }, 0);

console.log(somaDiagonal);