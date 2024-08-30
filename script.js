let input = document.getElementById('inputBox');
let expressionDisplay = document.getElementById('expression');
let buttons = document.querySelectorAll('button');

let expression = ""; // This will hold the current expression
let result = ""; // This will hold the result

function startBlinkingCursor() {
    input.classList.add('blinking-cursor');
}

function stopBlinkingCursor() {
    input.classList.remove('blinking-cursor');
}

// Set up event listeners for all buttons
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerHTML;

        if (buttonText === '=') {
            try {
                result = eval(expression).toString(); // Evaluate the expression
                input.value = result; // Show the result in the input
                expressionDisplay.innerText = expression; // Show the expression above the input
                stopBlinkingCursor();
            } catch (e) {
                input.value = "Error"; // Show error in the input
                expressionDisplay.innerText = "Error"; // Show error in the expression display
                expression = "";
                stopBlinkingCursor();
            }
        } else if (buttonText === 'AC') {
            expression = "";
            result = "";
            input.value = result;
            expressionDisplay.innerText = "0"; // Reset expression display
            stopBlinkingCursor();


            // Change the AC button color to red on click
            e.target.classList.add('clicked');
            setTimeout(() => {
                e.target.classList.remove('clicked');
            }, 1000); // Revert back to original color after 2 seconds

        } else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1); // Remove the last character
            input.value = result;
            expressionDisplay.innerText = expression || "0"; // Update expression display
            stopBlinkingCursor();
        } else {
            expression += buttonText;
            input.value = result; // Maintain result in input box
            expressionDisplay.innerText = expression; // Update expression display
            startBlinkingCursor();
        }
    });
});

// Initialize display
expressionDisplay.innerText = "0";


// ?================================


