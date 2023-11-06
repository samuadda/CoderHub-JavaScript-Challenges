function input_type(value) {
    // Check if the 'value' can be converted to a number (numeric value)
    if (!isNaN(value)) {
        // Convert the 'value' to a number and store it in 'num'
        const num = parseFloat(value);

        // Check if 'num' is an integer or a decimal number
        if (Number.isInteger(num)) {
            return "integer";
        } else {
            return "double";
        }
    } else {
        // If 'value' cannot be converted to a number, it's considered a string
        return "string";
    }
}
