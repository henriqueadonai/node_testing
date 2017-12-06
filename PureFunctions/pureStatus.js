const x = {
    val: 2
  };
  

  //The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
  //It will return the target object.
  const x1 = x => Object.assign({}, x, { val: x.val + 1});
  
  const x2 = x => Object.assign({}, x, { val: x.val * 2});
  
  console.log(x1(x2(x)).val); // 5
  
  
  const y = {
    val: 2
  };
  
  // Since there are no dependencies on outside variables,
  // we don't need different functions to operate on different
  // variables.
  
  // this space intentionally left blank
  
  
  // Because the functions don't mutate, you can call these
  // functions as many times as you want, in any order, 
  // without changing the result of other function calls.
  x2(y);
  x1(y);
  
  console.log(x1(x2(y)).val); // 5