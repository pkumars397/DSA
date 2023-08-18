// class Stack {
//   constructor() {
//     this.top = -1;
//     this.stack = [];
//   }
//   push(element) {
//     this.top += 1;
//     this.stack[this.top] = element;
//   }
//   pop() {
//     this.stack.pop();
//     this.top -= 1;
//   }
//   peek() {
//     return this.stack[this.top];
//   }
//   isEmpty() {
//     if (this.top == -1) {
//       return true;
//     }
//     return false;
//   }
// }

class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    this.items.push(element);
  }

  size() {
    return this.items.length;
  }

  pop() {
    if (this.size() == 0) {
      return undefined;
    }
    return this.items.pop();
  }

  isEmpty() {
    if (this.size() == 0) {
      return true;
    } else return false;
  }

  peek() {
    if (this.isEmpty()) {
      return "stack empty";
    } else {
      return this.items[this.size() - 1];
    }
  }
}

let x = new Stack();
x.push(100);
x.push(200);

console.log(x.items);

console.log(x.pop());
console.log(x.size());
console.log(x.isEmpty());
console.log(x.peek());
