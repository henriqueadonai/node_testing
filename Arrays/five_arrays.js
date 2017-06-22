
//Array.forEach()
//simply loops through the elements
//Use .forEach() as a quicker way of writing a traditional for loop.
var animals =['dog','cat','mouse','horse','rabbit'];

animals.forEach(function(item,i, arr){
    console.log(i);
    console.log(item);
})


//Array.map()
//will loop your array and return a new array based upon returns statements
//Use .map() if you want to change each of the elements in the array, and store the result in a new array.
var numbers = [19,21,32,27,26,6];


var doubleNums = numbers.map(function (element) {
    return element *2;
})

var smallerThan20 = numbers.map(function(element){
    if (element < 20){
        return element
    }else{
        return null
    }
})

console.log('DoubleNumbs: ', doubleNums);
console.log('smaller than 20:' , smallerThan20);

//Array.filter()
//will remove the elements that don't pass the condition 
//Use .filter() when you want to filter away some of the elements of the array, while keeping others.
var scores =[0,1,2,3,4,5,6,7,8,9,10]

var topScores = scores.filter(function (item) {
    if (item >7){
        return true;
    }else{
        return false;
    }
})

console.log('Top Scores: ', topScores);



//Array.indesOf()
//Tells you where your element is localed in the array by returning its index.
//Use .indexOf() when you want to find out where a certain element is positioned.
var fullname =['henrique','adonai','alves','cabral']


var i = fullname.indexOf('adonai');
console.log('i: ', i);


//Array.every()
//will return true if the callback returns true on all of the elements
//Use .every() if you want to know if every single element in the array pass a certain condition.
var ages =[18,10,23,9,19,15];

var olderThan18 = ages.every(function (element) {
    return element > 18;
})


console.log('olderThan18: ' , olderThan18);






