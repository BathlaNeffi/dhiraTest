function countAndConvertVowels(inputString) {
    // Initialize a variable to store the count of vowels
    let vowelCount = 0;
    // Convert the string to an array of characters
    let charArray = inputString.split('');

    // Iterate through each character in the array
    for (let i = 0; i < charArray.length; i++) {
        // Check if the character is a vowel (a, e, i, o, u), regardless of case
        if (charArray[i] === 'a' || charArray[i] === 'e' || charArray[i] === 'i' || charArray[i] === 'o' || charArray[i] === 'u') {
            // Increment the vowel count
            vowelCount++;
            // Convert the vowel to uppercase
            charArray[i] = charArray[i].toUpperCase();
        }
    }

    // Join the array back into a string
    let resultString = charArray.join('');

    // Return an object containing the vowel count and the modified string
    return {
        vowelCount: vowelCount,
        convertedString: resultString
    };
}

// Example usage:
let inputString = "aeiou AEIOU qwrty";
let result = countAndConvertVowels(inputString);
console.log("Number of vowels:", result.vowelCount);
console.log("Modified string:", result.convertedString);
