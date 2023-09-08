// ! Brute Force
var rotateRight = function(head, k) {
    // Brute Force
    if(!head || !head.next){
        return head;
    }
    let arr=[];
    while(head){
        arr.push(head.val)
        head=head.next;
    }
    k=k%arr.length;
    let cutted=arr.splice(arr.length-k,k)
    cutted.push(...arr);
    let dummy=new ListNode();
    cur=dummy;
    while(cutted.length){
        let node=new ListNode(cutted.shift());
        cur.next=node;
        cur=cur.next;
    }
    return dummy.next;
};

// ? Method 2 Optimized Method
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head;
    }
    let cur=head;
    let len=1;
    while(cur.next){
        len++;
        cur=cur.next;
    }
    // console.log(len)
    cur.next=head;
    k=k%len;
    let n=len-k;
    while(n){
        cur=cur.next;
        n--;
    }
    head=cur.next;
    cur.next=null;
    return head;

};