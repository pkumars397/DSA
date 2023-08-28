// var total_swaps = function (arr) {
//     let sortedArr = arr.sort((a, b) => a - b);
//     let indexMap = new Map();
//     for (let i = 0; i < arr.length;i++) {
//         indexMap.set(sortedArr[i],i)
//     }
//     var change = 0;
//     let visited = Array(arr.length).fill(false);

//     for (let i = 0; i < arr.length; i++){
//         if (!visited[i]) {
//             let cyclesize = 0;
//             j = i;
//             while (!visited[j]) {
//                 visited[j] = true;
//                 j = indexMap.get(arr[j])
//                 cyclesize++
//             }
//             if (cyclesize > 0) {
//                 change += cyclesize - 1;
//             }
//         }

//     }
//     return change;
// }

// var total_swaps = function(arr) {

//     const n = arr.length;

//     // Sort the array to get the correct order of elements
//     const sortedNums = [...arr].sort((a, b) => a - b);

//     // Create a map to store the correct indices of elements in the sorted array
//     const indexMap = new Map();
//     for (let i = 0; i < n; i++) {
//         indexMap.set(sortedNums[i], i);
//     }

//     // Initialize variables to keep track of changes and visited elements
//     let changes = 0;
//     let visited = Array(n).fill(false);

//     // Iterate through the array to count cycles and calculate changes
//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             let cycleSize = 0;
//             let j = i;

//             // Explore the cycle using the index map
//             while (!visited[j]) {
//                 visited[j] = true;
//                 j = indexMap.get(arr[j]);
//                 cycleSize++;
//             }

//             // Calculate changes needed based on cycle size
//             if (cycleSize > 0) {
//                 changes += cycleSize - 1;
//             }
//         }
//     }

//     return changes;
// };

const total_swaps = (arr) => {
  // using Selection sort;
  let minSwap = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      minSwap++;
    }
  }
  return minSwap;
};

var arr = [1, 2, 4, 5, 6, 3];
console.log(total_swaps(arr));
