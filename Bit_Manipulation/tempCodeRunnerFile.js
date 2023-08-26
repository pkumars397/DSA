function rotate(arr, k) {
  k = k % arr.length;
  for (var j = 0; j < k; j++) {
    arr.unshift(arr.pop());
  }
  return arr;
}