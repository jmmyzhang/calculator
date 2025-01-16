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

let formula = {
    n1: "",
    n2: "",
    op: undefined,
}


let equal = document.querySelector("#equal");
let display = document.querySelector("#display");


equal.addEventListener("click", calculate(formula));


function updateDisplay(input) {
    display.innerText += input;
}

function newValueDisplay(input) {
    display.innerText = input;
}

function calculate(f) {
    f.n1 = f.op(parseInt(f.n1), parseInt(f.n2));
    f.n2 = "";
    f.op = undefined;
    newValueDisplay(f.n1);
}