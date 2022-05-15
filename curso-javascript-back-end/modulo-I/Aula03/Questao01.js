// Steven ainda está construindo sua calculadora de gorjeta usando
// as mesmas regras de antes: Gorjeta de 15% da conta se o valor da conta for entre
// 50 e 300, e se o valor for diferente, a gorjeta é 20%.

// Escreva uma função 'calcGorjeta'' que receba qualquer valor de conta como um input
// e retorne a gorjeta correspondente, calculada baseada nas regras acima
// (você pode checar o código da primeira calculadora de gorjeta se você precisar).
// Teste a função usando o valor de conta de 1

// Teste a função usando o valor de conta de 100.

// Agora vamos usar arrays! Crie um Array 'contas' contendo o dado de teste abaixo.
// Crie um array 'gorjetas' contendo o valor da gorjeta para cada conta,
// calculado pela função que você criou antes.

// BONUS: Crie um array 'total' contendo os valores total, a conta + gorjeta.
// TEST DATA: 125, 555 e 44.

/*const valorConta = 100;


let caclGorjeta = (conta) =>{
    const gorjeta = (conta >= 50 && conta <=300) ? conta*0.15 : conta*0.20;
    return gorjeta;
}

console.log(`A conta foi ${valorConta}, a gorjeta foi ${caclGorjeta(valorConta)} e o valor total foi ${valorConta+caclGorjeta(valorConta)}`);*/

const contas = [125, 555, 44];
const gorjetas = [];
const total = [];

let caclGorjeta = (conta, gorjeta) =>{

    for (let i=0; i < conta.length; i++){

        gorjetas.push((conta[i] >= 50 && conta[i] <=300) ? conta[i]*0.15 : conta[i]*0.20);
    }
    return gorjetas;
}

console.log(`Os valores das contas são: ${contas}`);
console.log(`Os valores das gorjetas são: ${caclGorjeta(contas, gorjetas)}`);

const calcTotal = (conta2, gorjeta2) =>{
    for(let i=0; i < contas.length; i++){
        total.push(contas[i]+gorjetas[i]);
    }
    return total;
}

console.log(`Os valores totais são: ${calcTotal(contas, gorjetas)}`);

