class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor >=0)
        {
            return;
        }
        this._saldo += valor;
        return valor;
    }
}

const cliente1 = new Cliente();

const conta1 = new ContaCorrente();

conta1.agencia = 0000;


cliente1.nome = "Sabrina";
cliente1.rg = 1524;

conta1.depositar(250);
const valorSacado = console.log(conta1.sacar(20));
console.log(conta1);