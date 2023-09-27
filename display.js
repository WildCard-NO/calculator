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
        }

    });
});