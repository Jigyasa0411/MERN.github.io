const app=express();
app.use(expres.json());
app.get('/api/products',async(req,res)=>{

});
app.post('/api/products',async(req,res)=>{

});
app.put('/api/products/:id',async(req,res)=>{
    // const arr= JSON.parse(await fspromises.readFile("./data2.json","utf8"))
    // res.send("work in progress...");
    // const reqId=parseInt(req.params.id);
    // const data=req.body;
    // data.id=reqId;
    // const newArr=arr.mao((elem)=>{
    //     if(elem.id==reqId)return data;
    //     else {
    //         return elem;}
    // });
    // // console.log(data);
    // fsPromises.writeFile("./data2.json",JSON.stringify(arr));
    // res.json{
    //     status:'success';
    //     results:arr.length,
    //     data;{
    //         products:arr
    //     }
    // }

})

app.listen(1600);
