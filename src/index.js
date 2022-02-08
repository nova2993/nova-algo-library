function hello(name) {
    return "Hello " + name;
}

function sumOfNaturalNumbers(n) {
    if(n <= 1) return 1;
    return n + sumOfNaturalNumbers(n - 1);
}

module.exports = {
    hello: hello,
    sumOfNumbes: sumOfNaturalNumbers
};