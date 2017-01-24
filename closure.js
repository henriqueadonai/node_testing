const arr = [3,6,9,12,15,18,21,24,27,30]
for (var i=0; i< arr.length; i++){
    setTimeout(function(){
        console.log('The index is ' + i);
    }, 3000 )
}

console.log();

for (var i=0; i< arr.length; i++){
    setTimeout(function(i_local){
        return function(){
            console.log('The index is ' + i_local);
        }
    }(i), 3000);
}

console.log();

// for (let i = 0; i < arr.length; i++) {
//   // using the ES6 let syntax, it creates a new binding
//   // every single time the function is called
//   // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
//   setTimeout(function() {
//     console.log('The index of this number is: ' + i);
//   }, 3000);
// }