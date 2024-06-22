const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 0, 0, 1];

function mergeArray(arr1, arr2) {
  let output = [];
  output = arr1.concat(arr2);

  output.sort((a, b) => a - b);

  return output;
}
console.log(mergeArray(arr1, arr2));
