let s = "abbaca";

var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack[stack.length - 1] == s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  let ans = "";
  while (stack.length) {
    ans = stack.pop() + ans;
  }

  return ans;
};

console.log(removeDuplicates(s));
