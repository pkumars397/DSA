// Approach >> Aditya Bhaiya Video se Aya. min(MxR & MxL)-arr[i] ,store it in sum and find total sum then
// that will be our answer

// Step1 Maximum Elment in array on left;
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let mxl = [];
mxl[0] = height[0];
for (let i = 1; i < height.length; i++) {
  if (mxl[i - 1] < height[i]) {
    mxl[i] = height[i];
  } else {
    mxl[i] = mxl[i - 1];
  }
}

// Finding Mxr elment in array on right
let mxr = [];
mxr[height.length - 1] = height[height.length - 1];
for (let j = height.length - 2; j >= 0; j--) {
  if (mxr[j + 1] < height[j]) {
    mxr[j] = height[j];
  } else {
    mxr[j] = mxr[j + 1];
  }
}
// finding area using min(mxl,mxr)-arr[i]
let area = [];
for (let i = 0; i < height.length; i++) {
  area.push(Math.min(mxr[i], mxl[i]) - height[i]);
}

// finding sum of all area i.e our answer
let sum = 0;
for (let val of area) {
  sum += val;
}

console.log(sum);
