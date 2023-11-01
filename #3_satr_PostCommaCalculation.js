//Post comma calculation

/* Write a function that receives a string value that is a decimal or integer.
The function counts the number of digits after the comma and returns the result as an integer value.*/

function Decimal_places(num) {
    // Convert the number to a string to work with regular expressions
    let str = num.toString();

    // Define a regular expression pattern to match decimal places
    let regexp = /\.\d+/;

    // Check if the regular expression pattern is found in the string
    if (str.match(regexp)) {
        // If found, return the length of the matched decimal part (excluding the decimal point)
        return str.match(regexp)[0].length - 1;
    } else {
        // If no decimal places found, return 0
        return 0;
    }
}

// Example usage:
const number = 12.3456;
const result = Decimal_places(number);
console.log("Number of decimal places: " + result);
