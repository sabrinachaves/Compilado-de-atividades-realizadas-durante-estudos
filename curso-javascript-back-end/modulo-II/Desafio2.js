// 1. Calcule a idade do cachorro em anos humanos usando a seguinte fórmula: se o cachorro é mais novo que 2 anos, idadeHumana = 2 * idadeCanina. Se o cachorro é mais velho que 2 anos, idadeHumana = 16 + idadeCanina * 4. //map
// 2. Exclua todos os cães que são menores que 18 anos hmanos (que é o mesmo que deixar apenas os cães que tem pelo menos 18 anos). // filter

// 3. Calcule a idade média de todos os cães adultos //reduce

// 4. Execute a funcão para os dados de teste:

// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

const idades = [5, 2, 4, 1, 15, 8, 3];

const mediaIdade = (arr) => {
    const idadeMedia = arr
    .map(age => age <= 2 ? 2*age : (16+age*4))
    .filter(age => age >= 18)
    .reduce(
        (acc, idadeAtual, i, arr)=>{
            acc+=idadeAtual/arr.length;
            return acc;
        },0);
    return idadeMedia.toFixed(0);
}

console.log(mediaIdade(idades));
