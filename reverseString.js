
function reverseString(str){
    var splitString = str.split("");
    var reverseArray  = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}


function AllTogether(str){
    return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));
console.log(AllTogether("Hello"));

console.log();

function reverseStringFor(str){
    var newString = "";
    for (var i = str.length -1; i >= 0; i --){
        newString += str[i];
    }
    return newString;
}
console.log("reverseStringFor");
console.log(reverseStringFor("Adonai"));


console.log();

function reverseStringRecursion(str){
    console.log(str);
      if (str === "")
    return "";
  else
  //console.log(str.substr(1));
    return reverseStringRecursion(str.substr(1)) + str.charAt(0);
}


console.log();
console.log("reverseStringRecursion");
console.log(reverseStringRecursion("Adonai"));
console.log();

