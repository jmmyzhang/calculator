let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let formula = {
    n1: "",
    n2: "",
    operator: add,
}


let frame = document.querySelector(".frame");
let display = document.querySelector("#display");
let equal = document.querySelector("#equal");


frame.addEventListener("click", (e) => {
    if (e.target.classList == "num") {
        updateDisplay(e.target.id);
        if (formula.operator === "") {
            formula.n1 += e.target.id;
        } else {
            formula.n2 += e.target.id;
        }
    }
})

frame.addEventListener("click", (e) => {

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
    newValueDisplay(f.n1);
}