
const fs=require("fs");
const http=require("http");
const url=require('url');
// const { title } = require("process");
const data=fs.readFileSync("./data.json","utf8");
const dataObj=JSON.parse(data).products;
const inputElement=`
<form action='/product'>
<input type="text" name="productName">
<button type="submit">Search</button>
</form>`


// console.log(data)
const cardTemplate=`
<div class='product-card'>
<h3>$TITLE$</h3>
<a href="$product_link$">more info </a>

<img src="$img_src$" alt='product_image'></img>

<h3> $PRICE$</h3>


</div>
`;
let result=[];
for(let i=0;i<dataObj.length;i++){
    let temp= cardTemplate;
    temp=temp.replace('$TITLE$',dataObj[i].title)
    temp=temp.replace('$img_src$',dataObj[i].images[0])
    temp=temp.replace('$product_link$',`/product?id=${i}`)
    temp=temp.replace('$PRICE$',dataObj[i].price)
    
    result.push(temp);
}
//console.log(result);
result=result.join(' ');
const server=http.createServer((req,res)=>{
    // const route=req.url;
    // console.log(route);
    res.writeHead(200,{
       'content-type':'text/html',
    });
    const {pathname,query}=url.parse(req.url,true)
    console.log('\n',query,'\n');
    if(pathname=='/home'){
        res.end(inputElement+result);
    }
    else if(pathname==='/product'){
       // res.end('product page')
       const pName=query.productName;
        const id=query.id;if(id){

        
        const item= dataObj[id];
        console.log(dataObj[id])
        res.end(`
        <div>
        <h1>${item.title}</h1>
       <img src="${item.images[0]}">
       
       <h2>${item.description}</h2>
       <h3>${item.price}</h3>
       <
       
       </div>

               `);
        // console.log(dataObj[id]);
        // const productData=dataObj[id];

        // res.end('product page');
        // console.log('hello,world');
    }
    if(pName){
        // res.end(pName);
        //console.log(pName)
        const searchNameResult=dataObj.filter(({title})=>{
            if(title.includes(pName)){
                return true;
            }
            else{
                false;
            }
        })
        console.log(searchNameResult);
        res.end(searchNameResult.join('\n'))
    }
    else {
        res.end('<h3>ERROR....</h3>');
    }
}
 

    else{
        res.end('404....Not Found')
    }

    //res.end(result);
});
server.listen(1300);
