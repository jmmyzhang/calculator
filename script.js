let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let exp = (a, b) => a ** b;

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
        if (formula.operator == divide && /^0+/.test(formula.n2)) {
            formula.n1 = "";
            formula.n2 = "";
            formula.operator = undefined;
            newValueDisplay("");
            alert("ERROR: ZERO DIVISION");
        }
        if (formula.n1 == "") return;
        
        if (formula.n1 == "." || formula.n2 == ".") return;

        if (formula.n2 != "") {
            calculate(formula);
        }
        formula.operator = findOp(e.target.id);
        newValueDisplay(formula.n1);
    }
})

frame.addEventListener("click", (e) => {
    if (e.target.id == "equal") {
        if (formula.n1 == "" || formula.n2 == "" || formula.operator === undefined) return;
        
        if (formula.n1 == "." || formula.n2 == ".") return;

        if (formula.operator == divide && /^0+$/.test(formula.n2)) {
            formula.n1 = "";
            formula.n2 = "";
            formula.operator = undefined;
            newValueDisplay("");
            alert("ERROR: ZERO DIVISION");
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
    if (e.target.id == "c") {
        if (formula.operator === undefined) formula.n1 = "";
        else formula.n2 = "";
        newValueDisplay("");
    }
})

frame.addEventListener("click", (e) => {
    if (e.target.id == "dot") {
        if (formula.operator !== undefined && formula.n2 == "") {
            newValueDisplay("");
        }
        if (formula.operator === undefined) {
            if (!formula.n1.includes(".")) {
                formula.n1 += ".";
                updateDisplay(".");
            }
        } else {
            if (!formula.n2.includes(".")) {
                formula.n2 += ".";
                updateDisplay(".");
            }
        }
    }
})

function updateDisplay(input) {
    display.innerText += input;
}

function newValueDisplay(input) {
    if (input == "") display.innerText = input;
    else {
        let num = parseFloat(input);
        let factor = Math.pow(10, 6);
        let rounded = Math.round(num * factor) / factor;
        display.innerText = rounded.toString();
    }
}

function calculate(f) {
    if (formula.operator == divide && /^0+$/.test(formula.n2)) {}
    f.n1 = f.operator(parseFloat(f.n1), parseFloat(f.n2));
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
        case "exp":
            return exp;
    }
}