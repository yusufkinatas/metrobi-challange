const isBracketsCorrect = str => {
  let bracketChars = ["{", "}", "(", ")", "[", "]"];
  let bracketStack = [];
  let errorFound = false;
  let i = 0;

  while (i < str.length && !errorFound) {
    let currentChar = str[i];
    let foundIndex = bracketChars.indexOf(currentChar);
    if (foundIndex !== -1) {
      if (foundIndex % 2 == 0) {
        //evens are opening brackets
        bracketStack.push(currentChar);
      } else {
        //odds are closing brackets
        if (
          bracketStack[bracketStack.length - 1] == bracketChars[foundIndex - 1]
        ) {
          bracketStack.pop();
        } else {
          errorFound = true;
        }
      }
    }

    i++;
  }
  return bracketStack.length == 0 && !errorFound;
};

let testString =
  "asd[as]das[da(sd)asd(ad)as(d(sd)asd)asd{as[da[sd[asd]as]ds]}dadasaaa]";

console.log(isBracketsCorrect(testString) ? "No errors" : "ERROR");
