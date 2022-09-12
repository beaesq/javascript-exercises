const reverseString = function(initialString) {
  
  let newString = '';

  for (let i = initialString.length; i > 0; i--) {
    newString += initialString.charAt(i - 1);
  }
  return newString;

};

// Do not edit below this line
module.exports = reverseString;
