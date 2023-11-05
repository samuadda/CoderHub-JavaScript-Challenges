function convertPercent(percentage) {
    // Split the input 'percentage' string into an array of characters
    let arr = percentage.split("");

    // Remove the percentage sign by removing the last character in the array
    arr.pop();

    // Join the remaining characters in the array and convert the result to a decimal by dividing by 100
    let str = arr.join("") / 100;

    // Return the result as a decimal
    return str;
}
