//find second lowest number in an array
// input: [10,5, 20, 8, 30]
// output: 8

function secondLowestNum (arr){
    let min = Infinity
    let second= Infinity;

    for (let n of arr){
        if (n < min){
           second=min;
           min=n
        }
        else if (n<second && n!==min){
            second = n
        }
    }
    return second
}
 console.log(secondLowestNum([10,5, 8, 30]))