//chagree a srtig into array of string

//'ashwani'-['a','s','h','w', 'a', 'n', 'i']

function strToarr(str){
    let arr = []
    for (let i = 0 ; i<str.length; i++ ){
        arr.push(str[i])
    }
    return arr
}

console.log(strToarr("ashwani"))