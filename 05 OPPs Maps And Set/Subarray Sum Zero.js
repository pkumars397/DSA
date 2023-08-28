var arr = [5, 4, 2, -3, 1, 6];
var arr2 = [2, 1, -3];
var arr3 = [1, 2, 3];
var twin = function (arr) {
  var map = new Map();
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == 0 || map.has(sum) || arr[i] == 0) {
      return true;
    } else {
      map.set(sum, i);
    }
  }
  return false;
};

console.log(twin(arr3));
