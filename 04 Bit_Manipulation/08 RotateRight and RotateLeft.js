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

// var rotate = function(nums, k) {
//   let b=[...nums];//cloning
//   for(let i=0;i<b.length;i++){
//       let pos=(i+k)%b.length;
//       nums[pos]=b[i]
//   }
//   return nums;
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
// function rotate(arr, k) {
//   k = k % arr.length;
//   let extracted = arr.splice(0,arr.length - k);
//   arr.push(...extracted)
//   return arr;
// }


// left Rotate Approach
// 1st
// function rotate(arr, k) {
//   k = k % arr.length;
//   let cutted = arr.splice(0, k);
//   arr.push(...cutted);
//   return arr;
// }

// 2nd Approach
// function rotate(arr, k) {
//   k = k % arr.length;
//   for (let i = 0; i < k; i++){
//     arr.push(arr.shift())
//   }
//   return arr;
// }

// 3rd Approach
function rotate(arr, k) {
  reverse(arr, 0, arr.length - 1)
  reverse(arr, 0, arr.length - k - 1)
  reverse(arr, arr.length - k, arr.length - 1)
  return arr;
}
function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]]
    start++;
    end--;
  }
}
var arr = [1, 2, 3, 4, 5, 6]; //6 5 4 3 2 1  >>3 4 5 6 2 1 >> 3 4 5 6 1 2
var k = 2;
console.log(rotate(arr, k));