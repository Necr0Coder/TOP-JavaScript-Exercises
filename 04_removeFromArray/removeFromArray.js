const removeFromArray = function (array, item) {
  console.log(array);

  var i = 0;
  while (i < array.length) {
    if (array[i] === item) {
      array.splice(i, 1);
    } else {
      ++i;
    }
  }
  console.log(array);
  return array;
};

//function (array, arg 1, ...arg)
//    create array from ...arg
//    get index of ...args from array
//    remove ...args from array and create new array
//    return new array

//  TOP SOLUTIONS INCLUDE forEach METHOD.  RESEARCH forEach.

// Do not edit below this line
module.exports = removeFromArray;
