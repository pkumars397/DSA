// var s = "adb32dj2c";

// console.log(extract_number(s));
// function extract_number(s) {
//   var a = [];
//   for (var i = 0; i < s.length; ) {
//     if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//       var j = i;
//       while (j < s.length && s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57) {
//         j++;
//       }
//       a.push(parseInt(s.slice(i, j)));
//       i = j;
//     } else {
//       i++;
//     }
//   }
//   return a;
// }


// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// console.log(sort(arr))
// function sort(arr) {
//     var b = [];
//     for (var j = 0; j< arr.length; j++){
        
//         var coun = 0;
//         for (var i = 0; i < 32; i++){
//             if ( arr[j]>> i & 1===1) {
//                 coun++;
//             }
//         }
//         b.push(coun)
        

//     }
    
    
//     for (var i = 0; i < arr.length - 1; i++){
//         for (var j = 0; j < arr.length - 1 - i; j++){
//             if (b[j]>b[j+1] || (b[j]==b[j+1] && arr[j]>arr[j+1])) {
//                 [b[j], b[j + 1]] = [b[j + 1], b[j]];
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr
// }

// var arr = [1, -1, 3, 2, -7, -5, 11, 6]
// console.log(sort(arr))
// function sort() {
//     var e = 0;
//     var l = 0;
//     var r = arr.length - 1;
//     while (l < r) {
//         while (l < r && arr[l] >= 0) {
//             l++;
//         }
//         while (l < r && arr[r] < 0) {
//             r--
//         }

//         if(l<r)
//         [arr[l], arr[r]] = [arr[r], arr[l]]
//         l++;
//         r--;
        
//     }
//     return arr;
// }

// var a = "hey"
// console.log(a.split(''))

// number to HexaDeci

// /
// console.log(Hex(n))
// function Hex(n) {
//     // Part 1 storing absolute remainder into the array;
//     var a = [];
//     while (n > 0) {
//         a.push(n % 16);
//         n = Math.floor(n / 16);
//     }
//     for (var i = a.length; i <= 7; i++) {
//         a.push(0)
//     }
    
//     var i = 0;
//     while (i < 8 && a[i] == 0) {
//         i += 1;
//     }

  
// }



// function extract_number(s) {
//     var a=[]
//     for (var i = 0; i < s.length;) {
//         if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
//             var j = i;
//             while (j < s.length && s.charCodeAt(j) >= 48 && s.charCodeAt(j) <= 57) {
//                 j++;
//             }
//             a.push(parseInt(s.slice(i, j)));
//             i = j
//         }
//         else {
//             i++;
//         }
//     }
//     return a;
//     };
// var str = "abc334v44d";
//     console.log(extract_number(str))

// var str = "hello";
// console.log(str.split(''));

// var arr = [1, 5, 2, 4];
// arr.sort(function (a, b) {
//     return b-a;
// })

// console.log(arr)

// var a = -5;
// function dec2bin(a) {
//     return (a>>>0).toString(2)
// }

// function isPrime(number) {
//     if (number <= 1) {
//         return false;
//     }
//     for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function makeArrayPrime(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         let currentNumber = arr[i];
//         while (!isPrime(currentNumber)) {
//             currentNumber++;
//             if (currentNumber - arr[i] > k) {
//                 arr[i] = 0;
//                 break;
//             }
//         }
//         if (arr[i] !== 0) {
//             arr[i] = currentNumber;
//         }
//     }

//     return arr;
// }

// // Test cases
// const arr1 = [10, 12, 15, 20, 22];
// const k1 = 3;
// console.log(makeArrayPrime(arr1, k1)); // Output: [11, 13, 17, 23, 23]


// var nums =[2,14,18,22,22]

// nums.sort(function(a,b){
//     return a-b;
// })

// console.log(nums)

// var firstMap = new Map();
// firstMap.set(2, 32);
// firstMap.set(3, 32);
// firstMap.set(4, 32);
// firstMap.set(1, 32);

// console.log(firstMap.size)
// for (keyv of firstMap){
//     console.log(keyv)
// }

// var setf = new Set();
// setf.add(1);
// setf.add(1);
var nums = [1,2,3,1]
var mapping= new Map();
    for(var i=0;i<nums.length;i++){
        if (mapping.get(nums[i]) == undefined) {
            mapping.set(nums[i], 1);
        }
        else{
            mapping.set(nums[i],mapping.get(nums[i])+1);
        }
}
for(var i=0;i<nums.legth;i++){

    if((mapping.get(nums[i]))>1){
        console.log(true)
        break;
    }

  }
console.log(false)


