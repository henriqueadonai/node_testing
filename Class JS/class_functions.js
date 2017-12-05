//https://hackernoon.com/javascript-and-functional-programming-pt-2-first-class-functions-4437a1aec217

const constFunction = () => console.log("Hello there!!");

constFunction();

() => constFunction


//Functions as values of keys of an object
const functionAsObjectProperty = {
    print: (value) => console.log(value),
    sum: (a,b) => a+b
}

functionAsObjectProperty.print("HI Henrique")
console.log(functionAsObjectProperty.sum(5,5));


//function as array items

const sum =(x,y) => x +y;
const subtract =(x,y) => x +y;
const multiply =(x,y) => x +y;

const arrayOfFunctions = [sum,subtract,multiply]

console.log("Testing functions");
console.dir(arrayOfFunctions)
console.log(arrayOfFunctions[0](2,2));

// function that accepts a function as input
arrayOfFunctions.forEach(calculationFunction => console.log(calculationFunction(1,1)));


//setTImeout
// function that accepts a function as input
//A higher order function is a function that takes a function as an argument, or returns a function.
const timeout = () => {
    setTimeout(()=> console.log("WOW"),1000);
}

console.log(timeout());


//Let's build our higher order function

const addWrapper = () => (x,y) => x + y

const add = addWrapper();

const sum1 = add(1,1);
//or
const sum2 = addWrapper()(4,4);

console.log(sum2);


const bankStatement =
        name =>
            location =>
                balance =>
                    `Hello ${name} ! Welcome to the bank of ${location}. Your current balance is ${balance}`

const statementExpectingLocation = bankStatement("Omer");
const statementExpectingBalance = statementExpectingLocation("NYC");
const bankStatementMsg = statementExpectingBalance("100 million"); // wishful thinking?

console.log(bankStatementMsg);

const msg = bankStatement("Jeff Bezos")("Silicon Valley")("97.7 billion");
console.log(msg); 