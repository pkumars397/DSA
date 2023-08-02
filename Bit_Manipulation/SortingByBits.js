var sortByBits = function (arr) {
    //    Counting the setBit and storing into sort array
    var b = [];
    for (var i = 0; i < arr.length; i++) {
        var setBit = 0;
            
        for (var j = 0; j < 32; j++) {
            if (arr[i] >> j & 1 === 1) {
                setBit++
            }
        }
        b.push(setBit)
    }
    // Applying bubble sort for sorting both array
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (b[j] > b[j + 1] || b[j] == b[j + 1] && arr[j] > arr[j + 1]) {
                var temp = b[j];
                b[j] = b[j + 1];
                b[j + 1] = temp;
                    
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

            }
        }
    }
    return arr;
        
};
    
var array = [];
array = [5, 3, 7, 10, 2]
console.log(sortByBits(array));