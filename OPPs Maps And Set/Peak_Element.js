function findPeakElement(arr) {
  var s = 0;
  var e = arr.length - 1;
  while (s < e) {
    var mid = Math.floor((s + e) / 2);
    if (arr[mid] > arr[mid + 1]) {
      e = mid;
    } else {
      s = mid + 1;
    }
  }
  return s;
}

var arr = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(arr));
