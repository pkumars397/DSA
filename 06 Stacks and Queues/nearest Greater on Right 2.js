let nums = [1, 2, 3, 4, 3]//expected Output [2,3,4,-1,4]
console.log(nextGreater2(nums))
function nextGreater2(nums) {
    let stack = [];
    let ans = [];
    for (let i = nums.length - 2; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop();
        }
        stack.push(nums[i]);
    }
    for (let i = nums.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] <= nums[i]) {
            stack.pop()
        }
        if (stack.length == 0) {
            ans.push(-1)
        } else {
            ans.push(stack[stack.length - 1])
        }
        stack.push(nums[i])
    }
    return ans.reverse()
}