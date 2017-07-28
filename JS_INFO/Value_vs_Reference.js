// https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0

//BY VALUE
// 5 Data Types JS - Boolean, null, Undefined, String, Number

//BY REFERENCE
//3 data Types JS - Array, Function and Object



//Testing by Value
var x = 10;
var y = 'abc';
var a = x;
var b = y;
a = 5;
b = 'def';
console.log(x, y, a, b); // -> 10, 'abc', 5, 'def'

//Reference Array
var reference = [1,2];
var refCopy = reference;
console.log(reference, refCopy);


reference.push(3);
console.log(reference, refCopy);


var arrRef = ['Hi!'];
var arrRef2 = arrRef;
console.log(arrRef === arrRef2); // -> true

var arr1 = ['Hi!'];
var arr2 = ['Hi!'];
console.log(arr1 === arr2); // -> false
console.log(arr1 == arr2); // -> false


//Passing Parameters through Functions
var hundred = 100;
var two = 2;
 function multiply(x,y){
     return x *y;
 }

 var twoHundred = multiply(hundred,two);
console.log(twoHundred);


//Pure Functions
//We refer to functions that don't affect anything in the outside scope as Pure FUNCTIONS

//Example IMPURE
function changeAgeImpure(person) {
    person.age = 25;
    return person;
}

var henrique = {
    name : 'henrique',
    age : 32
}


var changedHenrique = changeAgeImpure(henrique);
console.log(changedHenrique);
console.log(henrique);


//Example Pure
console.log("Pure function");
function changeAgePure(person){
    var newPersonObj = JSON.parse(JSON.stringify(person));
    newPersonObj.age = 24;
    return newPersonObj;
}

var henriquePure ={
    name: "Henrique",
    age: 32
}

var henriquePeChanged = changeAgePure(henriquePure);
console.log(henriquePeChanged);
console.log(henriquePure);


//testing pure
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',

    age: 30
};
var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?



foo(arg1, arg2, arg3, arg4);
