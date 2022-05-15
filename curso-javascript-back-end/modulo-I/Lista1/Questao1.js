
let userNumbers = [];
const numbers = [10, 15, 50];

for(let i=0; i<3;i++){
    userNumbers[i] = parseInt(prompt(`Digite o ${i+1}º número: `));
    while(isNaN(userNumbers[i])){
        userNumbers[i] = parseInt(prompt(`Você digitou um caractere inválido. Digite o ${i+1}º número`));
    }
}

let concatenar = (arr1, arr2) =>{
    
    const arrayConcat = arr1.concat(arr2);
    return arrayConcat;
}

const newArray = concatenar(numbers, userNumbers);

console.log(`O novo array é: `);
console.log(newArray);