// var missing_elements = function(arr) {
//     var b=[];
//     for(var i=0;i<arr.length;i++){
//         b.push(0);
//     }
    
//     for(var i=0;i<arr.length;i++){
//         var correct_index=arr[i]-1;
//         b[correct_index]=arr[i];
        
//     }
//     var ans=[];
//     for(var i=0;i<arr.length;i++){
//         if(b[i]==0){
//             ans.push(i+1)
//         }
//     }
//     return ans;
// };

// function missing_elements(array) {
//     let set = new Set(array);
//     let res=[];
//     for (let i = 1; i <= array.length; i++){
//         if (!set.has(array[i])) {
//             res.push(i);
//         }
//     }
//     return res;
// }

var array = [1, 1]
console.log(missing_elements(array))