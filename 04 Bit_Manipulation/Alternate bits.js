var hasAlternatingBits = function (n) {
  while (n > 0) {
    var prev = n & 1;
    var curr = (n >> 1) & 1;
    if (prev === curr) {
      return false;
    }
    n = n >> 1;
  }
  return true;
};

var n;
n = 10;
console.log(hasAlternatingBits(n));
