class ListaDeLivros{
    constructor(nome){
        this.nome = nome;
        this.itens = [];
    }

    adicionaNaLista(item){
        this.itens.push(item);
    }

}

module.exports = ListaDeLivros;