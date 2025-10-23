const resultInput = document.getElementById('result');

function appendToDisplay(value) {
    resultInput.value += value;
}

function clearDisplay() {
    resultInput.value = '';
}

function deleteLastChar() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = new Function('return ' + resultInput.value)();
        resultInput.value = result;
    } catch (error) {
        resultInput.value = 'Error';
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]|\.|\/|\*|-|\+/.test(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLastChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
