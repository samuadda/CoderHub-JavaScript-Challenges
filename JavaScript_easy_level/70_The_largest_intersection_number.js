function getBiggestShared(a, b) {
    // Find the intersection of the two arrays
    let intersection = a.filter(value => b.includes(value));

    // If there is no intersection, return null
    if (intersection.length === 0) {
        return null;
    }

    // Find and return the largest number in the intersection
    const largestNumber = Math.max(...intersection);
    return largestNumber;
}
