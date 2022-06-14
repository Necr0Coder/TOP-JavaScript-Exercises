const repeatString = function (hey, num) {
  string = "";
  if (num < 0) return "ERROR";
  for (i = 0; i < num; i++) {
    string += hey;
  }
  return string;
};
// Do not edit below this line
module.exports = repeatString;
