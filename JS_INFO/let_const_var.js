//Const and let introduced block scope to Javascript 
// First, I look at const. If I’m not intending to do any reassignment, then const is a clear winner. 
//(You should use const whenever you can.) Next, I look to let. And I basically use let in every situation where I don’t use const, 
//ie, there will be a reassignment. My last choice is var. If for some reason, neither const nor let will provide me with the needed behavior, 
//then fine, var it is…

function variables(){
    "use strict";
    const key = `abc123`;
    let points = 50;
    let winner = false;
    

    const person = {
        name: 'Rick',
        age: 31,
        gender: 'male'
    }

    if (points > 40){
        let winner = true;
        console.log("winner = points > 40");
        console.log(winner);
    }
    console.log("winner");
    console.log(winner);

    //Don't work because of let.
    //let points = 60
    console.log("let points = 50")
    console.log(points)
    console.log("let points = 60")
    points = 60;
    console.log(points)

    //Don't work because it's const
    //key = `def456`;
    //person = { weather: "hot"};
    person.age = "OLD";
    console.dir(person);

    console.log("KEY")
    console.log(key);
    //key = "henene"
    //console.log(key)

}

console.log(variables());


