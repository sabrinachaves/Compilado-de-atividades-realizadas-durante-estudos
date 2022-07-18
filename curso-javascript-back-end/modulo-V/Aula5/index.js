const fs = require('fs');
const assert = require('assert');

assert.ok(process.argv.length > 2)

const fd = fs.openSync('saida.txt', 'w+');

for(let i = 2; i < process.argv.length; i++){
    fs.writeSync(fd, `${process.argv[i]}\n`)
}

fs.closeSync(fd);

