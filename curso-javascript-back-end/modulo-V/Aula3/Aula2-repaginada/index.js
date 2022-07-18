import Item from './item';
import Caixa from './caixa';
import ListaDeMercado from './lista-de-mercado';

const lista = new ListaDeMercado();
const pastaDeDente = new Item('Pasta de dente', 5);
const pao =  new Item('Pão', 7);

lista.adicionaItem(pastaDeDente);
lista.adicionaItem(pao);

const total = Caixa.somaItens(lista);

console.log(`O total da lista foi ${total} reais`);



