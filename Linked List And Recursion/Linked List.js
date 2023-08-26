// Creating Node
class Node{
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
class LinkedList{
    constructor() {
        this.head = null;
    }
    addElementAtStart(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return this.head;
    }
    addElementAtEnd(value) {
        let newNode=new Node(value)
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }
            tail.next = newNode;
        }
        return this.head;
    }
    print() {
        let cur = this.head;
        let str=""
        while (cur) {
            console.log(cur);
            cur=cur.next;
        }
        
    }
}

const l = new LinkedList()
l.addElementAtEnd(20);
l.addElementAtStart(20);
console.log(l.print())
