// Find the first unique character in a string
// input: "leetcode"
// output: "l"

function findFirstUniqueChar(str){

    for (let i = 0; i < str.length; i++){
       let isUniqeChar = true
       for (let j = 0; j<str.length; j++){
        if (i!==j && str[i] === str[j]){
            isUniqeChar=false
            break
        }
       
       }
        if(isUniqeChar){
            return str[i]
        }
    }
    return 'No Unique Character'

   
}
console.log(findFirstUniqueChar("aasssshwani"))