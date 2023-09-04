var arr = [1, 2, 3, 4, 5, 6];
var k = 5;
console.log(bin_Search(arr, k));

function bin_Search(nums, target) {
  var s = 0;
  var l = nums.length;
  var e = l - 1;
  while (s <= e) {
    var mid = Math.floor((s + e) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  if (s > e) {
    return -1;
  }
}
