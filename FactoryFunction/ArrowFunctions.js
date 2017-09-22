//has implicit return
const noop = () => {foo: 'bar'};
console.log(noop);
console.log(noop());


const createName = () => ({name : 'Henrique'});
console.log(createName);
console.log(createName());


const rotate = ([first, ...rest]) => [...rest, first];


// const swap = ([first, second]) => [second, first];
// console.log( swap([1, 2]) ); // [2, 1]

// const swap = ([first,second]) => [second,first];
// console.log(swap([1,2]));
//https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1

