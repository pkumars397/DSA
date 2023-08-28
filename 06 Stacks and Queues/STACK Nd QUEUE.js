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

// class Stack {
//   constructor() {
//     this.items = [];
//   }
//   push(element) {
//     this.items.push(element);
//   }

//   size() {
//     return this.items.length;
//   }

//   pop() {
//     if (this.size() == 0) {
//       return undefined;
//     }
//     return this.items.pop();
//   }

//   isEmpty() {
//     if (this.size() == 0) {
//       return true;
//     } else return false;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       return "stack empty";
//     } else {
//       return this.items[this.size() - 1];
//     }
//   }
// }

// let x = new Stack();
// x.push(100);
// x.push(200);

// console.log(x.items);

// console.log(x.pop());
// console.log(x.size());
// console.log(x.isEmpty());
// console.log(x.peek());


//  Queue

// class Queue{
//   constructor() {
//     this.array = [];
//     this.front = -1;
//     this.rear = -1;
//   }
//   enqueue(element) {
//     if (this.front == -1) {
//       this.front++;
//       this.rear++
//     } else {
//       this.rear++;
//     }
//     this.array[this.rear] = element;
//   }
//   display() {
//     console.log(this.array)
//   }
//   dequeue() {
//     if (this.rear == -1 || this.front==-1) {
//       console.log("Dum dum Queue Empty")
//     } else if (this.front == this.rear) {
//       this.front--;
//       this.rear--;
//     } else {
//       this.front = this.front + 1;
//     }
//   }

//   front() {
//     console.log(this.front);
//   }
//   rear() {
//     console.log(this.rear);
//   }
//   isEmpty() {
//     if (this.front == -1 && this.rear == -1) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   get_first_element() {
//     return this.array[this.front];
//   }
// }

// let x = new Queue();
// x.enqueue(12);
// x.display();
// console.log(x.array)
// x.enqueue(9)
// x.enqueue(10)
// console.log(x.array)
// x.display();
// console.log(x.front,x.rear)
// x.dequeue(10);
// console.log(x.front,x.rear)
// x.display()
// console.log(x.isEmpty())
// console.log(x.get_first_element())

// Queue with capacity >> Anoj Bhaiya

// class Queue{
//   constructor(n) {
//     this.capacity=n
//     this.q = [];
//     this.rear = -1;
//   }
//   // Time complexity o(1)
//   enqueue(element) {
//     if (this.rear == this.capacity-1) {
//       return "full";
//     }
//     this.rear++
//     this.q[this.rear] = element;
//   }
// // Time complexicity o(n)
//   dequeue() {
//     if (this.rear === -1) {
//         return "empty";
//     }
//     const result = this.q[0];
//     for (let i = 0; i <=this.rear; i++) {
//         this.q[i] = this.q[i + 1];
//     }
       
//     this.rear--;
//     return result;
// }
//   isempty() {
//     if (this.rear == -1) {
//       return true;;
//     }
//     return false;
//  }

// }

// let q1 = new Queue(5);
// q1.enqueue(10)
// q1.enqueue(10)
// q1.enqueue(10)
// q1.enqueue(10)
// q1.enqueue(10)
// console.log(q1.enqueue(10))
// console.log(q1.q)
// q1.dequeue();
// console.log(q1.q)
// q1.enqueue(1)
// console.log(q1.q)
// console.log(q1.isempty())
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// q1.dequeue();
// console.log(q1.isempty())
// console.log(q1.dequeue())


