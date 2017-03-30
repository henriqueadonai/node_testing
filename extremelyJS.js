
console.log(" Converting to boolean using !! Operator" );

function Account (cash){
    this.cash = cash;
    this.hasMoney = !!cash;
    this.hasSomeMoney = !cash;
}

console.log("Testing = 100.500");
var account = new Account(100.500);
console.log(account.cash);
console.log(account.hasMoney);
console.log(account.hasSomeMoney);

console.log("Testing = 0");
var account1 = new Account(0);
console.log(account1.cash);
console.log(account1.hasMoney);
console.log(account1.hasSomeMoney);

console.log("Testing = NULL");
var account2 = new Account(null);
console.log(account2.cash);
console.log(account2.hasMoney);
console.log(account2.hasSomeMoney);

console.log();
console.log("Converting to number using + operator ");

function toNumber(strNumber) {
    return +strNumber;
}

console.log(toNumber("10"));
console.log(toNumber("ABC"));
console.log(toNumber(null));
console.log(+new Date());


console.log();
console.log("Short-circuits conditionals");

function Login(){
    console.log(" I'm login in.");
}

var connected = true;

connected && Login();

connected = false;
connected && Login();


console.log();
console.log("Default values using || operator");
function User(name, age) {
    this.name = name || "Henrique Adonai";
    this.age = age || 31;
}

var user1 = new User();
console.log(user1.name);
console.log(user1.age);

var user2 = new User("Neymar","26");
console.log(user2.name);
console.log(user2.age);



console.log();
console.log("Caching the array.length in the loop");
var array =[];

var length = array.length;
for (var i = 0; i < length; i++) {  
    console.log(array[i]);
}

for (var i = 0, length = array.length; i < length; i++) {  
    console.log(array[i]);
}


console.log();
console.log("Detecting properties in an object");

// var document;
// if ('querySelector' in document) {  
//     document.querySelector("#id");
// } else {
//     document.getElementById("id");
// }

console.log();
console.log("Getting the last item in the array");
var array = [1,2,3,4,5,6,7,8,9];
console.log(array.slice(-1));
console.log(array.slice(-2));
console.log(array.slice(-3));



console.log();
console.log("Array truncation");
var array = [1,2,3,4,5,6,7,8,9];
console.log(array.length);
array.length =3;
console.log(array.length);


console.log();
console.log("Replace all");

var string = "Julia Cristina"
console.log(string.replace(/a/,"ana"));
console.log(string.replace(/a/g,"ano"));




console.log();
console.log("Merge Arrays");
var array1 = [1, 2, 3];  
var array2 = [4, 5, 6];  
console.log(array1.push.apply(array1, array2)); // [1,2,3,4,5,6];






























