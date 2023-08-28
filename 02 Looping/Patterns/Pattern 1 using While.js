var i = 1;
while (i <= 5) {
  var j = 1;
  var str = "";
  while (j <= 6 - i) {
    str += "*";
    j++;
  }
  console.log(str);
  i++;
}
