function operation(num1, num2) {
    // write your code here
    if (num1 + num2 == 24) {
        return "added";
    } else if (num1 - num2 == 24 || num2 - num1 == 24) {
        return "subtracted";
    } else if (num1 / num2 == 24 || num2 / num1 == 24) {
        return "divided";
    } else if (num1 * num2 == 24) {
        return "multiplied";
    } else {
        return "None";
    }
}
