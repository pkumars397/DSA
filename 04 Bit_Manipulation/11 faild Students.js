var arrange = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    // Move the left pointer to the right until a failed student is found
    while (left < right && nums[left] >= 0) {
      left++;
    }

    // Move the right pointer to the left until a passed student is found
    while (left < right && nums[right] < 0) {
      right--;
    }

    // Swap the failed student at the left pointer with the passed student at the right pointer
    if (left < right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
      right--;
    }
  }

  return nums;
};

var nums = [1, 2 - 23, 4, -2];
console.log(arrange(nums));
