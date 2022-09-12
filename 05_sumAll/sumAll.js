const sumAll = function(a, b) {
  let sum = 0;

  if (a < 0 || b < 0) {
    return "ERROR";
  } else if (typeof a !== "number" || typeof b !== "number") {
    return "ERROR";
  }

  if (a > b) {  // if a > b the loop wont work
    a = a + b;
    b = a - b;
    a = a - b;
  }

  for (let i = a; i <= b; i++) {
    sum += i; 
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
