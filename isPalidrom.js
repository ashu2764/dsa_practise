//  check if the given string is palindrome or not
// input: "racecar"
// output: true

function isPalindrome(str) {
  let result = false;
  let newStr = ''; 
  
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  
  if (str === newStr) {
    result = true;
  }
  
  return result;
}

console.log(isPalindrome('racecar')); // Output: true
console.log(isPalindrome('ashwani')); // Output: false
