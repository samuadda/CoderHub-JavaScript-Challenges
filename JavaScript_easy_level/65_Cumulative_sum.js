function cumulative_addition(elements_array) {
    // write your code here
    let fResult = [];
    let result = elements_array.reduce((acc, curr) => acc + curr);
    fResult.push(result);
    fResult.push(elements_array.length);
    return fResult;
}
