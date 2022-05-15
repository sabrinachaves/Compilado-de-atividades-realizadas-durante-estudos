// DESAFIO

// Vamos melhorar a calculadora de gorjeta de Steven, dessa vez usando loops!
// 1. Crie um array 'contas' contendo todos os valores testes de conta;
// 2. Crie um array vazio para as gorjetas e os totais (gorjetas e totais)
// (um array para gorjetas e um array para totais)
// 3. Use a função 'calcGorjeta' que nós usamos anteriormente (não precisa repetir)
// para calcular as gorjetas e valores totais (conta + gorjeta) 
// para cada valor de conta no array de contas.

// Use um loop for para fazer 10 cálculos.

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.

// DICA: Chame calcGorjeta no loop e use o método push
// para adicionar valores aos arrays de gorjeta e totais.

// 4. BONUS: Escreva uma função 'calcMedia' que receba um array chamado
// 'arr' como argumento.
// Essa função calcula a média de todos os números do array.
// 4.1 Chame a função com o array 'totais'.

const contas = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const gorjetas = [];
const total = [];

let caclGorjeta = (conta) =>{

    for (let i=0; i < conta.length; i++){

        gorjetas.push((conta[i] >= 50 && conta[i] <=300) ? conta[i]*0.15 : conta[i]*0.20);
    }
    return gorjetas;
}

for(let i=0; i< contas.length; i++){
    total.push(contas[i]+caclGorjeta(contas)[i]);
}

console.log(total);

let calcMedia = (arr) =>{
    soma=0;
    for(let i=0; i < arr.length; i++){
        soma+=arr[i];
    }
    return media/arr.length;
}

console.log(calcMedia(total));
