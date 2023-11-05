function Decimal_places(num) {
    // Convert the number to a string for easier pattern matching
    let str = num.toString();

    // Define a regular expression to match the decimal part of the number
    let regexp = /\.\d+/;

    // Check if the number contains a decimal part
    if (str.match(regexp)) {
        // If a decimal part is found, return the number of decimal places
        // by subtracting 1 from the length of the matched decimal part.
        return str.match(regexp)[0].length - 1;
    } else {
        // If there are no decimal places, return 0.
        return 0;
    }
}
