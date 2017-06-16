// null is an assigned value. It means nothing.
// undefined means a variable hasn’t been declared yet.
// null is an object. undefined is of type undefined.
// null !== undefined but null == undefined.

var test1 = null;
console.log(test1);
// null

console.log(typeof test1);
// object

var test2;
console.log(test2);
// undefined

console.log(typeof test2);
// undefined