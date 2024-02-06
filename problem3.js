// make a function name as sortMaker() , which will take an array as input .
function sortMaker(arr) {
  // access the elements of the input array .
  const [a, b] = arr;
  // if any element is negative , then return "Invalid Input" .
  if (a < 0 || b < 0) {
    return "Invalid Input";
    // if element are equal , than return "equal" .
  } else if (a === b) {
    return "equal";
    // if element is not equal then return in descending order .
  } else if (a > b) {
    return [a, b];
  } else if (a < b) {
    return [b, a];
  }
}
console.log(sortMaker([2, 3]));
console.log(sortMaker([4, 2]));
console.log(sortMaker([4, 4]));
console.log(sortMaker([1, 2]));
console.log(sortMaker([4,-2]));