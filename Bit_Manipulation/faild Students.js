// var arrange = function(nums) {
    
//     // var i=0;
//     // var j=0;
//     // while(i<nums.length && j<nums.length){
//     //     if(nums[j]>=0){
//     //       i=i+1;
//     //       j=j+1;
//     //     }
    
//     //     else{
//     //       while(nums[i]<0 && i<nums.length){
//     //           i=i+1;
//     //       }
//     //         var temp=nums[i];
//     //         nums[i]=nums[j];
//     //         nums[j]=temp;
//     //     }
//     // }
//     // return nums;
    
// };

var arrange=function(nums) {
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
}


var nums = [1, 2 - 23, 4, -2];
console.log(arrange(nums))
