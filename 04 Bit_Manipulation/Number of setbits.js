var hammingWeight = function (n) {
  var count = 0;
  for (var i = 1; i <= 32; i++) {
    if ((n >> (i - 1)) & (1 === 1)) {
      count++;
    }
  }
  return count;
};

var n;
n = 10;

console.log(hammingWeight(n));
