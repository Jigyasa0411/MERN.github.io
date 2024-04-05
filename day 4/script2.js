// let a =new String("hello");
// let b="hello";

// if(a==b){
//     console.log('yes');
// }
// else{
//     console.log("no");
// }

// const obj={
//     "name": "Ajay",
//     "lastname":"singh",
// }
// // // const str=json.stringify(obj);
// // // // console.log(obj);
// // // // document.write(obj);

// // obj.name=20;
// // console.log(obj);

// const arr=[1,2,3,4];
// arr[10]=20;
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

//program to find if it is object or not
function checkIfObject(variable) {
    if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
        return 'yes';
    } else {
        return 'no';
    }
}


const variable1 = { a: 1, b: 2 };
const variable2 = [1, 2, 3];
const variable3 = 'Hello';
console.log(typeof(variable3));

console.log(checkIfObject(variable1)); 
console.log(checkIfObject(variable2)); 
console.log(checkIfObject(variable3)); 



