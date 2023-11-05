function isEvenOrOdd(num) {
    // Check if 'num' is even by dividing it by 2 and checking the remainder.
    if (num % 2 === 0) {
        // If the remainder is 0, return "even" since 'num' is even.
        return "even";
    } else {
        // If the remainder is not 0, return "odd" since 'num' is odd.
        return "odd";
    }
}
