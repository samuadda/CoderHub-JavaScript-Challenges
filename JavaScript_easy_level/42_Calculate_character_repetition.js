function count_char(sentence, ch) {
    // Split the sentence into an array of characters
    let arr = sentence.split("");

    // Filter the array to only include characters that match the specified character
    let result = arr.filter(char => char === ch);

    // Return the count of occurrences
    return result.length;
}
