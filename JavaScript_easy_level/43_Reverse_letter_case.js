function reverse_case(strParam) {
    // Split the input string into an array of individual characters
    let letters = strParam.split("");

    // Loop through each character in the array
    for (let i = 0; i < letters.length; i++) {
        // Check if the current character is in uppercase
        if (letters[i] === letters[i].toUpperCase()) {
            // If uppercase, convert it to lowercase
            letters[i] = letters[i].toLowerCase();
        } else {
            // If lowercase, convert it to uppercase
            letters[i] = letters[i].toUpperCase();
        }
    }

    // Join the modified array of characters back into a string
    return letters.join("");
}
