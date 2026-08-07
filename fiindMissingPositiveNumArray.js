// Find the First missing +Ve Number in arrary
//Input-[3,4,-1,1] 
// output - 2


function findMissingPosNum(arr){

let number = 1
   while (true){
    let found = false
    for (let i = 0; i<arr.length; i++){
        if (arr[i]=== number){
            found = true
            break;
        }
    }
    if(!found){
            return number
        }
        number++
   }  
   
}

console.log(findMissingPosNum([4,-1,1,2]))