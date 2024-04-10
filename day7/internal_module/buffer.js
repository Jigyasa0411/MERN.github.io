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
const htmlTemplate= `
<!DOCTYPE HTML>
<html>
  <head>
  <style>
  .product_card{
    max-width:500px;
    margin:50px auto;
    border:3px double brown;
    border-radius:8px
    padding:16px;
  }
  </style>
  </head>
    <body>
    _PRODUCT_CARDS_
    </body>
    </html>
`
// const page=htmlTemplate.repl;
const cardTemplate=`
<div class='product_card'>
<h4>_Title_</h4>
<p>_info_<p>
</div>`
const card1=cardTemplate
            .replace('_Title_','Xiomi Note 11 pro')
            .replace('_info_','This is a chinese mobile');
const card2=cardTemplate
            .replace('_Title_','iphone')
            .replace('_info_','This is an apple mobile');
const allCards=card1+card2;
const page= htmlTemplate.replace('_PRODUCT_CARDS_', allCards);
const server= http.createServer((req,res)=>{
    console.log('request recieved')
    console.log(req.url);
    res.writeHead(
        200//statuscode
        ,{
            'content-type':'text/html',
        }
    )
    res.end(page);
});

server.listen(1400, ()=>{
    console.log('.......Server started!.......')
})


