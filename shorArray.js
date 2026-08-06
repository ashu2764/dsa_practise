//short array
//[3,2,1,4,5] => [1,2,3,4,5]

function shortArray(arr){
    for (let i =0; i < arr.length; i++){
        for(let j = i+1; j<arr.length; j++){
        if(arr[j] < arr[i]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        }
    
}
    return arr;
}

console.log(shortArray([3,2,1,4,5])) // output --> [1, 2, 3, 4, 5]