function runSum(arr) {
    for (var i = 1; i < arr.length; i++){
        arr[i] = arr[i] + arr[i - 1];
    }
    return arr;
}


var array = [1, 2, 3, 4, 5, 6]
console.log(runSum(array))