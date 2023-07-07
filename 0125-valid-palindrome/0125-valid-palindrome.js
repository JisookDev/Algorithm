/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const arr = [];
  const smallS = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    const ascii = smallS.charCodeAt(i);

    if ((48 <= ascii && ascii <= 57) || (97 <= ascii && ascii <= 122)) {
      arr.push(smallS[i]);
    }
  }

  const newWord = arr.join("");

  if (!newWord.length) return true;

  for (let i = 0, j = newWord.length - 1; i <= j; i++, j--) {
    if (newWord[i] !== newWord[j]) return false;
  }
  return true;

};