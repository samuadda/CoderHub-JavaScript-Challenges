function replaceThe(txt) {
    // Regular expression to match "the" followed by a vowel
    let regExp = /the(?= [aouei])/;

    // Regular expression to match "the" followed by a non-vowel
    let regExp2 = /the(?= [^aouei])/;

    // Check if the input text contains "the" followed by a vowel
    if (txt.match(regExp)) {
        // If found, replace it with "an"
        txt = txt.replace(regExp, "an");
    } else if (txt.match(regExp2)) {
        // If found, replace it with "a"
        txt = txt.replace(regExp2, "a");
    }

    // Return the modified text
    return txt;
}
