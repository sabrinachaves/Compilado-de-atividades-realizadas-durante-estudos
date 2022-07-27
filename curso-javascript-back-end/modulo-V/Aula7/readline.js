const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// rl.question("Seu nome?", (resposta) =>{
//     console.log("Recebi a resposta");
// })

rl.setPrompt("1 - Digite seu nome:");

rl.prompt();

// function pergunta(pergunta){
//     return new Promise((resolve, reject)=>{
//         rl.question("Seu nome?", (resposta) =>{
//             resolve(console.log(`Resposta: ${resposta}`));
//             rl.close();
//         })
//     })
// }


rl.on('line', (line) =>{
    console.log(`Resposta: ${line}`);
    rl.close();
})




