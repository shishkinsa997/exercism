//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const open = {
  "[": "]",
  "{": "}",
  "(": ")",
};

const close = {
  "]": "[",
  "}": "{",
  ")": "(",
};

export const isPaired = (str) => {
  let stack = [];
  for (let char of str) {
    if (char in open) {
      stack.push(char)
    }
    if (char in close && close[char] === stack[stack.length - 1]) {
      stack.pop()
    }
    else if (char in close) {
      stack.push(char);
    }
  }
  console.log(stack)
  return stack.length == 0
};
