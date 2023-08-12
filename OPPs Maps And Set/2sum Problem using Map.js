var twoSum = function (numS, target) {
  var nm = new Map();
  var l = numS.length;
  for (var i = 0; i < l; i++) {
    var reqVal = target - numS[i];
    if (nm.has(reqVal)) {
      return [i, nm.get(reqVal)];
    } else {
      nm.set(numS[i], i);
    }
  }
};
var numS = [3, 3];

var target = 6;
console.log(twoSum(numS, target));
