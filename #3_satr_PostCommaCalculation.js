function Decimal_places(num) {
    // regexp to match numbers after the comma
    let regexp = /\.\d+/;

    // converts the numbers to string
    let str = num.toString();

    // check if the numbers match the exp
    if (str.match(regexp)) {
        return str.match(regexp)[0].length - 1; // then counting the result(matching) -1 which is the comma
    } else {
        return 0;
    }
}
