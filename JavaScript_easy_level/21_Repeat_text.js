function word_repeat(word, n) {
    // Repeat the 'word' 'n' times by appending a space and using the 'repeat' method
    // Then, trim any leading or trailing spaces to ensure a clean result
    return (word + " ").repeat(n).trim();
}
