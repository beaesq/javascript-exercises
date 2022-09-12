const removeFromArray = function(array) {

  let numberOfArgumentsToRemove = arguments.length - 1;

  for (let i = 1; i <= numberOfArgumentsToRemove; i++) {
    let indexToRemove = array.findIndex((arg) => (arg === arguments[i])) ;
    //console.log(indexToRemove);
    if (indexToRemove >= 0) {
      array.splice(indexToRemove, 1);
    }
  }
  
  return array;
};


// Do not edit below this line
module.exports = removeFromArray;
