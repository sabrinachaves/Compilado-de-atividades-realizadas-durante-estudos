let number = parseInt(prompt(`Digite um número para calcular a sequência de Fibonacci:`));
while(isNaN(number) || number === 0){
    number = parseInt(prompt(`Carateres inválidos. Digite um número para calcular a sequência de Fibonacci:`));
}

const sequencia = (num) =>{
    const fibonacci = [1,1];
    if(num >= 3){
        for(let i=2; i < num; i++){
            fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
        } 
    }
    return fibonacci;
}

console.log(`A sequencia de Fibonacci até a posição escolhida é: `);
console.log(sequencia(number));
console.log(`A posição ${number} da sequência de Fibonacci é: ${sequencia(number)[number-1]}`);