const removeFromArray = function (...args) {
  let array = args[0]; //pull array from list of arguments

  let newArray = []; //create empty array
  array.forEach((item) => {
    //cycle through array.
    if (!args.includes(item)) {
      newArray.push(item); //push item into newArray unless it is included in the function arguments
    }
  });
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
