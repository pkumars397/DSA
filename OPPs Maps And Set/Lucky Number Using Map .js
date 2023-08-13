var arr = [1, 2, 2, 3, 3, 3];
console.log(lucky(arr));

function lucky(arr) {
  var map = new Map();
  for (val of arr) {
    if (map.has(val)) {
      map.set(val, map.get(val) + 1);
    } else {
      map.set(val, 1);
    }
  }
  var max = -1;
  for ([key, value] of map) {
    if (key == value) {
      if (key > max) {
        max = key;
      }
    }
  }

  return max;
}
