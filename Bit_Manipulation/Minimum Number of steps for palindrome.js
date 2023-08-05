var minimum_count = function(s) {
    // Method 1
    // var i=0;
    // var j=s.length-1;
    // var res=0;
    // var trim=s.length-1;
    // while(i<j){
    //     if(s.charAt(i)==s.charAt(j)){
    //         i++;
    //         j--;
    //     }
    //     else{
    //     res++
    //     i=0;
    //     j=--trim;
    // }
    // }
    // return res;
    
    
    // Method 2
    // var max=0
    for(var j=0;j<s.length;j++){
    
    var flag=1;
    
    for(var i=0;i<Math.floor(s.length/2);i++){
        if(s[i]!=s[s.length-1-i-j]){
            flag=0;
            break;
        }
    }
    if(flag==1){
        // max=j;
        break;
    }
    
    }
    return j;
    
    
    
};
