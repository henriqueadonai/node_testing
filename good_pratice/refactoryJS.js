"use strict";
var _ = require('underscore');


function Employee(name, salary){
    this.name = name;
    this.salary = salary;
}


function Department(employee,employees){
    this.works = function(employee){
        return _.contains(employees, employee);
    }
}


function averageSalary(employees, minSalary, department){
  var total = 0
  var count = 0
  employees.forEach(function(e){
    if(minSalary < e.salary && (department == undefined || department.works(e,employees))){
      total += e.salary
      count += 1
    }
  })
  return (count == 0) ? 0 : total / count
}

function and(predicates){
  return function(e){
    return _.every(predicates, function(p){return p(e)})
  }
}


function createEmployees () {
  var empls = [
  new Employee("Jim", 100),
  new Employee("John", 200),
  new Employee("Liz", 120),
  new Employee("Penny", 30),
  new Employee("Leo", 60),
  new Employee("Sheldon", 40),
  ]
  var sales = new Department([empls[0], empls[1]])
  console.log("SALES")
  console.log(sales);
    var av1 = averageSalary(empls, 50, sales);
    console.log("AVERAGE SALARY");
    console.log(av1);
    if (av1 == 150){
        console.log("working=" + av1);
    }

    var av2 = averageSalary(empls, 50);
    console.log(av2);
    if (av2 == 140){
        console.log("working=" + av2);
    }  

    //averageSalary(empls, [function(e){return e.salary > 50}, sales.works]))
    //  var filtered = _.filter(employees, and(conditions))


   let filtered = _.filter(empls,function(num){ return num.salary > 50;} );
    console.log(filtered);

   let salaries  = _.pluck(filtered, 'salary' );
   console.log(salaries);

   let totalsalaries = _.reduce(salaries, function(a,b){return a + b}, 0);
   console.log(totalsalaries);

}





createEmployees();