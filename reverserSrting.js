// write the code to reverse the string

// input -->> abc output --> cba

function reverseStr(str){
    let newStr = "";
     for (let i = str.length-1; i>=0; i--){
        newStr = newStr + str[i]
     }
     return newStr
}

console.log(reverseStr("abcd")) // output --> dcba
