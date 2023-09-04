var arr = [3,3,2,5,6];
for (var i = 0; i < arr.length; i++){
    for (var j = i; j < arr.length; j++){
        var str = "";
        for (var k = i; k <= j; k++){
            str += arr[k];
        }
        console.log(str)
    }
    
}