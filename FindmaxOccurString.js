// Find the Maximum Occurring character in a string
// input: "hello world"
// output: "l"

function maxOccurChar(str){
    let maxcount = 0
    let maxRepeatChar = ''
    for (let i  = 0; i<str.length; i++){
        let  count  = 0;
        for (let j = 0; j<str.length; j++){
            if (str[i]===str[j]){
                count++
            }
        }
        if (count>maxcount){
            maxcount = count;
            maxRepeatChar=str[i];
        }
    }
    return maxRepeatChar

}

console.log(maxOccurChar("javascsssript"))