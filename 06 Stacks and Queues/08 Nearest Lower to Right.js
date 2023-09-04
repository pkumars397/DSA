const nearestLowerL = (arr) => {
    let stack = [];
    let ans = [];
    for (let i = arr.length - 1; i >= 0; i--){
        if (stack.length == 0) {
            ans.push(-1)
        } else if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
            ans.push(stack[stack.length-1])
        } else if (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
            while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
                stack.pop();
            }
            if (stack.length == 0) {
                ans.push(-1)
            } else {
                ans.push(stack[stack.length-1])
            }
        }
        stack.push(arr[i])
    }
    return ans.reverse();
}
let a = [2, 3, -2, 9, 1, 3]
console.log(nearestLowerL(a))