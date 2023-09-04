let A = "abadbc" // output"aabbdd"
console.log(nonRepeating(A))
function nonRepeating(A) {
    let q=[];
    let map=new Map()
    let ans="";
    for(let i=0;i<A.length;i++){
        if(!map.has(A[i])){
            map.set(A[i],1)
        }else{
            map.set(A[i],map.get(A[i])+1)
        }
        q.push(A[i])
        while(q.length>0 && map.get(q[0])>1){
        q.shift();
       }
       if(q.length){
         ans=ans+q[0]
       }else if(q.length==0){
           ans+="#";
       }
      
    }
    return ans;
 }