/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const sObject = {};
  const tObject = {};

  for (let i = 0; i < s.length; i++) {
    sObject[s[i]] ? (sObject[s[i]] += 1) : (sObject[s[i]] = 1);
    tObject[t[i]] ? (tObject[t[i]] += 1) : (tObject[t[i]] = 1);
  }

  for (let key in sObject) {
    if (tObject[key] !== sObject[key]) return false;
  }

  return true;
};
