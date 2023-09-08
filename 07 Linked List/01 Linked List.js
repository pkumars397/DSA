function Node(val) {
    this.val = val;
    this.next = null;
}

let l1 = new Node(1);
let l2 = new Node(2);
let l3 = new Node(3);

l1.next = l2;
l2.next = l3;
console.log(l1);
let cur = l1;
while (cur) {
    console.log(cur);
    console.log(cur.val);
    cur = cur.next;
}