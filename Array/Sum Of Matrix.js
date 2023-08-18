let MT1 = [
  [1, 2, 5],

  [3, 5, 5],
];

let MT2 = [
  [1, 5, 7],

  [2, 1, 3],
];

let ans = [];
for (let i = 0; i < MT1.length; i++) {
  ans[i] = [];
  for (let j = 0; j < MT1[i].length; j++) {
    ans[i][j] = MT1[i][j] + MT2[i][j];
  }
}
console.log(ans);
