var missing_elements = function(arr) {
    var b=[];
    for(var i=0;i<arr.length;i++){
        b.push(0);
    }
    
    for(var i=0;i<arr.length;i++){
        var correct_index=arr[i]-1;
        b[correct_index]=arr[i];
        
    }
    var ans=[];
    for(var i=0;i<arr.length;i++){
        if(b[i]==0){
            ans.push(i+1)
        }
    }
    return ans;
};

var array = [1, 1]
console.log(missing_elements(array))