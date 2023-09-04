// function findPeakElement(arr) {
//   var s = 0;
//   var e = arr.length - 1;
//   while (s < e) {
//     var mid = Math.floor((s + e) / 2);
//     if (arr[mid] > arr[mid + 1]) {
//       e = mid;
//     } else {
//       s = mid + 1;
//     }
//   }
//   return s;
// }

// Method 2
function findPeakElement(arr){
  if (arr.length == 1) {
    return 0;
  }
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    if (mid > 0 & mid < arr.length - 1) {
      if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
        return mid;
      } else if (arr[mid] < arr[mid - 1]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }
    else if (mid == 0) {
      if (arr[0] > arr[1]) {
        return 0
      } else {
        return 1;
      }
    }
    else {
      if (arr[arr.length-1] > arr[arr.length-2]) {
        return arr.length-1
      } else {
        return arr.length-2;
      }
    }
  }
}

var arr = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(arr));
