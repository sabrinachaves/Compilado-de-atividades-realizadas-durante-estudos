let nota = 0;
let notaAuxiliar;
let quantidadeDeNotas;
let average;

quantidadeDeNotas = parseInt(prompt("Digite a quantidade de notas que serão inseridas: "));

while(isNaN(quantidadeDeNotas)){
    quantidadeDeNotas = parseInt(prompt("Você digitou um valor inválido. Digite a quantidade de notas que serão inseridas: "))
}

for(let i=0; i < quantidadeDeNotas; i++){
     notaAuxiliar =  parseFloat(prompt("Digite a " + (i+1) + "ª nota: "));
     while(isNaN(notaAuxiliar)){
         notaAuxiliar = parseFloat(prompt("Você digitou um valor inválido. Digite a " + (i+1) + "ª nota: "));
     }
     nota += notaAuxiliar;
} 

average = nota/quantidadeDeNotas;

if(average >= 9){
    console.log("Parabéns - você está na lista de alunos destaque do curso!");
}else{
    console.log("Desculpe, você não entrou na lista de alunos destaque.");
}
