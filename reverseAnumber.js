// Write a code to reverse a number in JavaScript
// input: 12345
// output: 54321

function reverseNumber(num) {
    let reversed = 0;
    
    while (num > 0) {
        let lastDigit = num % 10;       // Gets the last digit (e.g., 1234 % 10 = 4)
        reversed = (reversed * 10) + lastDigit; // Appends it to the reversed number
        num = Math.floor(num / 10);     // Removes the last digit (e.g., 1234 becomes 123)
    }
    
    return reversed;
}

console.log(reverseNumber(12345)); // Output: 54321
