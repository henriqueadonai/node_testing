
//Return just unique letters
//adidas = i
//bob = o
//abc = abc
//henrique == hnriqu


function returnLettersUniqFor(str){
    var strTest = str;
    let returnString = "";
    for(let i = 0; i <= str.length -1; i++){
        //console.log(str[i])
        var countLetters = 0;
        for(let j = 0; j <= strTest.length -1; j++){
            if(strTest[j] === str[i]){                
                countLetters += 1;
            }
        }        
        if (countLetters === 1){
            returnString += str[i];         
        }
        
    }
    return returnString;
}

//console.log(returnLettersUniqFor("henrique"));


function DeleteDuplicatesLetters(str){
    let test = str.split("")
    let uniq = test.filter(function(value, index, self){
        return index === self.indexOf(value)
    } )
    console.log("result")
    console.log(uniq);
}


//console.log(DeleteDuplicatesLetters("adidas"));

//The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, 
//searching backwards from fromIndex. Returns -1 if the value is not found.
//str.indexOf(searchValue[, fromIndex])
function OnlyUniqLetters(str){
    let test = str.split("");
    test.map(function(value,i){
        if(str.indexOf(value ,i+1)==-1 && str.lastIndexOf(value,i-1)==-1){ // another and condition            
            console.log(i)
            console.log(value)
        }
        //console.log(obj);
        //console.log(i);
    })
}

//console.log(OnlyUniqLetters("bob"))

function OnlyUniqLettersForIndexOF(str){
    let uniq = ""
    for(let i= 0; i <= str.length; i++){
        if(str.indexOf(str[i], i +1) === - 1 && str.lastIndexOf(str[i], i -1)){
             uniq += str[i];
        }        
    }
    console.log(uniq);
}

OnlyUniqLettersForIndexOF("bob")
