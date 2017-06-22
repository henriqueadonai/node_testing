function factorial (n){
    if (n === 1){
        console.log(1);
        return 1;
    }
    console.log(n);
    return n * factorial(n-1);
}

console.log(factorial(5));


function reverse(str){
    console.log(" str" );
    console.log(str);
    if (str.length <= 1){
        return str;
    }
    console.log(" str[0] " )
    console.log(str[0])
    return reverse(str.substr(1)) + str[0];
}

console.log(reverse('bar'));
var nome = 'Henrique'
console.log(nome.substr(1));

console.log(Array.from(nome));
