function sum_two_smallest_nums(arr) {
    // Sort the elements in the 'arr' array in ascending order
    arr.sort((a, b) => a - b);

    // Return the sum of the two smallest numbers in the sorted array
    return arr[0] + arr[1];
}
