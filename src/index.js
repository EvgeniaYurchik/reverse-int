module.exports = function reverse (n) {
    if (n < 0) {
        let pos = n * (-1);
        let a = String(pos);
        return a.split("").reverse().join("");
    } else {
        let a = String(n);
        return a.split("").reverse().join("");
    }
}
