function armStrong(n) {
  // var temp = n;
  // var count = Math.abs(n).toString().length;
  // var sum = 0;
  // while (n > 0) {
  //   var digit = n % 10;
  //   sum += Math.pow(digit, count);
  //   n = Math.floor(n / 10);
  // }

  // if (sum == temp) {
  //   return true;
  // } else {
  //   return false;
  // }
  let str = String(n);
  let noOfDigits = str.length;
  let sum = 0;
  for (let i = 0; i < noOfDigits; i++){
    let digit = parseInt(str[i]);
    sum+=Math.pow(digit,noOfDigits)
  }
  return sum === n;
}

var n = 133;
console.log(armStrong(n));
