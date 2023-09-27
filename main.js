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


function operate(operator, num1, num2) {
    switch(operator) {
        case'+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.error("Invalid operator");
            return null;
    }
}