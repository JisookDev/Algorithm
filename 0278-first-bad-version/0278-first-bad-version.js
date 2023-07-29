/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
    * @param {integer} n Total versions
    * @return {integer} The first bad version
    */
  return function(n) {
    let left = 0;
    let right = n;
    let center = Math.floor((left + right)/2);

    while (left !== right) {
      if (!isBadVersion(center)) { 
        if (isBadVersion(center + 1)) return center + 1;
        left = center;
        center = Math.floor((left + right)/2);
      } else {
        if (!isBadVersion(center - 1)) return center;
        right = center;
        center = Math.floor((left + right)/2);
      }
    }
  };
};