function countdown(num) {
    // Initialize an array to store the countdown result
    let initialResult = [];

    // Check if the input number is less than or equal to 3
    if (num <= 3) {
        // If so, return an array with a single element '0'
        return [0];
    }

    // Generate the initial countdown array by decrementing by 3
    for (let i = num; i > 0; i -= 3) {
        initialResult.push(i);
    }

    // Remove the first element from the initial array
    initialResult.splice(0, 1);

    // Filter the initial array to keep only even numbers
    finalResult = initialResult.filter(ele => ele % 2 === 0);

    // Sort the final array in ascending order
    finalResult.sort((a, b) => a - b);

    // Return the final countdown array
    return finalResult;
}
