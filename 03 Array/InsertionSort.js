var array = [5, 2, -4, -5, 3, -1, 2, 3, 1];
console.log(insertion(array))

function insertion(array) {
    for (var i = 1; i < array.length; i++){
        var curr = array[i];
        for (var j = i - 1; j >= 0 && array[j] > curr; j--){
            array[j + 1] = array[j];
        }
        array[j+1] = curr;
    }
    return array;
}