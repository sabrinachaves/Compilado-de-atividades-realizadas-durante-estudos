//Transforme a matriz criada em uma matriz bidimensional com tamanho da linha e coluna dinâmicos, conforme parâmetro passado para função, como abaixo, aqui chamamos f (5, 4)

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
