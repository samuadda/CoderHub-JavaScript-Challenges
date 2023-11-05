function kSumSubset(dateString) {
    // Convert the date string to a Date object.
    const date = new Date(dateString);

    // Check if the date is a valid Date object.
    if (!date || isNaN(date.getTime())) {
        return false;
    }

    // Get the current date.
    const today = new Date();

    // Check if the entered date is before the current date.
    if (date >= today) {
        return false;
    }

    // Check if the entered date is a minimum of 4 years before today's date.
    if (today.getFullYear() - date.getFullYear() < 4) {
        return false;
    }

    // Check if the entered date does not exceed 200 years in the past from the current date.
    if (today.getFullYear() - date.getFullYear() > 200) {
        return false;
    }

    // The entered date is a valid age date.
    return true;
}
