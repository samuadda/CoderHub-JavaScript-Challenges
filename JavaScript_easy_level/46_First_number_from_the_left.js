function left_digit(strParam) {
    // Initialize the result variable to null
    let result = null;

    // Loop through each character in the input string
    for (let i = 0; i < strParam.length; i++) {
        // Check if the current character is a digit using isNaN (is Not a Number)
        if (!isNaN(strParam[i])) {
            // If a digit is found, assign it to the result variable and break out of the loop
            result = strParam[i];
            break;
        }
    }

    // Return the result (the leftmost digit found)
    return result;
}
