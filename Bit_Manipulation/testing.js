// console.log(a);
// var a=1;

// var b;
// console.log(b)
// b=5;

// get();

// function get(){
//     console.log("ahm")
// }


// console.log(c);
// let c;

// // let d;
// // console.log(d)
// // d = 69;

// check();

// var check = function () {
//     console.log("check")
// }
// var x = -121;
// var rev = x.toString().split('').reverse().join('');
// console.log(rev)
// function test() {
//     let a=b=102992;
    
// };
// test()
// console.log(a)
// console.log(b);

// */
var arrange = function(nums) {
    
    var i=0;
    var j=0;
    while(i<nums.length && j<nums.length){
        if(nums[j]>=0){
           i=i+1;
           j=j+1;
        }
    
        else{
           while(nums[i]<0 && i<nums.length){
               i = i + 1;
            
           }
            var temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
        }
    }
    return nums;
};

var nums = [1, 2, -3, 5, 6]
console.log(arrange(nums))




