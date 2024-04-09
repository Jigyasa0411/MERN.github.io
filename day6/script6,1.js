// 
// const arr=[10,22,34];
// const arr2=[10.11,22.32,34.76];
// const ans3=arr.map(a=>parseInt(a));
// console.log(ans3);
// const arr=[10,22,34];
// const ans=arr.push(99);
// const arr2=arr.map((a)=>a*2);
// console.log(ans);
// console.log(arr1);
// console.log(arr2)
// const arr=[10,22,34];
// const ans=arr.filter((a)=>{
//     if(a>20 )return true;
//     else return false;
// })
// console.log(arr);
// console.log(ans);
// const arr=[
//     'Delhi','Mumbai','Chennai','Kolkata','Pune','India','Russia','USA'
    
// ]
// const ans=arr.filter((s)=>{
//     if(s.includes('i')|| s.includes('I')){
//         return true;
//     }
//     else false;
// });
// console.log(ans);
// const arr=[
//     'Delhi','India','Mumbai-india','Chennai-INDIA','Shanghai','China','Beijing','china',
//     'Washington' ,'USA','Texas,USA','Iraq'
// ]
// const ans=arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     if(ns.includes('india')){return true;}
//     else{return false;}
// });
// console.log(ans);
// const arr=[10,22,34,50];
// const ans=arr.reduce((total,curr,c,d)=>{
//     console.log(total,curr,c,d);
//     return total+curr;
// });
// console.log(ans);
const arr=['ab','cd','xy','z'];
const ans=arr.reduce((total,curr)=>{
    console.log(total,curr);
});
console.log(ans);




