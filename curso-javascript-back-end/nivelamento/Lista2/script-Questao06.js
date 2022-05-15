let listaConvidados = [];
let tamanho = 0;
let nome;

for(let i=0; i< 5; i++){
    listaConvidados[i] = prompt(`Digite o nome do ${i+1}º convidado:`);

    while(!isNaN(parseInt(listaConvidados[i]))){
        listaConvidados[i] = prompt(`Você digitou caracteres inválidos. Digite o nome do ${i+1}º convidado:`);
    }
}

function nomeMaisLongo(arr){
    for(let i= 0; i < arr.length; i++){
        if(arr[i].length > tamanho){
            tamanho = arr[i].length;
            nome = arr[i];
        }
    }
    return nome;
}

console.log(`O nome mais longo da lista é: ${nomeMaisLongo(listaConvidados)}`);
