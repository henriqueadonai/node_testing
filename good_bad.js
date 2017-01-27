"use strict";
const name = 'Henrique';


function sayHi(name){
    return `How Are you, ${name}?`;
}


console.log(sayHi(name));


[1,2,3,4,5].map((x)=> {
    const  y = x + 1;
    console.log(x *y);
});



var x = [1,2,3,4,5,6,7,8,9,0];
var y = [10,10]



let array = [10,10,10,10,10];
let num = 1;
num += 1;
num -=1;

const sum = array.reduce((a,b) => a+b,0);
console.log("SOMA = " + sum);

const truthyCount = array.filter(Boolean).length;
console.log(truthyCount);


let value1 = 10;
let value2 = 20;

const maybeNull = value1 > value2 ? 'baz': null;
console.log(maybeNull);

const foo = value2 > value1 ? 'bar' : maybeNull;
console.log(foo);



