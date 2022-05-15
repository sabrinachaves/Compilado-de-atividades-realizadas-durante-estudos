const temperaturas = [19, 15, 23, 21, 24, 20, 32, 28, 29];

function maiorEMenorTemp(temp) {
    let maior;
    let menor;

    for (let i = 0; i < temp.length; i++) {
        if (i === 0) {
            maior = temp[i];
            menor = temp[i];
        } else if (temp[i] > maior) {
            maior = temp[i];
        } else if (temp[i] < menor) {
            menor = temp[i];
        }
    }

    console.log(`A maior temperatura do dia foi ${maior} e a menor temperatura do dia foi ${menor}`);
}

maiorEMenorTemp(temperaturas);
