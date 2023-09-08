// ! Method 1 Brute Force
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let lOne=[];
    while(l1){
        lOne.push(l1.val);
        l1=l1.next;
    }
    let lTwo=[];
    while(l2){
        lTwo.push(l2.val);
        l2=l2.next;
    }
    let sum=BigInt(lOne.reverse().join(""))+BigInt(lTwo.reverse().join(""));
    sum=sum.toString().split("");
    let head=new ListNode();
    let cur=head;
    while(sum.length){
        let node=new ListNode(sum.pop());
        cur.next=node;
        cur=cur.next;
    }
    return head.next;
};

// ? Optimized Method:

var addTwoNumbers = function(l1, l2) {
    let res=new ListNode(0);
    let cur=res;
    let carry=0;
    while(l1 || l2){
        let sum=0+carry
        if(l1){
            sum+=l1.val;
            l1=l1.next;
        }
        if(l2){
            sum+=l2.val;
            l2=l2.next;
        }
        carry=Math.floor(sum/10);
        sum=sum%10;
        cur.next=new ListNode(sum);
        cur=cur.next;
    }
    if(carry==1){
        cur.next=new ListNode(1)
    }
    return res.next;
};