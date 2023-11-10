function sum_even(arr) {
    // write your code here
    let iniResult = arr.filter(ele => ele % 2 === 0);

    let fResult = iniResult.reduce((acc, curr) => acc + curr, 0);

    return fResult;
}
