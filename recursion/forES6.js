"use strict"
let iterable = [10,20,30,40,50];

for (let value of iterable){
    value +=1;
    console.log(value);
}

//You can use const instead of let too, if you don't reassign the variable inside the block.
for (const value of iterable){
    console.log(value);
}


console.log("Interation over a String");
let iterableString = 'Adonai';
for (let value of iterableString){
    console.log(value);
}


//Iterating over a Map
let iterableArrayMap = new Map([['a', 1], ['b', 2], ['c', 3]]);
for (let entry of iterableArrayMap){
    console.log(entry);
    console.log(entry[0]);
}

//Arguments
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);