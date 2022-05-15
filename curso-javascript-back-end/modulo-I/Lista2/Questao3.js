const precos = [500, 3000, 20, 450, 1050, 345, 900, 5000, 200, 159];

const precosDescontos = precos.map((num) =>{
    let novoPreco;
    if(num < 200){
        novoPreco = num*0.95;
    }else if(num < 400){
        novoPreco = num*0.9;
    }else if(num <2000){
        novoPreco = num*0.85;
    }else{
        novoPreco=num*0.8;
    }
    return parseFloat(novoPreco.toFixed(2));
});

console.log(`Os preços após os descontos ficaram assim:`)
console.log(precosDescontos);