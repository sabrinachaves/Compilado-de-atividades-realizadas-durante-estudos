//Crie em JS uma classe Armadura para um jogo digital, com um atributos defesa, peso e valor todos privados e crie métodos de acesso ou accessors (você escolhe):

class Armadura{

    constructor(){
        this._defesa = 50;
        this._peso = 80;
        this._valor = 45;
    }

    get defesa(){
        return this._defesa;
    }

    set defesa(defesa){
        this._defesa = defesa;
    }

    get peso(){
        return this._peso;
    }

    set peso(peso){
        this._peso = peso;
    }

    get valor(){
        return this._valor;
    }

    set valor(valor){
        this._valor = valor;
    }
}

//Teste armadura

const novaArmadura = new Armadura();

console.log(`Valores originais:`)
console.log(`Defesa: ${novaArmadura.defesa}`);
console.log(`Peso: ${novaArmadura.peso}`);
console.log(`Valor: ${novaArmadura.valor}`);

console.log(`\n`);
novaArmadura.defesa = 79;
novaArmadura.peso = 25;
novaArmadura.valor = 99;

console.log(`Valores alterados:`)
console.log(`Defesa: ${novaArmadura.defesa}`);
console.log(`Peso: ${novaArmadura.peso}`);
console.log(`Valor: ${novaArmadura.valor}`);