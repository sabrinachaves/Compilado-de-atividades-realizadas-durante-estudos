let sigla;

sigla = prompt("Digite a sigla de um estado: ");
sigla = sigla.toUpperCase();

while (sigla.length != 2 || (!isNaN(parseFloat(sigla)))) {
    sigla = prompt("Você digitou uma sigla inválida. Digite a sigla de um estado: ");
    sigla = sigla.toUpperCase();
}

if (sigla == "RJ") {
    console.log("Carioca");
} else if (sigla == "SP") {
    console.log("Paulista");
} else if (sigla == "MG") {
    console.log("Mineiro");
} else if (sigla == "PE") {
    console.log("Pernambucano");
} else if (sigla == "PB") {
    console.log("Paraibano");
} else if (sigla == "RN") {
    console.log("Potiguar");
} else {
    console.log("Outros Estados");
}
    



