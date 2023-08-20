function selectionSort(arr) {
  var n = arr.length;
  for (var i = 0; i < n; i++) {
    var max = i;
    for (var j = i + 1; j < n; j++) {
      if (arr[j] > arr[max]) {
        max = j;
      }
    }

    if (max != i) {
      [arr[i], arr[max]] = [arr[max], arr[i]];
    }
  }
  return arr;

}

var arr = [5, 1, 2, 4, 3];
console.log(selectionSort(arr));
