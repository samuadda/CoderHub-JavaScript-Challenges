function hashtag_it(my_array) {
    // write your code here
    for (let i = 0; i < my_array.length; i++) {
        my_array[i] = "#".concat(my_array[i]);
    }
    return my_array.join(" ");
}
