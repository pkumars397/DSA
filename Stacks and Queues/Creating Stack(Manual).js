class Stack {
  constructor() {
    this.top = -1;
    this.stack = [];
  }
  push(element) {
    this.top += 1;
    this.stack[this.top] = element;
  }
  pop() {
    this.stack.pop();
    this.top -= 1;
  }
  peek() {
    return this.stack[this.top];
  }
  isEmpty() {
    if (this.top == -1) {
      return true;
    }
    return false;
  }
}

let x = new Stack();
x.push(10);
x.push(23);
console.log(x.stack);
console.log(x.stack);
x.push(5);
console.log(x.stack);
console.log(x.peek());
console.log(x.isEmpty());
console.log(x.stack[x.stack.length-1])