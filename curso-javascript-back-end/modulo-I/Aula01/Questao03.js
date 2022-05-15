// Desafio #3
// Existem dois times de ginástica, Dolphins e Koalas.
// Eles competem um contra o outro 3 vezes. O vencedeor com a maior
// média de pontos ganha o troféu.

// Calcule a média de pontos para cada time usando os dados de teste abaixo:
// Compare a média dos scores dos times para determinar
// o vencedor da competição, e mostre no console.
// Não esqueça que pode existir um empate, então teste esse caso também.

// TEST DATA: Score dos Dolphins 96, 108 e 89. Koalas score 88, 91 e 110.

// BONUS 1: Adicione um requisito para um score mínimo de 100.
// Com essa regra, um time só ganha se ele tiver um score maior
// que o outro time, e ao mesmo tempo um score de pelo menos 100 pontos.

// BONUS 2: Score mínimo também se aplica ao empate!
// Então o empate só acontece se os dois tiverem o mesmo score e
// também os dois tiverem score maior ou igual a 100 pontos,
// senão, nenhum time ganha o troféu.

// TEST DATA BONUS 1: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 123.
// TEST DATA BONUS 2: Dolphins score 97, 112 e 101. Koalas score 109, 95 e 106.

const scoreDolphins = [97, 112, 101];
const scoreKoalas = [109, 95, 123];
let mediaKoalas;
let mediaDolphins;

function media(array) {
    let mediaTimes;
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    mediaTimes = soma / array.length;
    return mediaTimes;
}

mediaDolphins = media(scoreDolphins);
mediaKoalas = media(scoreKoalas);

if (mediaDolphins < 100 && mediaDolphins < 100) {
    console.log(`Os times não atingiram a pontuação mínima de 100 pontos. Dolphins fizeram ${mediaDolphin.toFixed(2)} e Koalas ${mediaKoalas}`);
} else if (mediaDolphins < 100) {
    console.log(`O time Dolphins não atingiu a pontuação mínima de 100 pontos, fazendo apenas ${mediaKoalas.toFixed(2)}`);
} else if (mediaKoalas < 100) {
    console.log(`O time Koalas não atingiu a pontuação mínima de 100 pontos, fazendo apenas ${mediaKoalas.toFixed(2)}`);
} else if (mediaDolphins > mediaKoalas) {
    console.log(`Os Dolphins (${mediaDolphins.toFixed(2)}) ganharam dos Koalas (${mediaKoalas.toFixed(2)})`);
} else if (mediaDolphins < mediaKoalas) {
    console.log(`Os Koalas (${mediaKoalas.toFixed(2)}) ganharam dos Dolphins (${mediaDolphins.toFixed(2)})`);
} else {
    console.log(`Houve um empate entre as equipes, com a média de ${mediaDolphins.toFixed(2)} pontos`);
}




