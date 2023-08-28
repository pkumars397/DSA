function maxSubarray(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        var sum = 0;
        for (var j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > max) {
                max = sum;
            }
        }
    }
    console.log(max);
}

var arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];
    maxSubarray(arr);