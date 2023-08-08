var n= 1251;
var rev = 0;
while (n > 0) {
    var digit = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + digit;
}
console.log(rev)
