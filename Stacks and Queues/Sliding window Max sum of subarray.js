let a = [1, 2, 3, 1, 4, 5, 6, 3, 4];
let k = 3;

var maxSum = function (a, k) {
  let i = 0,
    j = 0;
  let max = 0;
  let sum = 0;

  while (j < a.length) {
    sum = sum + a[j];
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 == k) {
      max = Math.max(sum, max);
      sum = sum - a[i];
      i++;
      j++;
    }
  }

  console.log(max);
};

maxSum(a, k);
