// ? Brute Force
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //Method1 Brute Force
        if(!list1 ){
           return list2;
        }
        if(!list2 ){
            return list1;
        }
        
        const arr=new Array();
        while(list1){
            arr.push(list1.val)
            list1=list1.next;
        }
        while(list2){
            arr.push(list2.val)
            list2=list2.next;
        }
        arr.sort((a,b)=>a-b);
        let head=new ListNode(0)
        let cur=head;
        for(let i=0;i<arr.length;i++){
            let node=new ListNode(arr[i]);
            cur.next=node;
            cur=cur.next;
        }
        return head.next
};
    

// ! Method 2 Optimized
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //Method 2 Optimized
    if(!list1){
        return list2;
    }
    if(!list2){
        return list1;
    }
    let head=new ListNode(0);
    let cur=head;
    while(list1 && list2){
      if(list1.val<list2.val){
          head.next=list1
          list1=list1.next;
      }
      else{
         head.next=list2;
         list2=list2.next;
      }
      head=head.next;
    }
    if(list1){
        head.next=list1;
    }
    if(list2){
        head.next=list2;
    }
    return cur.next;
       
    };