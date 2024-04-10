// const b=new Buffer.from('abc');
// console.log(b.toString());
// b.write('other');
// console.log(b.toString());
// // const fs= require('fs');
// fs.writeFileSync('./myReadme.txt',"10th April 2024:Day7");
// const fs=require('fs');
// //const { isPromise } = require('util/types');
// // console.log("start");
// // const data=fs.readFileSync('.myReadme.txt',{encoding:'utf8'/});
// // console.log(data);
// // console.log("end");
// const pr=isPromise.readfild-('.myReadme.txt',{encoding:'utf8'});
// pr.then((res)=>{
//     console.log(res);
// });
//  console.log("end")


// const fs=require('fs');
// const data=fs.readFileSync('./myReadme.txt',{encoding: "UTF8"},(err,data)=>
// //console.log(data)
// );
const http = require('http');
const server= http.createServer((req,res)=>{
    console.log('request recieved')
    console.log(req.url);
    res.end("hello");
});

server.listen(1400, ()=>{
    console.log('.......Server started!.......')
})


