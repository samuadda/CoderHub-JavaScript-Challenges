function stringCheck(value) {
    // Get the first character of the 'value' string
    let firstElement = value[0];

    // Check if every character in the string is equal to the first character
    let result = value.every(ele => ele === firstElement);

    // Return the result, which is true if all characters are the same, otherwise false
    return result;
}
