//Closure is when a function is able to remember and access the variables of the outr (enclosing)
//function even when that function is executing outside its scope.

for (var i =0; i <10; i ++){
    setTimeout(function(){
            console.log(i);
    },i+1000);
}



function myFunction( number1){
    function   add (number2){
        /* The number1 variable is accessible from this function, 
	    because number1 has been defined outside of the add function */
        return number1 + number2;
    }
/* As we saw earlier, add is a function but also a variable; 
	I can render it as a result of myFunction. 
	Note that when you return a function without the (), 
	you are returning the function definition, you are not calling 
	the function to execute. This allows you to call the function later.*/
    return add;
}
console.log("Myfunction")
console.log(myFunction());

var soma = myFunction(10);
console.log(soma(5));


function bakeCake(ingredient){
    // Code that adds the ingredient to the cake batter
    console.log(ingredient+ ' cake : add ' +ingredient+ ' to the batter');
  
    function ovenTemperature(temperature, time){
        // Code that sets the right temperature for baking the cake
        console.log('Set the oven temperature to ' +temperature+' and ready to bake the '+ingredient+' cake for ' +time+ ' minutes');
    }
    return ovenTemperature;
}

// We are preparing two cakes : let’s first add the ingredients and we’ll see for the rest of the recipe later.
var chocolateCake = bakeCake('chocolate');
var carrotCake = bakeCake('carrot');

chocolateCake(250, 70);
carrotCake(200, 90);
bakeCake('avocado')(100,10);


//applying closure

for(var i = 0; i<10; i++){
    function timer(j){
        setTimeout(function(){
            console.log(j);

        },j *1000);
    }
    timer(i);
}