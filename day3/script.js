//var message='Hello world';
//var age=10;
//age="done";//loosely typed

//hoisting
//console.log(message);
//var message="hello";
//console.log(message);
//message="else";
//console.log(message);
 

function enc(){
    console.log(message);
    var message ="hello";
    console .log(message);
    var message= "else";
    console.log(message);
}

enc

function env(){
    for(var i=0;i<5;i++){
        console.log('---',i);
    }
    console.log(i);
}


env  

//gobally intoduction
//
let message="hello";
message="else";
console.log(message);

let userAge="abcs";
userAge="abcs";
console.log(typeof(userAge));
let arr=['a','b','c','d'];
arr[0]='abcd';
console.log(arr);


let str="12";
let age=20;
let ans=age+str;
console.log(ans);
