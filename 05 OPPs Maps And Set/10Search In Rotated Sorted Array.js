var nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;

console.log(search(nums, target));

function search(nums, target) {
  var s = 0;
  var e = nums.length - 1;
  while (s <= e) {
    var mid = Math.floor((s + e) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[s] <= nums[mid]) {
      if (nums[s] <= target && nums[mid] > target) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    } else {
      if (nums[mid] < target && target <= nums[e]) {
        s = mid + 1;
      } else {
        e = mid - 1;
      }
    }
  }
  return -1;
}
