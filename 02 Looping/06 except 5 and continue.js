var n = 5

for (var i = 1; i <= n; i++){
    if (i % 5==0) {
        continue;
    }
  console.log(i)

}
// WHile Loop

var i = 1;
while (i <= n) {
    if (i % 5 == 0) {
        i = i + 1;
        continue;
    }
    console.log(i)
    i++
}