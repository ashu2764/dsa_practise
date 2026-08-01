//short array
//[3,2,1,4,5] => [1,2,3,4,5]

function shortArray(arr){
    for (let i =0; i < arr.length; i++){
        for(let j= 0; j<arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;

        }
    }
}
    return arr;
}

console.log(shortArray([3,2,1,4,5])) // output --> [1, 2, 3, 4, 5]