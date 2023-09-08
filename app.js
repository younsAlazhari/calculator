let currentInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById("result").value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        document.getElementById("result").value = currentInput;
    } catch (error) {
        currentInput = "Error";
        document.getElementById("result").value = currentInput;
    }
}
