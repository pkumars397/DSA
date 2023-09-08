var reverseList = function(head) {
    let stack=[];
    while(head){
        stack.push(head.val);
        head=head.next;
    }
    let dummy=new ListNode();
    let cur=dummy;
    while(stack.length){
      cur.next=new ListNode(stack.pop())
      cur=cur.next;
    }
    return dummy.next;
};


// * Method 2 Using Array Destructuring
var reverseList = function(head) {
    let [prev,current]=[null,head];
    while(current){
        [current.next,prev,current]=[prev,current,current.next]
    }
    return prev;
};