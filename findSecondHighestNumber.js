// find second highest number in an array
// input: [10,5, 20, 8, 30]
// output: 20

function highestSecondNum(arr){
    let max = -Infinity
    let second =  -Infinity

    for (let n of arr){
        if (n>max){
            second= max;
            max=n;
        }
        else if(n>second && n!==max){
            second= n;
        }
    }
    return second

}

console.log(highestSecondNum([10,5, 20, 8, 30]))