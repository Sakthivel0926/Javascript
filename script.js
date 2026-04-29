function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function execute() {

    var name = "Sakthi";

    const x = 20;
    const y = 5;

    let sum = add(x, y);
    let sub = subtract(x, y);
    let prod = multiply(x, y);
    let div = divide(x, y);

    prod = prod + 10;

    console.log(name);
    console.log(sum);
    console.log(sub);
    console.log(prod);
    console.log(div);
}