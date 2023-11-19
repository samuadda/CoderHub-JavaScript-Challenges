function average(values) {
    // write your code here
    let arrEle = values.reduce((acc, ele) => acc + ele);
    return arrEle / values.length;
}
