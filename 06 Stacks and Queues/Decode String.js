var decodeString = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] != "]") {
      stack.push(s[i]);
    } else {
      let str = "";
      while (stack[stack.length - 1] != "[") {
        str = stack.pop() + str;
      }
      stack.pop();
      let k = "";
      while (/[0-9]/.test(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }
      k = parseInt(k);
      str = str.repeat(k);
      stack.push(str);
    }
  }
  return stack.join("");
};

let a = "3[a]2[bc]";

console.log(decodeString(a));
