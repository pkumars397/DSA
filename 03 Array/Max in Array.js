var arr = [2, 3, 5, 7, 9];
var max = arr[0];
for (var i = 1; i < arr.length; i++){
    if (max < arr[i]) {
        max = arr[i];
   }
}
console.log(max);
