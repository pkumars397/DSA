// function prime(n) {
//     var x = 2;
//     var a = [];
//     while (a.length < n) {
//         var flag = 1;
//         for (var i = 2; i < x; i++){
//             if (x % i == 0) {
//                 flag = 0;
//                 break;
//             }
//         }
//         if (flag) {
//             a.push(x)
//         }
//         x = x + 1;
//     }
//     return a;
// }

// var prime = function (n) {
//   let a = [];
//   let x = 2;
//   for (var i = 0; i < n; ) {
//     let flag = 1;
//     for (var j = 2; j < x; j++) {
//       if (x % j == 0) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) {
//       a.push(x);
//       i++;
//     }
//     x++;
//   }
//   return a;
// };
let n = 15;
prime(n);

function prime(n) {
  let ist = 2;
  for (let i = 0; i < n; ) {
    for (var j = 2; j < ist; j++) {
      if (ist % j == 0) break;
    }
    if (ist == j) {
      console.log(ist);
      i++;
    }
    ist++;
  }
}
