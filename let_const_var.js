
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
        console.log(winner);
    }
    console.log(winner);

    //Don't work because of let.
    //let points = 60
    points = 60;

    //Don't work because it's const
    //key = `def456`;
    //person = { weather: "hot"};
    person.age = 33;

}

console.log(variables());


