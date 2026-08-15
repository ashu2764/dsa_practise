// find missing number in list
//input: [1,2,3,4,6,7,8]
//n = 8
//output: 5

function findMissing(arr, n) {
  let total = (n * (n + 1)) / 2;
  let arr_sum = 0; // Starts at 0
  
  for (let i = 0; i < arr.length; i++) {
    arr_sum += arr[i]; // Fixed: adds every number to the total accumulation
  }
  
  let result = total - arr_sum;
  return result;
}

console.log(findMissing([1, 2, 3, 4, 6, 7, 8], 8)); // Output: 5
console.log(findMissing([1, 2, 3, 5], 5));         // Output: 4
