
const fs=require("fs");
const http=require("http");
const url=require('url');
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
    temp=temp.replace('$product_link$',`/product?id=${i}`);
    
    result.push(temp);
}
//console.log(result);
result=result.join(' ');
const server=http.createServer((req,res)=>{
    // const route=req.url;
    // console.log(route);
    const path=url.parse(req.url,true);
    const pathname=path.pathname;
    const q=path.query;
    //console.log('\n',q,'\n');
    if(pathname=='/home'){
        res.end(result);
    }
    else if(pathname==='/product'){
        //res.end('product page')
        const id=q.id;
        const item=dataObj[id];
        //console.log(dataObj[id]);
        res.end(`<div>
       <h4> ${item.title}</h4>
               `);
        // console.log(dataObj[id]);
        // const productData=dataObj[id];

        res.end('product page');
        // console.log('hello,world');
    }
    else{
        res.end('404....Not Found')
    }

    //res.end(result);
});
server.listen(1300);
