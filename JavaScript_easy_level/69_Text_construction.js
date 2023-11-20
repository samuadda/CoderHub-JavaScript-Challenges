function string_builder(expression) {
    const stack = [];
    let result = "";
    let currentNum = 0;

    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (!isNaN(char)) {
            // If the character is a number, accumulate the digits to get the complete number
            currentNum = currentNum * 10 + parseInt(char);
        } else if (char === "[") {
            // Push the current result and current number onto the stack
            stack.push({ result, currentNum });
            result = ""; // Reset result for the nested expression
            currentNum = 0;
        } else if (char === "]") {
            // Pop from the stack and repeat the result based on the current number
            const { result: prevResult, currentNum: num } = stack.pop();
            result = prevResult + result.repeat(num);
        } else {
            // If the character is a letter, append it to the result
            result += char;
        }
    }

    return result;
}
