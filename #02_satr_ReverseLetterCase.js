//Reverse letter case

/*Write a function that receives a value of type string. 
The function changes the case of letters by converting a lowercase letter to an uppercase letter and vice versa, 
and then returns a value of type string.*/

function reverse_case(strParam) {
    // Converts the input string to an array of individual letters
    let letters = strParam.split("");

    // Loop over all the letters in the array
    for (let i = 0; i < letters.length; i++) {
        // Check if the letter is uppercase or lowercase, then convert it to the opposite case
        if (letters[i] === letters[i].toUpperCase()) {
            letters[i] = letters[i].toLowerCase();
        } else {
            letters[i] = letters[i].toUpperCase();
        }
    }

    // Rejoin the array of letters to form a string and return the result
    return letters.join("");
}

// Example usage:
const inputString = "Hello, World!";
const result = reverse_case(inputString);
console.log("Reversed Case: " + result);


