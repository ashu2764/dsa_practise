// Rotate an array by one position to the right
// input: [1, 2, 3, 4, 5]
// output: [5, 1, 2, 3, 4]


function rotateArray(arr){
    let last = arr[arr.length-1];

   for (let i = arr.length-1; i > 0; i--){
    arr[i]= arr[i-1]
   }
    arr[0]= last
    return arr
}


console.log(rotateArray([1,2,3,4,5]))