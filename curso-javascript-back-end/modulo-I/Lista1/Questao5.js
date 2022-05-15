
let numero = parseInt(prompt(`Digite o número de linhas para calcular o triângulo de Pascal:`)); //Quantidade de linhas a serem calculadas

while(isNaN(numero)){
    numero = parseInt(prompt(`Caractere inválido. Digite um número:`)); // Repete o pedido de entrada de dados enquanto o usuário não digitar um número
}


function trianguloPascal(num) { // Função que retorna o triângulo, usando a entrada do usuário como parâmetro
    let triangulo = []; //Definição do array do triângulo, que será a matriz
    for (let i = 0; i < num; i++) { //For para percorrer as linhas da matriz
        let arrayAux = []; //Array auxiliar, para criar um array para cada linha da matriz. É declarado como nulo sempre no início do for para que os caracteres não sejam adicionados na mesma linha
        for (let j = 0; j < num; j++) { // For para percorrer as colunas da matriz
            if (j == 0 || j == i) { // Se a coluna for 0 ou se a posição da coluna for igual a posição da linha, colocar 1
                arrayAux[j] = 1;
            } else if (i > 0 && j <= i && j > 0 && j != i) { // Se a linha for maior que 0, a coluna for maior que 0 e menor ou que a posição da coluna e a posição da linha for diferente da coluna
                arrayAux[j] = Number(triangulo[i - 1][j - 1]) + Number(triangulo[i - 1][j]); // Somar da linha anterior as posições da coluna anterior e igual a posição a ser preenchida
            } else {
                arrayAux[j] = ""; //Caso não cumpra as condições acima, preencher com vazio
            }
        }
        triangulo.push(arrayAux); // adicionar o array auxiliar na matriz
    }
    return triangulo;
}

console.log(trianguloPascal(numero));
