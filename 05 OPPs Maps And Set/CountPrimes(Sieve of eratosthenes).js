var n = 10;

function countPrimes(n) {
    var ansArr = new Array(n).fill(true);

    ansArr[1] = false;
    for (var i = 2; i < Math.sqrt(n); i++){
        if (ansArr[i] == true) {
            for (var j = i * i; j < n; j += i){
                ansArr[j] = false;
            }
        }
    }
    var count = 0;
    for (var i = 1; i < ansArr.length;i++) {
        if (ansArr[i] == true) {
            count++;
        }
    }
    return count;
}
console.log(countPrimes(n))