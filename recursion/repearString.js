function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatedString = "";
  while (num> 0){
    repeatedString += str;
    num --;
  }
  return repeatedString;
}

//repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("*", 3));

  /* While loop logic
                      Condition       T/F       repeatedString += string      repeatedString        times
    First iteration    (3 > 0)        true            "" + "abc"                  "abc"               2
    Second iteration   (2 > 0)        true           "abc" + "abc"               "abcabc"             1
    Third iteration    (1 > 0)        true          "abcabc" + "abc"            "abcabcabc"           0
    Fourth iteration   (0 > 0)        false
    }
  */

  function repeatStringNumTimesRecursive(string, times) {
  if(times < 0) 
    return "";
  if(times === 1) 
    return string;
  else 
    return string + repeatStringNumTimes(string, times - 1);
}
console.log(repeatStringNumTimesRecursive("abc", 3));


function  repeatStringNumTimesES6(string, times){
if (times > 0)
    return string.repeat(times);
else
    return "";
}


console.log(repeatStringNumTimesES6("Hen",10));
  

  function repeatStringNumTimesES6Ternary(string, times){
      return times > 0 ? string.repeat(times) : "";
  }

  console.log(repeatStringNumTimesES6Ternary("ado", 5));