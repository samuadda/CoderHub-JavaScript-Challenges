function isMirrored(num) {
    // Convert the number to a string to manipulate its characters
    let str = num.toString();

    // Reverse the string by splitting, reversing, and joining its characters
    let reversed = str.split("").reverse().join("");

    // Check if the original string is equal to the reversed string
    // If true, the number is mirrored; return true, else return false
    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}
