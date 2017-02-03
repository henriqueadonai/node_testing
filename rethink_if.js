"use strict";

const add = (x,y) => console.log(x+y);

add(10,5);

const customerMissingLogin = {
    name: "henrique",
    email: "henrqiue@mail.com.br",
    login: ""
}

const customerComplete = {
    name: "cabral",
    email: "cabral@mail.com.br",
    login: "hcabral"
}



const isGreaterThan5 = x => x > 5 ? 'YEP' : 'NOPE';

let tes = isGreaterThan5(6) ;
console.log(tes);
let tes1 =isGreaterThan5(5);
console.log(tes1);

function isCustomerValid(customer){
    if(customer == "henrique"){
        return true;
    }else{
        return false;
    }
}

function saveCustomer(customer){
    if(isCustomerValid(customer)){
        console.log("Customer Valid");
    }else{
        console.log("Customer Invalid");
    }
}

saveCustomer('henrique')
saveCustomer('adonai')

//ternary equivalent
function  saveCustomerTernary(customer){
    return isCustomerValid(customer) ? console.log("Customer Valid") : console.log("Customer Invalid")

}


console.log("Ternary")
saveCustomerTernary('henrique');
saveCustomerTernary('adonai');


//ES6 STYLE
const saveCustomerES6 = customer => isCustomerValid(customer) ? console.log("Customer Valid") : console.log("Customer Invalid");
console.log("ES6 Style");
saveCustomerES6('henrique');
saveCustomerES6('adonai');


// old school else-if
function customerValidation(customer) {
  if (!customer.email) {
    return console.log('email is require')
  } else if (!customer.login) {
    return console.log('login is required')
  } else if (!customer.name) {
    return console.log('name is required')
  } else {
    return console.dir(customer)
  }
}

customerValidation(customerMissingLogin);
customerValidation(customerComplete);

//ES6 Style
const customerValidationES6 = customerTesting => 
        !customerTesting.email ? console.log("email is require ES6"):
        !customerTesting.login ? console.log("login is required ES6"):
        !customerTesting.name ? console.log("name is required ES6")
                : console.dir(customerTesting)

customerValidationES6(customerMissingLogin);
customerValidationES6(customerComplete);



