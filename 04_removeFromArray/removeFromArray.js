const removeFromArray = function (a, b) {
  let array = arguments[0]; //create array of argument A
  console.log(array);

  let index = array.indexOf(b); //index of argument B inside of array
  newArray = array.splice(b, b - 1);
  console.log(newArray);
  return newArray;
};

//function (array, arg 1, ...arg)
//    create array from ...arg
//    get index of ...args from array
//    remove ...args from array and create new array
//    return new array

//  TOP SOLUTIONS INCLUDE forEach METHOD.  RESEARCH forEach.

// Do not edit below this line
module.exports = removeFromArray;
