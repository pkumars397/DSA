var divide = function (dividend, divisor) {
  let flag = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  if (dividend == -2147483648 && divisor == -1) {
    return 2147483647;
  }
  var count = 0;
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);
  while (dividend >= divisor) {
    var shiftcounter = 1;
    while (dividend > divisor << shiftcounter && divisor << shiftcounter > 0) {
      shiftcounter += 1;
    }

    dividend = dividend - Math.abs(divisor << (shiftcounter - 1));
    count += 1 << (shiftcounter - 1);
  }

  // var flag=0;
  // if(dividend >0 && divisor<0){
  //  flag=1;
  // }else if(dividend<0  && divisor >0){
  //     flag=1;
  // }

  if (flag == -1) {
    return count * flag;
  } else {
    return count;
  }
};

var a = 13,
  b = 1;
console.log(divide(a, b));
