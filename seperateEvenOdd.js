// Seprate even and odd numbers from an array
// input: [1, 2, 3, 4, 5, 6]
// output: { even: [2, 4, 6], odd: [1, 3, 5] }

const arr =  [1, 2, 3, 4, 5, 6]
const result = {even:[], odd:[]}
for (let i =0; i <arr.length; i++){
    if(arr[i]%2===0){
        result.even.push(arr[i])
    }
    else {
                result.odd.push(arr[i])
    }
}

console.log(result)
 
