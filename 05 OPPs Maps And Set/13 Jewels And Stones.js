var jewels = "aA",
  stones = "aAAbbbbab";

var numJewelsInStones = function (jewels, stones) {
  var map = new Map();
  for (var i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      map.set(stones[i], map.get(stones[i]) + 1);
    } else {
      map.set(stones[i], 1);
    }
  }

  var ans = 0;
  for (var i = 0; i < jewels.length; i++) {
    if (map.has(jewels[i])) {
      ans += map.get(jewels[i]);
    }
  }
  return ans;
};

console.log(numJewelsInStones(jewels, stones));
