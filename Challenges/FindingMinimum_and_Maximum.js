//JavaScript: Finding Minimum and Maximum values in an Array of Objects
"use strict"

//Create a large array
const data = [];

for (let x = 1; x <= 100000; x++){
    data.push({x : x, y: Math.floor(Math.random() * (1000000))})
}

console.log(data.length);


//Using Reduce is a handy Array Method that applies a function against an accumulator
//and each element in the array (from left to right) to reduce it to a single value

let functionsum = [1, 2, 3].reduce(function(total, num){  return total + num}, 0);
let sum = [1, 2, 3].reduce((total, num) => total + num, 0);

console.log(functionsum);
console.log(sum);

function getMinYReduce(){
    return data.reduce((min,p)=> p.y < min ? p.y :min, data[0].y);
}

function getMaxYReduce(){
    return data.reduce((max,p)=> p.y > max ? p.y : max, data[0].y);
}

console.log(getMinYReduce());
console.log(getMaxYReduce());


//For is twicer faster
function findMinMax(arr){
    let min = arr[0].y, max = arr[0].y;
    for (let i=1; i < arr.length; i++){
        let v = arr[i].y
        min = v < min ? v : min;
        max = v > max ? v : max;
    }
    return [min,max];
}

console.log(findMinMax(data));





