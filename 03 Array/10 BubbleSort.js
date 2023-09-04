function bubble(arr) {
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = 0; j < arr.length - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

var arr = [2, 4, 1, 6, 5];
console.log(bubble(arr))