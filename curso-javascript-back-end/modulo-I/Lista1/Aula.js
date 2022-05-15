// 3. O fatorial de um número inteiro e positivo “n”, representado por “n!”
// é obtido a partir da multiplicação de todos os seus antecessores até o número um.
// Exemplo: O fatorial de 5 é 5*4*3*2*1 = 120. // fat(3) => 3*2*1
// Os fatoriais de 0 e 1 são 1.
// Escreva uma função que receba um número n e calcule o fatorial desse número.
// O fatorial deve ser retornado na funçao.

const numero = 4;

function fatorial(num){
    
    for(let i = (num-1); i>0; i--){
        num*=i;
    }
    return num;
}

console.log(fatorial(numero));