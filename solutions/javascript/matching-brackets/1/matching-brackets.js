//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const pairs = {
  "[": "]",
  "{": "}",
  "(": ")",
};

export const isPaired = (str) => {
  let newStr = str
  for (let char of newStr) {

    if (char in pairs) {
      if (newStr.includes(pairs[char])) {
        newStr = newStr.replace(char, '').replace(pairs[char], '')
      } else return false
    }
  }
  return true
};
