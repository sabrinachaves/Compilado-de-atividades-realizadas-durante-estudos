// DESAFIO

// Steven quer construir uma calculadora de gorjeta simples para
// sempre que ele for comer em um restaurante.
// No país dele, é comum dar 15% de gorjeta se a conta é entre 50 e 300.
// Se o valor for diferente, então a gorjeta é 20%.

// Sua tarefa é calcular a gorjeta, dependendo do valor da conta.
// Crie uma variável nomeada 'gorjeta' para isso.
// Não é permitido usar if/else.
// Mostre uma string no console contendo o valor da conta,
// a gorjeta e o valor final (conta + gorjeta).
// Exemplo: 'A conta foi 275, a gorjeta foi 41.25 e o valor total foi 316.25'

// TEST DATA: Teste para o valor da conta 275, 40 e 430.

const conta = 430;

const gorjeta = (conta >= 50 && conta <=300) ? conta*0.15 : conta*0.20;

console.log(`A conta foi ${conta}, a gorjeta foi ${gorjeta} e o valor total foi ${conta+gorjeta}`);



