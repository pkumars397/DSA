var isValid = function(s) {
    //   var rev='';
    //   for(var i=s.length-1;i>=0;i--){
    //       rev+=s[i];
    //   }
    //   if(rev===s){
    //       return true;
    //   }
       
    //     return false;
    
      var rev=s.split('').reverse().join('')
      if(rev==s){
          return true;
      }
      
      return false;
    
    return rev;
};
    
console.log(isValid('madam'))