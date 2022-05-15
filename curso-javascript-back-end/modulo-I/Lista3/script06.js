let listaAleatoria = [];
let pares = [];
let palavras = [];
let impares = [];
maiorPar = 0;
maiorImpar = 0;


listaAleatoria = ["Casa", 1, 0, "Fruta", 9, 1001, "Escola", 8, 4, "Aluno", 200];

function ordernar(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number") {
            if ((arr[i] % 2 == 0) && arr[i] < maiorPar) {
                pares.unshift(arr[i]);
            } else if (arr[i] % 2 == 0) {
                pares.push(arr[i]);
                maiorPar = arr[i];
            } else if ((arr[i]% 2!= 0) && arr[i] < maiorImpar) {
                impares.push(arr[i]);
            }else if (arr[i] % 2 != 0) {
                impares.unshift(arr[i]);
                maiorImpar = arr[i];
            }
        } else{
            palavras.push(arr[i]);
        }
    }
    for(let i=0; i < palavras.length; i++){
        pares.push(palavras[i]);
    }
    for(let i=0; i < impares.length; i++){
        pares.push(impares[i]);
    }
    return pares;
}

console.log(`A lista ordernada ficou assim:`);
console.log(ordernar(listaAleatoria));


