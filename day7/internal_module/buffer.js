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
const fs =require('fs');
const data=fs.readFileSync('./data.json','utf8');
//console.log(data);
const dataObj=JSON.parse(data);
const products = dataObj.products

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
<img src="IMAGE"></img>
</div>`
// const card1=cardTemplate
//             .replace('_Title_',products[0].title)
//             .replace('_info_',products[0].description);
// const card2=cardTemplate
//             .replace('_Title_',products[1].title)
//             .replace('_info_',products[1].description);
//const allCards=card1+card2;
const allCards=products.map((elem)=>{
    let newCard=cardTemplate;
    newCard=newCard.replace('_Title_',elem.title).replace('_info_',elem.description).replace('IMAGE',elem.images[0]);
    return newCard;
})
const allCardsString = allCards.join(' ')
const page= htmlTemplate.replace('_PRODUCT_CARDS_', allCardsString);
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


