const vetor = [5, 3, 2, 1, 8, 9, 10];

const pares = vetor.filter((num) => {
    if (num % 2 == 0)
        return num;
});

console.log(`O array com números pares é:`);
console.log(pares);