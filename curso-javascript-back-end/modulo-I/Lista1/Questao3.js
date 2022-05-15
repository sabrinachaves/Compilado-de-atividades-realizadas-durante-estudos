
let userNumbers = [];
const numbers = [10, 15, 50];

for(let i=0; i<2;i++){
    userNumbers[i] = parseInt(prompt(`Digite o ${i+1}º número: `));
    while(isNaN(userNumbers[i])){
        userNumbers[i] = parseInt(prompt(`Você digitou um caractere inválido. Digite o ${i+1}º número`));
    }
}

numbers.unshift(userNumbers[0]);
numbers.push(userNumbers[1]);

console.log(`O novo array ficou assim:`);
console.log(numbers);