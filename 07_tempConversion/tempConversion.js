const ftoc = function(temp) {           //subtract 32 and multiply by .5556 (or 5/9)
 let newTemp = 0;
  newTemp = .5556 * (temp - 32);
  temp = newTemp.toFixed(1);
  return temp;
};

const ctof = function(temp) {       //multiply by 1.8 (or 9/5) and add 32
  let newTemp = 0;
  newTemp = temp * 1.8 + 32;
  temp = newTemp.toFixed(1);
  return temp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
