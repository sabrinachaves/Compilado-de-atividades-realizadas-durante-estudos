
//Crie um vetor que contenha 10 valores inteiros aleatórios entre -100 e +100.
console.log(`Questão 1:`);

const random = ()=>{
    let randomNumbers = [];
    for(let i=0; i<10; i++){
        let randomNumber = Math.floor(Math.random()*200+1)-100;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

console.log(random());