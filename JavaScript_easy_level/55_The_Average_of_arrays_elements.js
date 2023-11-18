function get_mean(arr) {
    // write your code here
    let result = arr.reduce((acc, curr) => acc + curr);
    return result / arr.length;
}
