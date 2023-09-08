function subsequence(arr,ans){

    if(!arr.length){
   
     console.log(ans)
   
     return ;
   
    }
   
    subsequence(arr.slice(1),ans.concat(arr[0]));
   
    subsequence(arr.slice(1),ans)
   
     
   
   }
   
   let arr=[1,2,3]
   
   subsequence(arr,[])