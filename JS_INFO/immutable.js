const a = Object.freeze({
    foo: 'Hello',
    bar: 'world',
    baz: '!'
})

console.log(a.foo);
a.foo = "goodbye"

console.log(a.foo);

//https://github.com/facebook/immutable-js
//https://github.com/swannodette/mori