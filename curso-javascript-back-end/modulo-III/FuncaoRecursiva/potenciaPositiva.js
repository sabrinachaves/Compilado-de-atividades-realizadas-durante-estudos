
const potencia = (num, pot) =>{ //2 3
    if(pot < 1) return 1;
    pot--; //2
    return num*potencia(num,pot); //2
}

console.log(potencia(2,5));