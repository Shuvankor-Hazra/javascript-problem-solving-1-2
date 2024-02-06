// define a function name as "findAddress()" which will take an object as input .
function findAddress(obj) {
  // access the element of object and replace the missing property with double underscore (__) .
  const street = obj.street || "__";
  const house = obj.house || "__";
  const society = obj.society || "__";
  // formation of the string as give sample "10,15A,Earth Perfect" .
  const str = street + "," + house + "," + society;
  // return the result .
  return str;
}
console.log(findAddress({ street: 10, house: "15A", society: "Earth Perfect" }));
// console.log(findAddress({street:10,house:"15A"}));
