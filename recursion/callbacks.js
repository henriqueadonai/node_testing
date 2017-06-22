// A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’

//In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. 
//Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

function first(){
    setTimeout(function(){
            console.log(1);
    },500);
    
}

function second(){
    console.log(2);
}

first();
second();

function doHomework(subject,callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  console.log('Finished my homework');
});