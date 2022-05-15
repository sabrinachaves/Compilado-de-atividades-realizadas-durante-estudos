const account1 = {
    owner: "Larissa Queiroz",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
    // username: lq
  };
  
  const account2 = {
    owner: "Jessica Miranda",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
    // username: jm
  };
  const account3 = {
    owner: "Pedro Silva",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
    // username: ps
  };
  
  const account4 = {
    owner: "Sarah Pereira",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
    // username: sp
  };
  
  const accounts = [account1, account2, account3, account4];

  // Criar uma função que vai receber um array de objetos e adicionar username em cada objeto.
// o username deve ser as iniciais do nome.

// function addPropriedade(arr) {
//     const addPropriedade = arr.map((arr2) =>{
//         let newArray = arr2.owner.split(" ");
//         let iniciais = [];
//         newArray.forEach( (element) => {
//             iniciais.push(element[0]);
//         });
//         iniciais = iniciais.join("").toLowerCase();
//         arr.username = iniciais;
//         return arr;
//     });
//     return addPropriedade;   
// }

function addPropriedade(arr) {
    arr.forEach((obj) =>{
        obj.username = obj.owner.split(" ").map( element => element[0]).join("").toLowerCase();
    });  
    return arr;
}

console.log(addPropriedade(accounts));
