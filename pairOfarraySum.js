// Find the Pair  with the given sum in the array 
// input: [1, 2, 3, 4, 5], sum = 9
// output: [4, 5] console.log("Hello, World!");

function findSumpair(arr, target){
    for (let i = 0; i < arr.length; i++ ){
        for(let j = i+1; j<arr.length; j++){
            if((arr[i] + arr[j])===target){
            console.log(arr[i])
            return [ arr[i], arr[j]]
        }

        }
       
    }
    return 'Not found'
}


console.log(findSumpair([1,7,3,2,5], 9))