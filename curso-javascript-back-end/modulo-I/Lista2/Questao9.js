const vetor = ["Sabrina", "Paloma", "Dany", "Vera", "Laysa", "Elson", "Miguel", "Clarice"];

const ateCincoCaracteres = vetor.filter(palavra => palavra.length <= 5);

console.log(`O vetor com palavras de até 5 caracteres ficou assim: `);
console.log(ateCincoCaracteres);