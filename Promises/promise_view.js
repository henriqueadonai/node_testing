
const arraytest = ['1','2','3','4','5'];

var arrayPush = [];

//console.log(arraytest[3])


function returnArray(statusID){
    return new Promise(function (resolve, reject) {
    if(statusID === 1){
       resolve(arraytest);
    }else{
        resolve(null);
    }
});
}


function TestingPromiseArray (statusID) {
    // returnArray(1).then(function(x){
    //     arrayPush.push(x)
    //     console.log(arrayPush.length)
    //     console.log(arrayPush)
    // });

    //WORKS
    //returnArray(1).then((x) => arrayPush.push(x))
    
    //(node:6177) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): TypeError: Array.prototype.push called on null or undefined
    //returnArray(1).then(arrayPush.push)

    //ReferenceError: x is not defined
    //returnArray(1).then(arrayPush.push(x));

}

TestingPromiseArray(1);
