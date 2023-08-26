// Approach 1 Brute Force:
// var rotate = function (arr, k) {
//     k = k % arr.length;
//     for (var j = 1; j <= k; j++){
//         var val = arr[0];
//     for (var i = 1; i < arr.length; i++){
//         var temp = val;
//         val = arr[i];
//         arr[i] = temp;

//     }
//     arr[0] = val;
//     }
//     return arr;
// };

// Approach 2 O(n) and space O(n)
// function rotate(arr, k) {
//     var b = [];
//     k = k % arr.length;
//     for (var i = 0; i < arr.length; i++){
//         b.push(0);
//     }
//     for (var i = 0; i < arr.length; i++){
//         var newPos = (i + k) % arr.length;
//         b[newPos]=arr[i]
//     }
//     return b;
// };

// Approach 3 O(n) and Space(0)
// function reverse(array, s, e) {
//   while (s < e) {
//     var temp = array[s];
//     array[s] = array[e];
//     array[e] = temp;
//     s++;
//     e--;
//   }
// }
// var rotate = function (nums, k) {
//   k = k % nums.length;
//   reverse(nums, 0, nums.length - 1);
//   reverse(nums, 0, k - 1);
//   reverse(nums, k, nums.length - 1);
//   return nums;
// };

// Approach 4th
// function rotate(arr, k) {
//   k = k % arr.length;
//   for (var j = 0; j < k; j++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// }

// Approach 5th
// Left Rotated
// function rotate(arr, k) {
//   k = k % arr.length;
//   let cutted = arr.splice(0, k);
//   arr.push(...cutted);
//   return arr;
// }
function rotate(arr, k) {
  k = k % arr.length;
  let extracted = arr.splice(arr.length - k, k)
  extracted.push(...arr);
  return extracted;
}
var arr = [1, 2, 3, 4, 5, 6];
var k = 4;
console.log(rotate(arr, k));
