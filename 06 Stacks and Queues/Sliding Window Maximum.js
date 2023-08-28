let nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3;

var maxSubarray = (nums, k) => {
    let i = 0;
    let j = 0;
    let q = [];
    let ans = [];
    while (j < nums.length) {
        // Calculation part
        while (q.length > 0 && q[q.length - 1] < nums[j]) {
            q.pop()
        }
        q.push(nums[j]);
       
        if (j - i + 1 < k) {
            j++
        }
        // Window Hitting
        else if (j - i + 1 == k) {
            // Finding answer
            ans.push(q[0]);
            // Removing first calculation for i=0;
            if (q[0] == nums[i]) {
                q.shift();
            }
            // Maintaining the Window
            i++;
            j++;
        }
    }
    return ans;
}

console.log(maxSubarray(nums,k))