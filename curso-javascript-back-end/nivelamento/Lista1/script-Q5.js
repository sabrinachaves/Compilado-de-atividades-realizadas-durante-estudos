let temp;

temp = parseFloat(prompt("Insira uma temperatura para descobrir a atividade ideal!"));

while(isNaN(temp)){
    temp = parseFloat(prompt("Você digitou um valor inválido. Insira uma temperatura para descobrir a atividade ideal!"));
}

if(temp >= 26){
    console.log("Natação");
}else if(temp >= 15){
    console.log("Tênis");
}else if(temp >= 5){
    console.log("Golfe");
}else{
    console.log("Esqui");
}