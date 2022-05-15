let x = [1, 2, 3];
let y = [1, 2, 3, 4];

function multiplicacao(arr1, arr2) {
    if (arr1.length < arr2.length) {
        tempArray = arr1;
        arr1 = arr2;
        arr2 = tempArray;
    }

    const newArray = arr2.map(function (num, i) {
        return num * arr1[i];
    });

    return newArray;
}

console.log(multiplicacao(x, y));

