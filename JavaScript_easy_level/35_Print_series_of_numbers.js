function numbers_range(number) {
    // Create an empty array to store the result
    let result = [];

    // Loop from the given number to 0
    for (let i = number; i > -1; i -= 1) {
        // Add the current number to the beginning of the result array
        result.unshift(i);
    }

    // Join the array elements into a space-separated string and return
    return result.join(" ");
}
