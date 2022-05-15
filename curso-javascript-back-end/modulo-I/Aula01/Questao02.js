// Use o exemplo de IMC do Desafio 1 e o código que você já fez para melhorá-lo:
// Mostre uma mensagem no console dizendo quem tem o maior IMC.
// A mensagem pode ser "O IMC de Mark é maior do que o de John"
// ou "O IMC de John é maior do que o de Mark".
// Use interpolação de string para incluir os valores de IMC nos outputs.
// Exemplo: "O IMC de Mark (28.3) é maior do que o de John (23.9)!"

const alturaMark = 1.69;
const pesoMark = 78;
const alturaJohn = 1.95;
const pesoJohn = 92;
let calculo_imc;
let imcMark;
let imcJohn;
let markMaiorIMC;

function imc(peso, altura){
    calculo_imc = peso /(altura**2);
    return calculo_imc;
}

imcMark = imc(pesoMark, alturaMark).toFixed(2);
imcJohn = imc(pesoJohn, alturaJohn).toFixed(2);

markMaiorIMC = (imcMark > imcJohn);

if(markMaiorIMC == true){
    console.log(`O IMC de Mark (${imcMark}) é maior do que o de John (${imcJohn})`);
}else{
    console.log(`O IMC de John (${imcJohn}) é maior do que o de Mark (${imcMark})`);
}
