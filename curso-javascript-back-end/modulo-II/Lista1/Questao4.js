// Crie uma classe Pessoa, com nome; Uma classe Cidadao, que herde pessoa e tenha cpf; e uma classe Cliente que herde cidadão e tenha login e senha. Cada classe deve pedir no construtor toda a informação necessária para criar um objeto consistente (valores para cada um dos atributos) levando em conta os construtores das super-classes, que devem ser invocados nas classes derivadas.

class Pessoa{
    constructor(nome){
        this.nome = nome;
    }
    
}

class Cidadao extends Pessoa{
    constructor(nome, cpf){
        super(nome);
        this.cpf = cpf;
    }
}

class Cliente extends Cidadao{
    constructor(nome, cpf, login, senha){
        super(nome, cpf);
        this.login = login;
        this.senha = senha;
    }
}

//Teste 

const cidadao1 = new Cidadao("Paula", "123.456.789-10", "paulasouza", "123@45");

console.log(cidadao1 instanceof Pessoa);
console.log(cidadao1 instanceof Cidadao);
