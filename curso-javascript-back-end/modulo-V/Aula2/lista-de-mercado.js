class ListaDeMercado{
    constructor(){
        this.dataDeCriacao = Date.now();
        this.itens = [];
    }

    adicionaItem(item){
        this.itens.push(item)
    }
}

module.exports = ListaDeMercado;