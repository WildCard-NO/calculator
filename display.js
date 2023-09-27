let firstNumber = "";
let secondNumber = "";
let operator = "";

document.addEventListener("DOMContentLoaded", function() {
    const display = document.querySelector(".display");
    let displayValue = "";

    // Separate listener for the 'C' button
    document.querySelectorAll(".buttons button").forEach(button => {
        if (button.textContent === "C") {
            button.addEventListener("click", function() {
                displayValue = "";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                display.value = displayValue;
            });
        }
    });
    
    document.querySelector(".buttons").addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
            const lastNumber = displayValue.split(/[-+*/]/).slice(-1)[0];
            
            if (!isNaN(event.target.innerText)) {
                displayValue += event.target.innerText;
                display.value = displayValue;
            } else if (event.target.innerText === "." && !lastNumber.includes(".")) {
                if (displayValue === "" || ["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
                    displayValue += "0.";
                } else {
                    displayValue += ".";
                }
                display.value = displayValue;
            }

            if (["+", "-", "*", "/"].includes(event.target.innerText)) {
                // Check the last character. If it's also an operator, replace it with the new one.
                if (["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
                    displayValue = displayValue.slice(0, -1) + event.target.innerText;
                    display.value = displayValue;
                    operator = event.target.innerText;
                    return;
                }
                if (!firstNumber || operator === "") {
                    firstNumber = displayValue;
                    operator = event.target.innerText;
                    displayValue += operator;
                    display.value = displayValue;
                } else {
                    secondNumber = displayValue.slice(firstNumber.length + 1);
                    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    firstNumber = result.toString();
                    operator = event.target.innerText;
                    displayValue = firstNumber + operator;
                    display.value = displayValue;
                    secondNumber = "";
                }
            }

            if (event.target.id === "equals") {
                secondNumber = displayValue.slice(firstNumber.length + 1);
                const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                displayValue = result.toString();
                display.value = displayValue;

                firstNumber = displayValue;
                secondNumber = "";
                operator = "";
            }
        }
    });
});
