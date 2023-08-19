//1. SHORTCUT TO FIND MAX AND MIN IN ARRAY

// let a = [1, 5, 2, 6, 8];
// max = Math.max(...a);
// console.log(max)

//2. SHORTCUT TO PRINT CHAR USING ASCII

// let set =new Set()
// for (let i = 97; i <=122; i++){
//     set.add(String.fromCharCode(i))
// }
// console.log(set)

//3. SHORTCUT TO CHECK CHAR IS NUMBER ,a to z Or A to Z

// let res = "";
// let s = "134sh";
// for (let i = 0; i < s.length; i++) {
//   if (/[a-z]/.test(s[i])) {
//     res += s[i];
//   }
// }
// console.log(res);

// 4. REVERSE() METHOD AUTOMATICALLY REVERSE PARENT ARRAY TOO.

// let a = [1, 2, 3, 4, 6]
// let l = a;
// let r = a.reverse();
// console.log(l)
// console.log(a)
// console.log(r)

// Flat Method For joining the 2d array to 1d

// let a = [[1, 2, 4], [12, 3, 4]]

// console.log(a.flat())

// Split To convert string into Array by giving some conditions(seperator)

// let s = "  hello world  "
// console.log(s.split(""))
// console.log(s.split(" "))

// Repeat certain strings

// s = "  hello world  "
// console.log(s.repeat(3))

// Join >> used to join the elements of array by some seperator

let a = [1, 2, 4];
console.log(a.join(" "))