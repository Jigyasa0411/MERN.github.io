
const fs=require("fs");
const http=require("http");
// const { title } = require("process");
const data=fs.readFileSync("./data.json","utf8");
const dataObj=JSON.parse(data).products;

// console.log(data)
const cardTemplate=`
<div class='product-card'>
<h3>$TITLE$</h3>
<img src="$img_src$" alt='product_image'></img>
<a href=$product_link$">more info </a>

</div>
`;
let result=[];
for(let i=0;i<dataObj.length;i++){
    let temp= cardTemplate;
    temp=temp.replace('$TITLE$',dataObj[i].title);
    temp=temp.replace('$img_src$',dataObj[i].images[0]);
    temp=temp.replace('$product_link$',`?id=${i}`);
    
    result.push(temp);
}
//console.log(result);
result=result.join(' ');
const server=http.createServer((req,res)=>{

    res.end(result);
});
server.listen(1300);
