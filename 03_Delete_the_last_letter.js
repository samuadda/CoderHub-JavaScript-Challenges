function deleteLastChar(word) {
    // Split the input word into an array of characters
    let result = word.split("");

    // Remove the last character from the array
    result.pop();

    // Join the remaining characters in the array to form the modified word
    return result.join("");
}
