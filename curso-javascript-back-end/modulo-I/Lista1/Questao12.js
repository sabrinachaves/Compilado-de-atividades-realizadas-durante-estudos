

const senha = 2534;
let senhaUsuario;

senhaUsuario = parseInt(prompt(`Digite a senha:`));

while(senhaUsuario !== senha){
    senhaUsuario = parseInt(prompt('Senha inválida, tente novamente!'))
}

console.log(`Senha correta. Iniciando login...`);