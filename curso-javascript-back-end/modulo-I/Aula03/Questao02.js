// Desafio
// "Larissa tem 3 amigos e seu melhor amigo é chamado Pedro."
// Obtenha a partir do objeto: Larissa, 3 e Pedro.

const larissa = {
    firstName: "Larissa",
    lastName: "Queiroz",
    age: 2022 - 1993,
    job: "professora",
    friends: ["Natalia", "Camila", "Pedro"],
  };

  console.log(`${larissa.firstName} tem ${larissa.friends.length} amigos e seu melhor amigo é ${larissa.friends[2]}`);