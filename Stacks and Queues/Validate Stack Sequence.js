var validateStackSequences = function (pushed, popped) {
  let stack = [];
  for (let i = 0, j = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length > 0 && stack[stack.length - 1] == popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length === 0;
};

let pushed = [1, 2, 3, 4, 5],
  popped = [4, 5, 3, 2, 1];
console.log(validateStackSequences(pushed, popped));
