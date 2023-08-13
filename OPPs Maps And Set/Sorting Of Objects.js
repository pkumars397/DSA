var arr = [
  { name: "Shyam", salary: 140 },

  { name: "Babu_Rao", salary: 150 },

  { name: "Raju", salary: 160 },

  { name: "Pappu", salary: 200 },
];

function sort_array(arr, length) {
  /*Function to sort the array in ascending order
    After sorting return the sorted array */
  for (var i = 0; i < length - 1; i++) {
    for (var j = 0; j < length - i - 1; j++) {
      if (arr[j].salary > arr[j + 1].salary) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(sort_array(arr,arr.length))