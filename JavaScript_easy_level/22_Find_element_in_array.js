function search(word, character) {
    // Split the 'word' into an array of characters
    let arr = word.split();

    // Use 'indexOf' to find the position of the 'character' in the array
    let result = arr.indexOf(character);

    // Return the position (index) of the 'character' or -1 if not found
    return result;
}
