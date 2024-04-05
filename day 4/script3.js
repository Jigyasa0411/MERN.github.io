// const res=
// document.querySelector('div');
// // console.log(div);
// // div.innerHTML="<p>hello</p>"
// // div[0].innerHTML="<p>hello</p>"
// const c=document.querySelector('p:nth-of-type(2)');
// console.log(res);

// res.removeChild(c);
function getInfo(e){
//     const d=document.querySelector("div");
//    // const el=document.createElement("");
//     el.innerText="btn was clicked";
    // d.prepend("my name is jigyasa");
    // let txt = document.querySelector(".text");
    // console.log("Btn clicked");
    // txt.innerHTML="this button was clicked";
    console.log(e);
    // style.attribute('style','color:red')
    // style.attribute('style','backgroundcolor:green')
    e.target.style.backgroundColor='red';
    e.target.style.color='green'
}
