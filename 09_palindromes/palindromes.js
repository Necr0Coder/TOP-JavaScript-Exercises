const palindromes = function (str) {
  //make lowercase and replace spaces and special characters with nothing.
  let newStr = str.toLowerCase().replace(/[^a-z]/g, "");

  return newStr.split("").reverse().join("") == newStr;
};

// Do not edit below this line
module.exports = palindromes;
