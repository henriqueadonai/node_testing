//https://medium.com/better-programming/you-dont-need-loops-in-javascript-1dc8139eab4b

//1. To Loop Through All Elements and Get an new modified array
var names = ["Henrique", "Thais", "Alice"];
var upperCaseNames = [];

//Loop
for (let i = 0, totalNames = names.length; i < totalNames; i = i + 1) {
    upperCaseNames[i] = names[i].toUpperCase();
}

//Without Loop
var upperCasesNamesNoLoop = names.map(name => name.toLocaleUpperCase());
console.log(upperCasesNamesNoLoop);



//2. Loop through all elements and perform an action

function print(name) {
    console.log('Hello ' + name);
}
//Loop
for (let i = 0, totalNames = names.length; i < totalNames; i = i + 1) {
    print(names[i])
}
//Without Loop
names.forEach(name => print(name));


//3. Filtering Array

function isOdd(n) {
    return n % 2;
}
var numbers = [1, 2, 3, 4, 5];
var odd = [];
for (let i = 0, total = numbers.length; i < total; i = i + 1) {
    let number = numbers[i];
    if (isOdd(number)) {
        odd.push(number);
    }
}
//Without loop
var oddFilter = numbers.filter(n => n > 2);
console.log(oddFilter);


//4. Creating an Output With Array Elements
var numbers = [1, 2, 3, 4, 5]
var result = 0;
for (let i = 0, total = numbers.length; i < total; i = i + 1) {
    result = result + numbers[i];
}


function sum(accumulator, currentValue) {
    return accumulator + currentValue;
}
var initialVal = 0;
var result = numbers.reduce(sum, initialVal);
console.log('result ' + result);

var resultBetter = numbers.reduce((acc, val) => acc + val, 0);
console.log('resultBetter ' + resultBetter);



//5. Checking if an Array Contains a Value

for (let i = 0, totalNames = names.length; i < totalNames; i = i + 1) {
    if (names[i] === "Alice") {
        console.log("%c found " + names[i], "color:red");
        //return;
    }
}

let isAlicePresent = names.some(name => name === "Alice");
console.log(isAlicePresent);
if (isAlicePresent) {
    console.log("%c found Alice", "color:red");
}


//6. To Check Whether Every Element in an Array Meets a Condition
var num = [1, 2, 3, 4, 5, 0, 10, 11];


var isZeroFree = num.every(e => e > 0);
if (!isZeroFree) {
    console.log("0 present in array");
}