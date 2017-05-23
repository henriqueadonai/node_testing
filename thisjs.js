var customer = {
    firstName: "henrique",
    lastname: "cabral",

    greetGuy : function(){
        console.log("Hello great " + this.firstName + " " + this.lastname + "!");

    },
    whatIsMyObject: function() {
    console.log(this);
    },
    address: {
        askAddress: function(){
        console.log("Dear " + this.firstName + ", please enter your address");
        },
        whatIsMyObject: function() {
            console.log(this);
        }
    },
    calculateAge: function(currentYear, birthDate){
       console.log(this.firstName + " is " + (currentYear - birthDate) + " years old.");
    }
}


customer.greetGuy();
customer.whatIsMyObject();
customer.address.askAddress(); // Prints "Dear undefined, please enter your address"
customer.address.whatIsMyObject(); // Prints the object "address" in the console
customer.address.askAddress.call(customer); // Prints "Dear John, please enter your address"
customer.calculateAge(2016, 1956); // Prints "John is 60 years old."

var customer2 = {
  firstName: "Jane",
  lastName: "Smith"
}
customer.calculateAge.call(customer2, 2016, 1984); // Prints "Jane is 32 years old"
customer.calculateAge.apply(customer2, [2016, 1984]); // Prints "Jane is 32 years old"

var customer3 = {
  firstName: "Robert",
  lastName: "Mills"
}
// bind returns a new ageOfCustomer3 with a 'this' that now refers to obj customer3
var ageOfCustomer3 = customer.calculateAge.bind(customer3);
ageOfCustomer3(2016, 1978); // Prints Robert is 38 years old."


function Customer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}
var customer1 = new Customer("Neo", "Matrix");
console.log(customer1.firstName + " " + customer1.lastName); // Prints "John Smith"

var sayCatName= function(catName){
    console.log("My cat's name is " + catName);
}

sayCatName("rubens");