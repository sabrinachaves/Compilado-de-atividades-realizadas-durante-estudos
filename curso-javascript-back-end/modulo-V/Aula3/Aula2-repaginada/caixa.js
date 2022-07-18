class Caixa{
    static somaItens(ListaDeMercado){
        let total = 0;
        for(let i = 0; i < ListaDeMercado.itens.length; i++){
            const item = ListaDeMercado.itens[i];
            total += item.preco;
        }
        //listaDeMercado.itens.reduce((acumulador, item) => acumulador + item.preco, 0)/
        return total;
    }
}

export default Caixa;