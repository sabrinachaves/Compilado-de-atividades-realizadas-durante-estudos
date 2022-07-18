const fs = require('fs');
const path = require('path');

const caminhoDoArquivo = path.join(__dirname, 'personagens.json');
const personagensString = fs.readFileSync(caminhoDoArquivo, 'utf-8');
const personagens = JSON.parse(personagensString);

//Imprimir o nome e a idade de todos os personagens
personagens.forEach(personagem => {
    console.log(`Nome: ${personagem.nome} \n Idade: ${2022-Number(personagem.nascimento.slice(-4))}`);
});

//Imprimir nome de personagens que moraram em Lenora Hills:

 let personagensCidade = personagens.filter(personagem => personagem.cidade.includes('Lenora Hills'));
        
console.log(`\nPersonagens que moraram em Lenora Hills:`)
 personagensCidade.map(personagem => console.log(`Nome: ${personagem.nome}`));

//Imprimir nome de personagens que nasceram antes de 1972 (não incluso)
let antes1972 = personagens.filter(personagem => {
    return Number(personagem.nascimento.slice(-4)) < 1972;
})

console.log(`\nPersonagens que nasceram antes de 1972:`)
antes1972.map(personagem => console.log(`Nome: ${personagem.nome}`));