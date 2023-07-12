/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const initialNum = image[sr][sc];
  doesSameWithInitialNum(image, initialNum, sr, sc, color);

  return image;
};
 
const doesSameWithInitialNum = (image, initialNum, x, y, color) => {
  if (x < 0 || y < 0 || x >= image.length || y >= image[0].length) return;
  if (image[x][y] === color) return;
  if (image[x][y] !== initialNum) return;

  image[x][y] = color;
  
  doesSameWithInitialNum(image, initialNum, x + 1, y, color);
  doesSameWithInitialNum(image, initialNum, x - 1, y, color);
  doesSameWithInitialNum(image, initialNum, x, y + 1, color);
  doesSameWithInitialNum(image, initialNum, x, y - 1, color);

}

