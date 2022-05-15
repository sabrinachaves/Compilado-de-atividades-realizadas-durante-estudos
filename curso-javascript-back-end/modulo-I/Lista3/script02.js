let profundidade; //profundidade;
let largura; //largura;
let comprimento; // comprimento;
let volume;
let litros;
let quantidade;

profundidade = parseFloat(prompt("Digite a profundidade da piscina em metros: "));
while(isNaN(profundidade)){
    profundidade = parseFloat(prompt("Você digitou caracteres inválidos. Digite a profundidade da piscina em metros:"));
}

largura = parseFloat(prompt("Digite a largura da piscina em metros: "));
while(isNaN(largura)){
    largura = parseFloat(prompt("Você digitou caracteres inválidos. Digite a largura da piscina em metros:"));
}

comprimento = parseFloat(prompt("Digite o comprimento da piscina em metros: "));
while(isNaN(comprimento)){
    comprimento = parseFloat(prompt("Você digitou caracteres inválidos. Digite o comprimento da piscina em metros:"));
}


function quantidadeProduto(x,y,z){
    volume = (x-0.6)*y*z;
    litros = volume*1000;
    quantidade = (litros/1000)*1.5;
    return quantidade;
}

console.log(`Deve ser adicionado ${quantidadeProduto(profundidade, largura, comprimento)}mL de produto na piscina`);

