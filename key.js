const display = document.querySelector(".display");

document.addEventListener("keydown", function(event) {
    const key = event.key;  // Get the pressed key

    if (resultCalculated && (key >= "0" && key <= "9" || key === ".")) {
        return;
    }

    if(resultCalculated && ["+", "-", "*", "/"].includes(key)) {
        firstNumber = displayValue;
        operator = "";
        secondNumber = "";
        resultCalculated = false;
    }


    if (key >= "0" && key <= "9") {
        // Handle number key press
        displayValue += key;
        display.value = displayValue;
    } 
    else if (key === ".") {
        // Handle dot key press, you might want to check if current value already has a dot.
        if (!displayValue.includes('.')) {
            displayValue += key;
            display.value = displayValue;
        }
    }
    else if (["+", "-", "*", "/"].includes(key)) {
        // Check the last character. If it's also an operator, replace it with the new one.
        if (["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
            displayValue = displayValue.slice(0, -1) + key;
            display.value = displayValue;
            operator = key;
            return;
        }
        if (!firstNumber || operator === "") {
            firstNumber = displayValue;
            operator = key;
            displayValue += operator;
            display.value = displayValue;
        } else {
            secondNumber = displayValue.slice(firstNumber.length + 1);
            const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            firstNumber = result.toString();
            operator = key;
            displayValue = firstNumber + operator;
            display.value = displayValue;
            secondNumber = "";
        }
    } 
    else if (key === "Enter" || key === "=") {
        // Handle equals key press, similar to the button equals logic
        secondNumber = displayValue.slice(firstNumber.length + 1);
        const rawResult = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        const result = parseFloat(rawResult.toFixed(3)); 
        displayValue = result.toString();
        display.value = displayValue;
        firstNumber = displayValue;
        secondNumber = "";
        operator = "";
        resultCalculated = true;
    } 
    else if (key === "Backspace" || key === "Delete") {
        // Handle clear or delete action, you can clear the entire value or just remove last character based on your preference.
        displayValue = "";
        display.value = displayValue;
        firstNumber = "";
        secondNumber = "";
        operator = "";
    }
});
