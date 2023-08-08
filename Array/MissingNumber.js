var missing_elements = function (arr) {
  var l = arr.length + 1;
  var sumN;
  sumN = (l * (l + 1)) / 2;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sumN - sum;
};

var arr = [3, 4, 1];
console.log(missing_elements(arr));
