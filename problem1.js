// make cube of a provided number.
// function will receive a parameter which will be number.

function cubeNumber(number) {
  // Return error message if we get other data types
  // instead of number.

  if (typeof number !== "number") {
    return "Please provide a number!";
  }

  // Convert thr number to cube.

  const result = Math.pow(number, 3);

  // Return the result.

  return result;
}

console.log(cubeNumber(5));
