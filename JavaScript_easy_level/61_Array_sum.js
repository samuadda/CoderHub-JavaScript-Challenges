function calculate_sum(lst) {
    // Initialize the result variable to store the sum
    let result = 0;

    // Iterate through the elements of the array
    for (let i = 0; i < lst.length; i++) {
        // Check if the current element is equal to 7
        if (lst[i] === 7) {
            // If so, exit the loop
            break;
        } else {
            // If not, add the current element to the result
            result = result + lst[i];
        }
    }

    // Return the calculated sum
    return result;
}
