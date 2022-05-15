const people = [
    {
        name: "Angelina Jolie",
        age: 80,
        weight: 55,
        height: 1.79
    },
    {
        name: "Eric Jones",
        age: 28,
        weight: 100,
        height: 1.6
    },
    {
        name: "Paris Hilton",
        age: 34,
        weight: 79,
        height: 1.65
    },
    {
        name: "Kayne West",
        age: 26,
        weight: 83,
        height: 1.83
    },
    {
        name: "Bob Ziroll",
        age: 90,
        weight: 60,
        height: 1.65
    }
  ];

  const addPropriedades = people.map((pessoa) =>{
    pessoa.bmi = (pessoa.weight/(pessoa.height**2)).toFixed(1);
    if(pessoa.bmi < 18.5 || pessoa.bmi > 25){
        pessoa.classification = "fora da faixa Normal";
    }else{
        pessoa.classification = "Normal";
    }
    return pessoa;
  });

  console.log(addPropriedades);