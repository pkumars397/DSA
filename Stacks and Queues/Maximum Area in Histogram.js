var largestRectangleArea = function (heights) {
  let nslStack = [];
  let ans = [];
  let pseudoelement = -1;
  for (let i = 0; i < heights.length; i++) {
    if (nslStack.length == 0) {
      ans.push(pseudoelement);
    } else if (
      nslStack.length > 0 &&
      nslStack[nslStack.length - 1][0] < heights[i]
    ) {
      ans.push(nslStack[nslStack.length - 1][1]);
    } else if (
      nslStack.length > 0 &&
      nslStack[nslStack.length - 1][0] >= heights[i]
    ) {
      while (
        nslStack.length > 0 &&
        nslStack[nslStack.length - 1][0] >= heights[i]
      ) {
        nslStack.pop();
      }
      if (nslStack.length == 0) {
        ans.push(pseudoelement);
      } else {
        ans.push(nslStack[nslStack.length - 1][1]);
      }
    }

    nslStack.push([heights[i], i]);
  }

  let nsrStack = [];
  let ansr = [];

  pseudoelement = heights.length;
  for (let i = heights.length - 1; i >= 0; i--) {
    if (nsrStack.length == 0) {
      ansr.push(pseudoelement);
    } else if (
      nsrStack.length > 0 &&
      nsrStack[nsrStack.length - 1][0] < heights[i]
    ) {
      ansr.push(nsrStack[nsrStack.length - 1][1]);
    } else if (
      nsrStack.length > 0 &&
      nsrStack[nsrStack.length - 1][0] >= heights[i]
    ) {
      while (
        nsrStack.length > 0 &&
        nsrStack[nsrStack.length - 1][0] >= heights[i]
      ) {
        nsrStack.pop();
      }
      if (nsrStack.length == 0) {
        ansr.push(pseudoelement);
      } else {
        ansr.push(nsrStack[nsrStack.length - 1][1]);
      }
    }

    nsrStack.push([heights[i], i]);
  }
  ansr.reverse();

  let width = [];
  for (i = 0; i < ans.length; i++) {
    width[i] = ansr[i] - ans[i] - 1;
  }
  let area = [];
  for (i = 0; i < heights.length; i++) {
    area[i] = width[i] * heights[i];
  }
  return Math.max(...area);
};

let height = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(height));
