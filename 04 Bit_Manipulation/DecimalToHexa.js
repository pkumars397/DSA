var toHex = function (num) {
  // Part 1 apppending absolute rem into array
  var rev_a = [];
  var temp = Math.abs(num);
  if (temp == 0) {
    return "0";
  }
  while (temp > 0) {
    rev_a.push(temp % 16);
    temp = Math.floor(temp / 16);
  }
  for (var i = rev_a.length; i <= 7; i++) {
    rev_a.push(0);
  }
  var a = [];
  for (var i = 7; i >= 0; i--) {
    a.push(rev_a[i]);
  }
  // Part 2 Doing 15s complement
  if (num < 0) {
    for (var i = 0; i <= 7; i++) {
      a[i] = 15 - a[i];
    }
    // Part 3 15s + 1;
    var c = 1;
    i = 7;
    while (i >= 0) {
      if (a[i] + c < 16) {
        a[i] = a[i] + c;
        break;
      }
      temp = a[i];
      a[i] = (temp + c) % 16;
      c = Math.floor((temp + c) / 16);
      i = i - 1;
    }
  }

  //  part4
  i = 0;
  while (i < 8 && a[i] == 0) {
    i += 1;
  }
  var str = "";
  for (var j = i; j <= 7; j++) {
    if (a[j] <= 9) {
      str += a[j];
    } else if (a[j] == 10) {
      str += "a";
    } else if (a[j] == 11) {
      str += "b";
    } else if (a[j] == 12) {
      str += "c";
    } else if (a[j] == 13) {
      str += "d";
    } else if (a[j] == 14) {
      str += "e";
    } else if (a[j] == 15) {
      str += "f";
    }
  }
  return str;
};


var num;
num = 10;
console.log(toHex(num))