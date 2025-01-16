let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let formula = {
    n1: "",
    n2: "",
    operator: undefined,
}


let frame = document.querySelector(".frame");
let display = document.querySelector("#display");
let equal = document.querySelector("#equal");


frame.addEventListener("click", (e) => {
    if (e.target.classList == "num") {
        if (formula.operator !== undefined && formula.n2 == "") {
            newValueDisplay("");
        }
        updateDisplay(e.target.id);
        if (formula.operator === undefined) {
            formula.n1 += e.target.id;
        } else {
            formula.n2 += e.target.id;
        }
    }
})

frame.addEventListener("click", (e) => {
    if (e.target.classList == "op") {
        if (formula.n2 != "") {
            calculate(formula);
        }
        formula.operator = findOp(e.target.id);
        newValueDisplay(formula.n1);
    }
})

frame.addEventListener("click", (e) => {
    if (e.target.id == "equal") {
        if (formula.n1 == "" || formula.n2 == "" || formula.operator === undefined) {
            return;
        } else {
            calculate(formula);
            newValueDisplay(formula.n1);
        }
    }
})

frame.addEventListener("click", (e) => {
    if (e.target.id == "ac") {
        formula.n1 = "";
        formula.n2 = "";
        formula.operator = undefined;
        newValueDisplay("");
    }
})

function updateDisplay(input) {
    display.innerText += input;
}

function newValueDisplay(input) {
    display.innerText = input;
}

function calculate(f) {
    f.n1 = f.operator(parseInt(f.n1), parseInt(f.n2));
    f.n2 = "";
    f.operator = undefined;
}

function findOp(string) {
    switch(string) {
        case "add":
            return add;
        case "subtract":
            return subtract;
        case "multiply":
            return multiply;
        case "divide":
            return divide;
    }
}