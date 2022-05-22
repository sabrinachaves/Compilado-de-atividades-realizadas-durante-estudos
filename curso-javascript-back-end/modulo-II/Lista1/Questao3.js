//Crie em JS uma classe Cliente e uma classe Endereco. O cliente deve ter os atributos nome, cpf e endereco. Todos os atributos devem ser privados e ter métodos de acesso (ou accessors, você escolhe). No método/accessor set de endereco, valide se o valor passado é um objeto da classe Endereco.

class Cliente{
    constructor(){
        this._nome = undefined;
        this._cpf = undefined;
        this._endereco = undefined;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get cpf(){
        return this._cpf;
    }

    set cpf(cpf){
        this._cpf = cpf;
    }

    get endereco(){
         return this._endereco;
    }

    set endereco(endereco)
    {
        if(!(endereco instanceof Endereco)) throw Error(`O endereço não está correto`);
        this._endereco = endereco;
    }
}

class Endereco{
    constructor(){
        this._rua = undefined;
        this._bairro = undefined;
        this._cidade = undefined;
        this._estado = undefined;
    }

    get rua(){
        return this._rua;
    }

    set rua(rua){
        this._rua = rua;
    }

    get bairro(){
        return this._bairro;
    }

    set bairro(bairro){
        this._bairro = bairro;
    }

    get cidade(){
        return this._cidade;
    }

    set cidade(cidade){
        this._cidade = cidade;
    }

    get estado(){
        return this._estado;
    }

    set estado(estado){
        this._estado = estado;
    }
}

//Teste das classes

const novoEndereco = new Endereco();

novoEndereco.rua = "Rua Magnólia, 25";
novoEndereco.bairro = "Caiçara";
novoEndereco.cidade = "Belo Horizonte";
novoEndereco.estado = "MG";

const Cliente1 = new Cliente();

Cliente1.nome = "João Carlos Souza";
Cliente1.cpf = "12345678910";
Cliente1.endereco = novoEndereco;

console.log(Cliente1);


