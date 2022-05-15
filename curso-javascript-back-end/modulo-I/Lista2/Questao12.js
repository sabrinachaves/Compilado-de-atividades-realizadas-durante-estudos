const vetores = [
    ["1", "2", "3"],
    [true], 
    [4, 5, 6]];

function vetorAgrupado(arr) {
    return arr.reduce((acc, valor) =>{
        return acc.concat(valor);
    }, []);
}


console.log(vetorAgrupado(vetores));