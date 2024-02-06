// make a function name as canPay() , this will take two parameters .
function canPay(changeArray, totalDue) {
  // if first input is an empty array , return error message .
  if (changeArray.length == 0) {
    return "Your array is empty!";
  }
  // make sum of all the elements of the array .
  let sum = 0;
  for (let i = 0; i < changeArray.length; i++) {
    const element = changeArray[i];
    sum = sum + element;
  }
  // if the sum is greater than or equal second input parameter , return true else return false .
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}

console.log(canPay([1, 5, 5], 10));
