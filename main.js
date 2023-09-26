const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');




let firstNumber = 3;
let operator = '+';
let secondNumber = 5;



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
    if(b !== 0) {
        return a / b;
    } else {
        console.error("Cannot divide by zero");
        return null;
    }
}