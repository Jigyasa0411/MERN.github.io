// let arr=[2,10,21,32];
//  function printPretty(elem){
//     console.log(':',elem);
//  }

// function printarray(arr){
//     for(let i=0;i<arguments.length;i++){
//         console.log ( arr[i]);

//     }
//     arr.forEach( (a,b,c)=>{
//         console.log(':',a,b,c);
//      });


        
    
// }
// printarray(arr);
console.log('GEC start');

 function printpretty(){
    console.log('prettystart');
    let ans=2+3;
 console.log(ans);
 console.log('prettyEnd');
}

// setTimeout(printpretty, 10000);
// console.log('GEC End');
const btn=document.getElementById('btn');
btn.addEventListener("click",printpretty);