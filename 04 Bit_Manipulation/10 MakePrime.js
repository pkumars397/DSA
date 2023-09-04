var arr = [10, 12, 15, 20, 22];

var k = 4;

var isPrime = function (n) {
  if (n == 1) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
};

var makeArrayPrime = function (arr, k) {
  var ans = [];
  for (var i = 0; i < arr.length; i++) {
    let checker = k;
    while (!isPrime(arr[i])) {
      arr[i]++;
      checker--;
      if (checker <= 0) {
        arr[i] = -1;
        break;
      }
    }
    ans.push(arr[i]);
  }
  return ans;
};

console.log(makeArrayPrime(arr, k));
