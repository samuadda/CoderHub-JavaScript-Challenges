function mergeAndOrder(array1, array2) {
    // Combine the elements of array1 and array2 into a new array
    let result = [...array1, ...array2];

    // Sort the elements in the result array in ascending order
    return result.sort((a, b) => a - b);
}
