"use strict"

let cars = ['ford','chevy','mazda','ferrari']

let ages = [28,32,49,59];

let iterator = cars.entries();

iterator.next();
iterator.next().value();

