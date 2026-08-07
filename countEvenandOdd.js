// Count even and odd numbers in an array
//input: [1, 2, 3, 4, 5]
//output: {even: 2, odd: 3}


function countEvenOdd(arr){
    let evenCount = 0
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++ ){

        if (arr[i]%2 === 0){
            evenCount++
        }else{
            oddCount++
        }

    }
    return {evenCount,  oddCount}
}
console.log(countEvenOdd( [1, 2,9 ,8,3, 4, 5]))