

let numeros = [];

do{
    for(let i=0; i < 2; i++){
    numeros[i] = parseFloat(prompt(`Digite o ${i+1}º número:`));
    while(isNaN(numeros[i])){
        numeros[i] = parseFloat(prompt(`Você digitou caracteres inválidos. Digite o ${i+1}º número:`));
    } 
}
if(numeros[0] < numeros[1]){
    console.log("Hello World");
}else{
    console.log("O segundo número é maior que o primeiro");
}
}while(numeros[0]<numeros[1]);
