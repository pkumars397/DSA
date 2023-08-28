function printNos(N) {
  if (N == 1) {
    console.log(N);
    return;
  }
  printNos(N - 1);
  console.log(N);
}
printNos(10);
