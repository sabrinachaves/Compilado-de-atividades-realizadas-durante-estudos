// Utilize map, filter, reduce para obter um array de depositos em reais. TODOS OS DEPOSITOS EM REAIS SOMADOS.

const movimentacao = [200, 450, -400, 3000, -650, -130, 70, 1300];
const dolar = 4.97;

const depositos = movimentacao
.map(valor => valor*dolar)
.filter(deposito => deposito > 0)
.reduce((acc, deposito) => acc+=deposito,0);

console.log(depositos.toFixed(2));
