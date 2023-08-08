function prime(n) {
    var x = 2;
    var a = [];
    while (a.length < n) {
        var flag = 1;
        for (var i = 2; i < x; i++){
            if (x % i == 0) {
                flag = 0;
                break;
            }
        }
        if (flag) {
            a.push(x)
        }
        x = x + 1;
    }
    return a;
}

var n = 10;
console.log(prime(n))