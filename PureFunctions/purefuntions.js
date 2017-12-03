//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976

//Deterministic predict code
//3 ways to functions
////Mapping inputs and outputs
////procedures
////IO - drawing to screen

//Mapping
////Take inputs and pass to a function and return a output value


//What make a function pure?
//It's always return the same output -- avoid share state and avoid errors

//Impure Functions
//Realey in the Current time itś no a pure - use the time for understand
//Randon number - no pure because 
//everything who depends of IO(user, disk, network)


//side effects
//if you mutate the object not pure anymore

//Redux
//Responsible for the object
//Reducer must be pure functions


const double = x => x*2;

console.log(double(5));