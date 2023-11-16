function remove_duplicate(arr) {
    // write your code here
    let result = arr.filter((acc, curr) => arr.indexOf(acc) === curr);
    return result;
}
