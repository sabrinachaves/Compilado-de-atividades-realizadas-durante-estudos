const conjunto1 = [1, "Sabrina", 3, "Teste", 80, 21, 8, 22];
const conjunto2 = ["Sabrina", 9, 8, 6, 90, "Paloma"];
let cont = 0;

function elementosComuns(arr1, arr2){
    for(let i=0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j])
            cont++;
        }
    }
    return cont;
}

console.log(`A quantidade de elementos em comum entre os dois arrays é: ${elementosComuns(conjunto1, conjunto2)}`);



