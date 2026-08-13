// Frequency count of Elements in an array
// input: ['a', 'b', 'c', 'a', 'b', 'a']
// output: { a: 3, b: 2, c: 1 }console.log("Hello, World!");

const arr1 = ['a', 'b', 'c', 'a', 'b', 'a'];

function frequncyCount(arr){
    let freq = {}
    for (let n of arr){
        freq[n]=(freq[n] || 0) + 1;
    }
    return freq
}
console.log(frequncyCount(arr1))