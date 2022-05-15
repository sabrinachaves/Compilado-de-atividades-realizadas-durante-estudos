let numero = parseInt(prompt("digite um número menor que 20"))
while(numero >= 20){
    numero = parseInt(prompt("digite um número menor que 20"))
} 

function trianguloIsosceles(numero){

    
let linhas = numero*2 - 1;
let centro = numero -1;
let triangulo = new Array;


for(let i = 0; i < numero; i++){
    let linhatriangulo = new Array(i);
    for(let j = 0; j < linhas; j++){
        if(centro - j > i || j - centro > i){
            linhatriangulo[j] = " ";
        }else{
            linhatriangulo[j] = "*";
        
        
        }
        
        triangulo[i] = linhatriangulo
    }
  
}
return triangulo

}

console.log(trianguloIsosceles(numero));