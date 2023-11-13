function match_arrays(array1, array2) {
    // Check if the arrays have the same length
    if (array1.length === array2.length) {
        // Create sorted copies of the arrays
        let array1Sort = array1.slice().sort();
        let array2Sort = array2.slice().sort();

        // Compare each element of the sorted arrays
        for (let i = 0; i < array1Sort.length; i++) {
            // If any pair of corresponding elements is not equal, arrays are not the same
            if (array1Sort[i] !== array2Sort[i]) {
                return false;
            }
        }
        // If all pairs of corresponding elements are equal, arrays are the same
        return true;
    } else {
        // If the arrays have different lengths, they can't be the same
        return false;
    }
}
