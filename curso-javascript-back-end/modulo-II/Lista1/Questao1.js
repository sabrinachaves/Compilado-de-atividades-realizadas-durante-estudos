//Crie em JS uma classe Semáforo com um atributo "estado" privado e crie um método para alterar o estado de acordo com a regra de negócio do semáforo (verde->amarelo->vermelho->verde):

class Semaforo{

#estado

    constructor(){
        this.#estado = "amarelo"
    }
    
    alterarEstado(){
        if(this.#estado == "vermelho")
            this.#estado = "verde";
        else if(this.#estado == "verde")
            this.#estado = "amarelo"
        else if(this.#estado == "amarelo")
            this.#estado = "vermelho"
        else throw "Algo está errado"
    }

    getEstado(){
        return this.#estado;
    }
}

//Teste do semáforo

const sinal = new Semaforo();

console.log(sinal);
sinal.alterarEstado();
console.log(sinal.getEstado());
sinal.alterarEstado();
console.log(sinal.getEstado());
sinal.alterarEstado();
console.log(sinal.getEstado());

