function number_sum(num) {
    // Initialize a variable to store the sum of numbers
    let result = 0;

    // Iterate from 0 to 'num', adding each number to the 'result'
    for (let i = 0; i < num + 1; i++) {
        result += i;
    }

    // Return the sum of numbers
    return result;
}
