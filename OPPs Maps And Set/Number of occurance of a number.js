// Count in sorted array using Bs.Pro tip if u see anything sorted then u have to use BS;

var firstOccurance = (a, target) => {
  let s = 0;
  let e = a.length - 1;
  let index = -1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (a[mid] === target) {
      index = mid;
      e = mid - 1;
    } else if (a[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return index;
};

var lastOccurance = (a, target) => {
  let s = 0;
  let e = a.length - 1;
  var index = -1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);

    if (a[mid] === target) {
      index = mid;
      s = mid + 1;
    } else if (a[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return index;
};

var count = (a, target) => {
  const first = firstOccurance(a, target);
  const last = lastOccurance(a, target);
  return last - first + 1;
};

let a = [2, 4, 10, 10, 10, 11];
let target = 10;
console.log(count(a, target));
