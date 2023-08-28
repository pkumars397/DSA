var sumOddLengthSubarrays = function (arr) {
  // var sum = 0;

  // // Size of array
  // var l = arr.length;

  // // Traverse the array
  // for(var i = 0; i < l; i++)
  // {

  //     // Generate all subarray of
  //     // odd length
  //     for(var j = i; j < l; j += 2)
  //     {
  //         for(var k = i; k <= j; k++)
  //         {

  //             // Add the element to sum
  //             sum += arr[k];
  //         }
  //     }
  // }
  // // Return the final sum
  // return sum;
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let subarray = [];
      for (let k = i; k <= j; k++) {
        subarray.push(arr[k]);
      }
      if (subarray.length % 2 === 1) {
        ans.push(subarray);
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < ans.length; i++) {
    for (let j = 0; j < ans[i].length; j++) {
      sum += ans[i][j];
    }
  }
  return sum;
};

let a = [1, 2, 3];
console.log(sumOddLengthSubarrays(a));
