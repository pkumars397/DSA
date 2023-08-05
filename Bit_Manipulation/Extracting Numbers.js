var extract_number = function(s) {
    var a=[];
    for(var i=0;i<s.length;){
        if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
           var j=i;
           while(j<s.length && s.charCodeAt(j)>=48 && s.charCodeAt(j)<=57){
               j++;
           }
           
           a.push(parseInt(s.substring(i,j )));
           
           i=j;
         
         }
         else{
             i=i+1;
        }
        
    }
    return a;
    
     
};

var s = "hsleo469dj4e"
console.log(extract_number(s));