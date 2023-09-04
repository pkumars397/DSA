var toHex = function (num) {
    // Part 1 apppending absolute remainder into array
  var a = [];
  var temp = Math.abs(num);
  if (temp == 0) {
    return "0";
  }
  while (temp > 0) {
    a.push(temp % 16);
    temp = Math.floor(temp / 16);
  }
  a.reverse();
  while(a.length<8){
    a.unshift(0)
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
      a[i] = (a[i] + c) % 16;
      c = Math.floor((a[i] + c) / 16);
      i--;
    }
  }

  //  part4
  var str = "";
  for (var j = 0; j <= 7; j++) {
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
num = -20;
console.log(toHex(num))