var str = "prashant";

//  return a string with one occurance;

var b = new Map();
var n = str.length;
for (var i = 0; i < n; i++) {
  if (b.get(str[i]) == undefined) {
    b.set(str[i], 1);
  } else {
    b.set(str[i], b.get(str[i]) + 1);
  }
}
var ans = "";
for (var i = 0; i < n; i++) {
  if (b.get(str[i]) == 1) {
    ans += str[i];
  }
}

console.log(ans);
