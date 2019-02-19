/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;

  let lovers = [];
  for (let i = 0; i < preferences.length; i++) {
    let a = preferences[i];
    let b = preferences[a - 1];
    let c = preferences[b - 1];
    if (c == i + 1 && !allreadyInLove(a, b, c) && isDifferent(a, b, c)) {
      count++;
      lovers.push(a, b, c);
    }
  }

  function allreadyInLove(a, b, c) {
    return lovers.includes(a) || lovers.includes(b) || lovers.includes(c)
  }

  function isDifferent(a, b, c) {
    return a != b && a != c && c != b;
  }

  return count;

}