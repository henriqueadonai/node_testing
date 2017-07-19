function factorial (n){
    if (n === 1){
        //console.log(1);
        return 1;
    }
    //console.log(n);
    return n * factorial(n-1);
}

//console.log(factorial(5));
var reverseSTR = "";

function reverse(str){
    if (str.length <= 1){
        console.log(" str" );
        console.log(str);
        return str;
    }
    //console.log(" str[0] " )
    //console.log(str[0])
    //console.log(str.substr(1))
    
    return reverse(str.substr(1)) +str[0];
}

console.log(reverse('henrique'));
var nome = 'Henrique'
//console.log(nome[0]);
//console.log(nome.substr(1) + nome[0]);
//console.log(nome.substr(1));

//console.log(Array.from(nome));
