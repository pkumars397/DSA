var removeElements = function(head, val) {
    var dummy=new ListNode(0);
    dummy.next=head;
    var cur=dummy;
    while(cur.next!=null){
        if(cur.next.val===val){
            cur.next = cur.next.next;
        }else{
           cur=cur.next;
        }
    }
    return dummy.next;
};

// !Method 2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy=new ListNode();
    dummy.next=head;
    let prev=dummy;
    let cur=head;
    while(cur){
        if(cur.val==val){
            prev.next=cur.next;
        }else{
            prev=cur;
        }
        cur=cur.next;
    }
    return dummy.next;
};