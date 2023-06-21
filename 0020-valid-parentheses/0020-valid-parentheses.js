/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const bracketSet = {
    "[": "]",
    "(": ")",
    "{": "}",
  };
  const charStack = s.split("");
  const validationStack = [];

  for (let i = 0; i < s.length; i++) {
    const char = charStack.shift();
    
    bracketSet[validationStack.at(-1)] === char
      ? validationStack.pop()
      : validationStack.push(char);
  }

  return !validationStack.length;
};
