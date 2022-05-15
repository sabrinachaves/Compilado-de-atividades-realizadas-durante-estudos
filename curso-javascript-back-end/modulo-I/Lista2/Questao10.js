const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const mebrosClube = people.filter((obj) => {
    if (obj.member == true)
        return obj;
});

console.log(`Os membros do grupo são:`);
console.log(mebrosClube);