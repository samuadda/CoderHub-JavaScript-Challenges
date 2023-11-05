function get_duplicate_elements(arr) {
    // Initialize an array to store duplicate elements
    const result = [];

    // Iterate through the input array 'arr'
    for (let i = 0; i < arr.length; i++) {
        // Compare the current element with the elements that come after it
        for (let j = i + 1; j < arr.length; j++) {
            // If a duplicate is found, add it to the 'result' array
            if (arr[i] === arr[j]) {
                result.push(arr[i]);
            }
        }
    }

    // Return the 'result' array containing the duplicate elements
    return result;
}
