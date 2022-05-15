const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

let dadosLuciana = [];
let leticiaAge;

for(let i = 0; i < alunos.length; i++){
    for(let j = 0; j < alunos.length; j++){
        if(alunos[i][j] === "Luciana"){
            dadosLuciana = alunos[i];
        }else if(alunos[i][j] === "Letícia"){
            leticiaAge = alunos[i][1];
        }else if(alunos[i][j] === "Pedro"){
            alunos[i][3] = "Data Science";
        }
    }
}

console.log(`Os dados da aluna Luciana são: ${dadosLuciana}.`);
console.log(`A idade da aluna Letícia é: ${leticiaAge}`);
console.log(`Os novos dados de Pedro são: ${alunos[2]}`);