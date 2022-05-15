// Mark e John estão tentando comparar seus IMCs (índices de massa corporal), que é calculado usando a seguinte fórmula:
// IMC = peso / altura ** 2 = peso / (altura * altura). (Peso em kg e altura em metros).

// Guarde o peso e altura de Mark e John em variáveis.
// Calcule seus imcs usando a fórmula (você pode até implementar as duas versões)
// Crie uma variável booleana 'markMaiorIMC' contendo informação sobre se Mark possui um IMC maior que John.
// TEST DATA 1: Mark pesa 78kg e tem 1.69m 


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

imcMark = imc(pesoMark, alturaMark);
imcJohn = imc(pesoJohn, alturaJohn);

markMaiorIMC = (imcMark > imcJohn);

console.log(markMaiorIMC); 




