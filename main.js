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
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "ERROR";
            }
        default:
            return "ERROR";
    }
}
