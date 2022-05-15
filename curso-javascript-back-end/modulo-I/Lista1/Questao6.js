let numero = parseInt(prompt(`Digite o número de linhas para calcular o triângulo isósceles:`)); 

while(isNaN(numero)){
    numero = parseInt(prompt(`Caractere inválido. Digite um número:`)); 
}

function trianguloIsosceles(num) {
    let triangulo = [];
    for (let i = 0; i < num; i++) {
        let arrayAux = [];
        for (let j = 0; j < (2 * num) - 1; j++) {
            if (i == 0 && j != num - 1) {
                arrayAux[j] = "";
            } else if (i == 0 && j == num - 1) {
                arrayAux[j] = "*";
            } else if ((triangulo[i - 1][j + 1] == "*" && triangulo[i - 1][j] == "") || (triangulo[i - 1][j] == "*") || (triangulo[i - 1][j - 1] == "*" && triangulo[i - 1][j] == "")) {
                arrayAux[j] = "*";
            } else {
                arrayAux[j] = "";
            }
        }
        triangulo.push(arrayAux);
    }
    return triangulo;
}
console.log(trianguloIsosceles(numero));



