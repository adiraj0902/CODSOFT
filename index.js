 let displayValue = '';

        function updateDisplay() {
            const display = document.getElementById('display');
            display.value = displayValue;
        }

        function appendNumber(num) {
            displayValue += num;
            updateDisplay();
        }

        function appendOperator(operator) {
            if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
                displayValue += operator;
                updateDisplay();
            }
        }

        function calculate() {
            try {
                displayValue = eval(displayValue).toString();
                updateDisplay();
            } catch (error) {
                displayValue = 'Error';
                updateDisplay();
            }
        }

        function clearDisplay() {
            displayValue = '';
            updateDisplay();
        }