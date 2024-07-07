let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operator = '';

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
    operand1 = '';
    operand2 = '';
    operator = '';
}

function calculate() {
    let expression = display.value;
    let parts = expression.match(/(-?\d+)(\.\d+)?([+\-*\/])(-?\d+)(\.\d+)?/);

    operand1 = parseFloat(parts[1]);
    operator = parts[3];
    operand2 = parseFloat(parts[4]);

    let result;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        default:
            return;
    }

    display.value = result;
}
