module.exports = function reverse (n) {
    let num = '';
    n = n.toString();
    if (n < 0) {
        n = (-n).toString();
    }
        for (let i = n.length - 1; i >= 0; i--) {
             num = num + n[i];
        }
    return num; 
}
