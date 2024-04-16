const express=require('express');
 const app=express();

 app.use(express.json());
const fsPromises=require("fs/promises");
app.get('/api/products',async(req,res)=>{
    const data= await fsPromises.readFile('./data2.json',"utf8");
    const arr=JSON.parse(data).products;
    res.json({
        status:"success",
        results: arr.length,
        data:{
            products:arr
        }
    });
});
app.post('/api/products',async(req,res)=>{
    // console.log(req);
    const data=(req.body);
    data.id=121;
    console.log(data);

    const db= await fsPromises.readFile("./data2.json","utf8")
    
    const arr=JSON.parse(db);
    const len=arr.length;
    const newProduct=data;
    if(len==0){
        // const newProduct=data;
        newProduct.id=1;
        arr.push(newProduct);
        // console.log(arr);
        // fsPromises.writeFile("./data2.json",JSON.stringify(arr));

    }
    else{
        // const newProduct=data;
        newProduct.id=(arr[len-1].id)+1;
    //     const newId=db[len-1];
    arr.push(newProduct);
    fsPromises.writeFile("./data2.json",JSON.stringify(arr));
     }
    res.json({
        status:'success',
        results:1,
        data:{
            newProduct:newProduct,
        }

    });
})
app.listen(1600);