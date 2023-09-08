
// ! Brute Force
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Brute Force
    let a=[];
    let temp=head;
    while(temp){
        a.push(temp.val);
        temp=temp.next;
    }
    a.splice(a.length-n,1)
    let dummy=new ListNode();
    let cur=dummy;
    while(a.length){
        cur.next=new ListNode(a.shift());
        cur=cur.next;
    }
    return dummy.next;
};

//? Optimized

var removeNthFromEnd = function(head, n) {
    let dummy=new ListNode(0);
    dummy.next=head;
    let cur=dummy;
    let len=1;
    while(head.next){
        len++;
        head=head.next;
    }
    len=len-n;
    while(len){
        len--
        cur=cur.next;
    }
    cur.next=cur.next.next;
    return dummy.next;
};