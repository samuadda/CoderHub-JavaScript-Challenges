function reverse_case(strParam) {
    // converts the string to array
    let letter = strParam.split("");

    //loop over all letters
    for (let i = 0; i < letter.length; i++) {
        //checking if the letter is upperCase or lowerCase then converts it
        if (letter[i] === letter[i].toUpperCase()) {
            letter[i] = letter[i].toLowerCase();
        } else {
            letter[i] = letter[i].toUpperCase();
        }
    }
    return letter.join(""); // reJoin the array to a string and returns it
}
