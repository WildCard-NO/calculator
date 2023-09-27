let firstNumber = "";
let secondNumber ="";
let operator = "";


document.addEventListener("DOMContentLoaded", function() {

    // Variable to hold the value displayed on the calculator
    let displayValue= "";

    // Reference to the calculator display
    const display = document.querySelector(".display");

    // Add an event listener to the calculator's button container
    document.querySelector(".buttons").addEventListener("click", function (event) {

        // Check if  the clicked element is a button
        if (event.target.tagName === "BUTTON") {

            // If it's a number button or ".", update the display
            if (!isNaN(event.target.innerText) || event.target.innerText === ".") {
                displayValue += event.target.innerText;
                display.value = displayValue;
            }

            // If it's the clear button, reset the display
            if (event.target.innerText.toLowerCase() === "clear") {
                displayValue = "";
                display.value = displayValue;
            }


            if (["+", "-", "*", "/"].includes(event.target.innerText)) {
                if (!firstNumber) {
                    firstNumber = displayValue;
                    operator = event.target.innerText;
                    displayValue = "";
                } else {
                    secondNumber = displayValue;
                    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                    displayValue = result.toString();
                    display.value = displayValue;

                    firstNumber = result; // Save the reset for the next operation
                    operator = event.target.innerText; // Save tje next operator
                    displayValue = ""; // Reset displayValue for a possible next number
                }
            }

        // If the equals button is clicked
        if (event.target.id === "equals") {
            if (firstNumber && operator) {
                secondNumber = displayValue;
                let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
                displayValue = result.toString();
                display.value = displayValue;


                firstNumber = "";
                secondNumber = "";
                operator ="";
            }
        }

        }
    });
});



