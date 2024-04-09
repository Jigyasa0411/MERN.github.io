// setTimeout(()=>{console.log('timeout')},0)
// console.log('start')
// setTimeout(()=>{console.log('Timeout...')},0);
// console.log('intermediate')
// console.log('end')
// function createOrder('soap'){
//     console.log(x)
//     setTimeout(()=>{fn('lik123')},10000)


// }
// function makePayment(orderID){
//     console.log(orderID)
// }
// createOrder('soap',makePayment;)
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {reject("some items are out of stock"):}0);
        
//     });
//     console.log(pr)
//     pr.then((res)=>{
//         console.log(res);
//     }).catch((err)=>{console.log(err);})
// //     if(id=='ise123'){
//        resolve();
// } Math.random()%1
//   else{
//     reject();
// }   
// });
// console.log(pr);
setTimeout(function abc(){ console.log('I am one');},0);
const pr= new Promise((res,rej)=>{setTimeout(()=>{res('done')},0);})

pr.then(function b(res){
    console.log("promise completed",res);
});
setTimeout(function xyz(){
    console.log('I am top');
})