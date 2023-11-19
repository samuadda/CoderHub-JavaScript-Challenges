function getPrimesBetween(a, b) {
    // Function to check if a number is prime
    function isPrime(num) {
        // Base cases for numbers less than or equal to 1, 2, and 3
        if (num <= 1) return false;
        if (num <= 3) return true;

        // Check divisibility by 2 or 3
        if (num % 2 === 0 || num % 3 === 0) return false;

        // Check divisibility by numbers of the form 6k ± 1, up to the square root of num
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        // If none of the above conditions are met, the number is prime
        return true;
    }

    // Array to store prime numbers between a and b
    const primeNumbers = [];

    // Iterate through the range from a to b (inclusive)
    for (let i = a; i <= b; i++) {
        // Check if the current number is prime using the isPrime function
        if (isPrime(i)) {
            // If so, add it to the primeNumbers array
            primeNumbers.push(i);
        }
    }

    // Return the array of prime numbers
    return primeNumbers;
}
