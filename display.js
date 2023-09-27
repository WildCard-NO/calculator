// Initializing variables to store the values of the first number, second number, and the operator in the calculation.
let firstNumber = "";
let secondNumber = "";
let operator = "";

// When the document is fully loaded, the following code will run.
document.addEventListener("DOMContentLoaded", function() {
    // Getting a reference to the display input on the calculator.
    const display = document.querySelector(".display");
    let displayValue = "";  // This variable will store the current value shown on the calculator's display.

    // Set up an event listener specifically for the 'C' button to clear the calculator.
    document.querySelectorAll(".buttons button").forEach(button => {
        if (button.textContent === "C") {
            button.addEventListener("click", function() {
                // Clear all the values and reset the display.
                displayValue = "";
                firstNumber = "";
                secondNumber = "";
                operator = "";
                display.value = displayValue;
            });
        }
    });
    
    // Add an event listener to the button container to handle all button clicks.
    document.querySelector(".buttons").addEventListener("click", function(event) {
        // Check if the clicked element is a button.
        if (event.target.tagName === "BUTTON") {
            // Extract the last number being typed (useful to determine if a decimal point has already been added).
            const lastNumber = displayValue.split(/[-+*/]/).slice(-1)[0];
            
            // If the button pressed was a number or a decimal point.
            if (!isNaN(event.target.innerText)) {
                // Append the number to the display.
                displayValue += event.target.innerText;
                display.value = displayValue;
            } 
            // Check if the clicked button is a decimal point and the last number does not already have a decimal point.
            else if (event.target.innerText === "." && !lastNumber.includes(".")) {
                // If the display is empty or the last character is an operator, add "0." to the display.
                if (displayValue === "" || ["+", "-", "*", "/"].includes(displayValue.slice(-1))) {
                    displayValue += "0.";
                } else {
                    displayValue += ".";
                }
                display.value = displayValue;
            }

            // Check if an operator (+, -, *, /) was pressed.
            if (["+", "-", "*", "/"].includes(event.target.innerText)) {
                // If this is the first operator after a number.
                if (!firstNumber || operator === "") {
                    firstNumber = displayValue;  // Store the first number.
                    operator = event.target.innerText;  // Store the operator.
                    displayValue += operator;  // Show the operator on the display.
                    display.value = displayValue;
                } 
                // If an operator is pressed after entering the second number.
                else {
                    secondNumber = displayValue.slice(firstNumber.length + 1);  // Extract the second number.
                    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));  // Calculate the result.
                    firstNumber = result.toString();  // Store the result as the new first number.
                    operator = event.target.innerText;  // Update the operator.
                    displayValue = firstNumber + operator;  // Update the display with the result and the new operator.
                    display.value = displayValue;
                    secondNumber = "";
                }
            }

            // Check if the equals button was pressed.
            if (event.target.id === "equals") {
                secondNumber = displayValue.slice(firstNumber.length + 1);  // Extract the second number.
                const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));  // Calculate the result.
                displayValue = result.toString();  // Update the display value with the result.
                display.value = displayValue;

                // Reset variables for next operations.
                firstNumber = displayValue;
                secondNumber = "";
                operator = "";
            }
        }
    });
});
