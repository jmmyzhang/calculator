let number1;
let number2;
let operator;

let display = document.querySelector("#display");
let frame = document.querySelector(".frame");

frame.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList == "num") {
        updateDisplay(target.id);
    }
})


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

function operate(num1, num2, op) {
    return op(num1, num2);
}

function updateDisplay(input) {
    display.innerText += input;
}