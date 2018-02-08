export function sortMethod(a, b){
    a = parseFloat(a);
    b = parseFloat(b);
    // force null and undefined to the bottom
    a = (a === null || a === undefined) ? -Infinity : a
    b = (b === null || b === undefined) ? -Infinity : b

    // Return either 1 or -1 to indicate a sort priority
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    // returning 0 or undefined will use any subsequent column sorting methods or the row index as a tiebreaker
    return 0
}

export function formatPrice(num){
    return `$${num}`;
}
