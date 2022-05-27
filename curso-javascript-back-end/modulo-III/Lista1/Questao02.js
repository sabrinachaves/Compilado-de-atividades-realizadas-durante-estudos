//Crie uma matriz bidimensional 3x3 com uma sequência de inteiros iniciada em 0 e somada 1 a cada posição, como a imagem abaixo.
console.log(`Questão 2:`);

const matrizBi = [];

for (let i=0; i<3; i++){
    const linha = [];
    for(let j=0; j<3; j++){
        linha.push(3*i+j);
    }
    matrizBi.push(linha);
}

console.table(matrizBi);

//Transforme a matriz criada em uma matriz bidimensional com tamanho da linha e coluna dinâmicos, conforme parâmetro passado para função, como abaixo, aqui chamamos f (5, 4)

console.log(`Questão Extra:`);
const linhas = 4;
const colunas = 5;

const matrizDinamica = (linhas, colunas) =>{
    const matrizBi = [];

    for(let i=0; i<linhas; i++){
        linha = [];
        for(j=0; j<colunas; j++){
            linha.push(colunas*i+j);
        }
        matrizBi.push(linha);
    }
    return matrizBi;
}

console.table(matrizDinamica(linhas, colunas));
    