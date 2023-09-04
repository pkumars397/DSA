// function maxSubarray(arr) {
//     var max = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         var sum = 0;
//         for (var j = i; j < arr.length; j++) {
//             sum += arr[j];
//             if (sum > max) {
//                 max = sum;
//             }
//         }
//     }
//     console.log(max);
// }

function maxSubarray(arr) {
    let sum = arr[0];
    let maxSum = sum;
    for (let i = 1; i < arr.length; i++){
        
        if (sum >= 0) {
            sum=sum+arr[i];
            maxSum = Math.max(maxSum, sum);
        }
        else if(sum<0){
            sum = arr[i];
        }
    }
    return maxSum;
}

var arr = [5, 2, -4, -5, 3, 0, 2, 3, 1];
console.log(maxSubarray(arr));