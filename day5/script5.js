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
// console.log('GEC start');

//  function printpretty(){
//     console.log('prettystart');
//     let ans=2+3;
//  console.log(ans);
//  console.log('prettyEnd');
// }

// // setTimeout(printpretty, 10000);
// // console.log('GEC End');
// const btn=document.getElementById('btn');
// btn.addEventListener("click",printpretty);
// console.log('start')
// // const req =fetch("https://api.github.com/users/vikhyat9690");

// // console.log(req);
// // req.then(()=>console.log('Fetched'));

// // console.log('End');
//  const  req=fetch('https://dummyjson.com/products/1')
// const res=req.then(res=> res.json())
// res.then((data)=>console.log(data));
// //.then(res => console.log(res))
// // .then(json => console.log(json))
// console.log('End');
console.log("hello");
function callApi(){
 fetch("https://newsapi.org/v2/top-headlines?country=in&apikey=00f57a85abee4418ac93ddd066f4bbf0")
 .then(res=>res.json())
 .then((data)=>{
    //console.log(res);
    renderUI(data);
 })
}
//   //callApi();
  
  function renderUI(data){
   
    //console.log(articles);

    const root = document.getElementById("root");
    const articles= data.articles;
    for(let i=0;i<articles.length;i++){
   const ar=articles[i];
   //console.log(ar);
   const div=document.createElement("div");
   div.setAttribute("class","news-card");

   const h3=document.createElement("h3");
   h3.innerText = ar.title;
   //h3.innerchild()
    const img=document.createElement("img");
    img.src=ar.urlToImage;
    div.appendChild(h3);
    div.appendChild(img);
    root.appendChild(div);
    const a=document.createElement("a");
    a.innerText='read more....'
    }

  }
  callApi();