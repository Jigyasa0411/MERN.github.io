const fs = require('node:fs');

const data= fs.readFileSync('./myReadme.txt');

console.log(data);
