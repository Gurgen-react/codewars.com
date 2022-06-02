function doubleChar(str) {
  let strArray = str.split('');   //at first make transform string into array;
  return strArray.map(char => char+char).join('') //every element is a string, make concatenation with "+";
}
