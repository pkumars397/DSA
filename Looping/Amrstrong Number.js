function armStrong(n) {
  var temp = n;
  var count = Math.abs(n).toString().length;
  var sum = 0;
  while (n > 0) {
    var digit = n % 10;
    sum += Math.pow(digit, count);
    n = Math.floor(n / 10);
  }

  if (sum == temp) {
    return true;
  } else {
    return false;
  }
}

var n = 153;
console.log(armStrong(n));
