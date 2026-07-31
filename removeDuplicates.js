// Remove Duplicates from a Sorted Array
//array = [1, 1, 2, 2, 3, 4, 4, 5]; output = [1, 2, 3, 4, 5];

function removeDuplicates(array) {
let uniqueValue = [];

for(let i=0; i < array.length; i++){
    if (array[i] !== array[i+1]){
         uniqueValue.push(array[i]);
    
    }

    
}
return uniqueValue
}


console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4, 5]))


//or sorter method with the inbulid functions
const arr = [1, 1, 2, 2, 3, 4, 4, 5];
const uniqueValues = [...new Set(arr)];
console.log(uniqueValues);