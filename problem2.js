// we will write a function name as "matchFinder()" which will take two string parameter input.
function matchFinder(string1, string2) {
  // return error message if the parameter are not strings.
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide string as parameter";
  }
  // will try to find match between the two strings.
  const result = string1.includes(string2);
  // return true or false based on the match.
  return result;
}
console.log(matchFinder("12", "true"));
// console.log(matchFinder("John Doe", "ohn"));
// console.log(matchFinder("JavaScript", "Code"));
// console.log(matchFinder("Peter Parker", "Pen"));
// console.log(matchFinder("Peter Parker", "pet"));
