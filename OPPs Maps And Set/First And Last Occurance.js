var nums = [5, 7, 7, 8, 8, 8, 8, 8, 8, 10],
  target = 8;

console.log(element_position(nums, target));

function element_position(nums, target) {
  return [leftSearch(nums, target), rightSearch(nums, target)];
}

function leftSearch(nums, target) {
  var s = 0;
  var e = nums.length - 1;
  var index = -1;
  while (s <= e) {
    var mid = Math.floor((s + e) / 2);
    if (nums[mid] === target) {
      index = mid;
      e = mid - 1;
    } else if (nums[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return index;
}

function rightSearch(nums, target) {
  var s = 0;
  var e = nums.length - 1;
  var index = -1;
  while (s <= e) {
    var mid = Math.floor((s + e) / 2);
    if (nums[mid] === target) {
      index = mid;
      s = mid + 1;
    } else if (nums[mid] > target) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return index;
}
