var nearestGreaterL = (a) => {
    let stack = [];
    let ans = [];
    for (let i = 0; i< a.length; i++) {
      if (stack.length == 0) {
        ans.push(-1);
      } else if (stack.length > 0 && stack[stack.length - 1] < a[i]) {
        ans.push(stack[stack.length - 1]);
      } else if (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
        while (stack.length > 0 && stack[stack.length - 1] >= a[i]) {
          stack.pop();
        }
        if (stack.length == 0) {
          ans.push(-1);
        } else {
          ans.push(stack[stack.length - 1]);
        }
      }
      stack.push(a[i]);
    }
    return ans;
  };
  
  let arr = [1, 4, 2, 5, 6, 3, 2];
  // ans [[4,5,5,6,-1,-1,-1]
  
  console.log(nearestGreaterL(arr));