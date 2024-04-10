// const figlet=require("figlet");
// figlet("jigyasa",(err,data)=>{
//     console.log(data);
// })
// fetch('https://api.github.com/users/deepak3440').then((res)=>{
//      return res.json();

// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('Erroe occurred!')
// })
async function getApi(){
    const pr= await fetch('https://api.github.com/users/deepal3440')
   console.log(pr);
   const data=await pr.json()
}
 getApi();