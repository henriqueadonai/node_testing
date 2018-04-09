
//https://medium.com/dailyjs/7-hacks-for-es6-developers-4e24ff425d0b

//SWAP VARIABLES
let a = 'world', e = 'hey'; 
let b = 'hello';

[a,b] = [b, a];

console.log(a,b);


//Debugging

const ab = 5,  bb = 6, cb = 7;

console.log({ab,bb,cb});
console.log(ab);


//Hack #4 — One liners
//Find MAX

const max = (arr) => Math.max(...arr);

console.log(max([11,13,20,99,22,44,55]));

//Sum

const sum = (arr) => arr.reduce((a,b)=> (a+b),0);
console.log(sum([1,2,3,4,5]));

const sum10 = (arr) => arr.reduce((a,b)=> (a+b),10);
console.log(sum10([1,2,3,4,5]));


//Hack #5 — Array concatenation

const one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']

const result = one.concat(two,three);
console.log(result);

const resultNew = [...one, ...two, ...three];
console.log(resultNew);


//Hack #6 — Cloning
const obj = { ...one }
const arr = [ ...two ]


//Hack #7 — Named parameters
//getStuffAwesome({ id: 150, force: true, verbose: true })
