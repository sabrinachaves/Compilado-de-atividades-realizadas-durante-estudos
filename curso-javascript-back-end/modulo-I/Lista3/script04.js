let listaNum = [];
let maior=0;
let menor;
let soma = 0;
let media;

for(let i=0; i< 5; i++)
{
    listaNum[i] = parseFloat(prompt(`Digite o ${i+1}º número:`));
    while(isNaN(listaNum[i])){
        listaNum[i] = parseFloat(prompt(`Você digitou caracteres inválidos. Digite o ${i+1}º número:`));
    }
}

function maiorMenor(arr){
    menor = arr[0];
    for(let i=0; i < arr.length; i++)
    {
        if(arr[i] > maior){
            maior = arr[i];
        }else if(arr[i] < menor){
            menor = arr[i];
        }
        soma += arr[i];
    }
    media = soma/ arr.length;
    console.log(`O maior número é o ${maior}`);
    console.log(`O menor número é o ${menor}`);
    console.log(`A média dos números é ${media}`);
}

maiorMenor(listaNum);