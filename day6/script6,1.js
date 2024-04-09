console.log('hello');
const arr=[10,22,34];

const ans=arr.map((a)=>{
    console.log(a);
    return a*2;
});
const ans2=arr.map(a=>Math.pow(a,2));

console.log(ans);
console.log(ans2);