let a = [1, -2, 3, -1, -4, 5, 2, 3, -6];
// expected Output: [-2,-2,-1,-1,-4,0,-6] >>n-k+1(size)
let k = 3;

var firstNeg=(a, k) => {
    let i = 0;
    let j = 0;
    let q = [];
    let ans = [];
    while (j < a.length) {
        // Calculations(will store the negative number in queue)
        if (a[j] < 0) {
            q.push(a[j])
        }
        // Covering all j for calculations
        if (j - i + 1 < k) {
            j++;
        }
        // Checking if window size is hit or not
        else if (j - i + 1 === k) {
        // storing ans;
            if (q.length == 0) {
                ans.push(0)
            } else {
                ans.push(q[0]);
                if (q[0] == a[i]) {
                    q.shift();
                }
            }
            i++;
            j++;
        }
    }
    return ans;

}
console.log(firstNeg(a,k))