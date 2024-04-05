// const firstNameChange=(e)=>{
//     // const val=e.target.value;
//     //  if(val.length>3){
//     //     console.log('correct');
//     //  }
//     console.log(e);
// }
const firstNameChange=()=>{
    console.log("firstname");

}
function submitForm(e){
    e.preventDefault();
    //console.dir(e.target.value);
    const t= e.target
    const res={};
    for(let i=0;i<t.length;i++){
    //    console.dir(t[i].value);
    //    console.log(t[i].type);
       const ty=t[i].type;
       const vl=t[i].value;
       const nm=t[i].name;
       console.log(nm,ty,vl);
       res[nm]=vl;
       if(ty=='checkbox'){
        console.log(t[i].checked)
       }
    }
}