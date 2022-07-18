class BibliotecaVirtual{
    constructor(){
        this.listas = [];
    }

    adicionaNaBiblioteca(lista){
        this.listas.push(lista);
    }
}

module.exports = BibliotecaVirtual;