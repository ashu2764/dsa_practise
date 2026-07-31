// Check if every elemts in the array is of the same type

// [1, 2, 3, '']


function checkType(arr){
    if (arr.length === 0) return true;

for (let i = 0; i<arr.length-1; i++){
    if (typeof(arr[i])!== typeof(arr[i+1])){
        console.log(typeof(arr[i]))
        console.log(typeof(arr[i+1]))
        return false;
    }
}

    return true
}

console.log(checkType([1, 2, 3, "a"]))