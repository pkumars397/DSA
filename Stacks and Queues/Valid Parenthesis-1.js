var isValid = function (s) {
  if (s.length == 1) {
    return false;
  }
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(")");
    } else if (s[i] == "{") {
      stack.push("}");
    } else if (s[i] == "[") {
      stack.push("]");
    } else {
      if (stack[stack.length - 1] == s[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length == 0;
};
