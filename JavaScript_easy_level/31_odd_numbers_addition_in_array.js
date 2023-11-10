function sumOdd(arr) {
    // Filter the array to keep only the odd numbers
    let oddNumbers = arr.filter(ele => ele % 2 !== 0);

    // Use the reduce function to calculate the sum of the odd numbers
    let sum = oddNumbers.reduce((acc, curr) => acc + curr, 0);

    // Return the final sum
    return sum;
}
