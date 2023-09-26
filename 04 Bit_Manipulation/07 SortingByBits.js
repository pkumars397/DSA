// var sortByBits = function (arr) {
//     //    Counting the setBit and storing into sort array
//     var b = [];
//     for (var i = 0; i < arr.length; i++) {
//         var setBit = 0;
            
//         for (var j = 0; j < 32; j++) {
//             if (arr[i] >> j & 1 === 1) {
//                 setBit++
//             }
//         }
//         b.push(setBit)
//     }
//     // Applying bubble sort for sorting both array
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             if (b[j] > b[j + 1] || b[j] == b[j + 1] && arr[j] > arr[j + 1]) {
//                 var temp = b[j];
//                 b[j] = b[j + 1];
//                 b[j + 1] = temp;
                    
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;

//             }
//         }
//     }
//     return arr;
        
// };
    
var sortByBits = function (arr){
    // using built in sort method of array in js
    arr.sort((a,b)=>{
        if(count_bits(a)==count_bits(b)){
            return a-b;
        }
        return count_bits(a)-count_bits(b)
    })
    return arr;
    // counting setbits(1) in number.
    function count_bits(n){
        let count=0;
        for(let i=0;i<32;i++){
           if((n)&1){
            count++;
           }
           n=n>>1;
        }
        return count;
    }
}
var array = [];
array = [0,1,2,3,4,5,6,7,8,9]
console.log(sortByBits(array));