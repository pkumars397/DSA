var isPalindrome = function(head) {
    let str1='';
    let str2='';
    while(head){
        // str1=str1+head.val;
        // str2=head.val+str2;
        str1=`${str1}${head.val}`
        str2=`${head.val}${str2}`
        head=head.next;
    }
    return str1===str2
};