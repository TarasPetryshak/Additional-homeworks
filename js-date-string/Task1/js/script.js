function trimString(str, maxLength) {
    if (str.length > maxLength) {
        str = `${str.slice(0, maxLength)}...`
    }
    return str;
}