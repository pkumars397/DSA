// Approach for string sorting

var arr = ["z", "n", "b", "a"];
console.log(arr.sort()); /*By default in ascending order */

arr.sort();
arr.reverse();
console.log(arr); /* Descending order */

// Approach for numbers sorting

var arr = [3, 2, 6, 29, 23];
arr.sort(function (a, b) {
  return a - b;
});

console.log(arr); /*Increasing*/

var arr = [3, 2, 6, 29, 23];
arr.sort(function (a, b) {
  return b - a;
});

console.log(arr);
