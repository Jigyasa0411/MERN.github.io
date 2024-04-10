const fs = require('fs');

const data= fs.readFileSync('./myReadme.txt',);
console.log(data);
console.log(data.toString());
