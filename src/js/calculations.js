const arithmetic = ['+', '-', '*', '/', '%'];

export default class Calculations {
    constructor() {
        this.field = document.getElementById('main-field');
        this.num1 = null;
        this.num2 = null;
        this.operation = null;

        this.setupKeyboardListener();
    }

    setupKeyboardListener() {
        document.addEventListener('keydown', event => {
            this.handleKeyboardEvent(event);
        });
    }

    handleKeyboardEvent(event) {
        const key = event.key;
        const keyMap = {
            0: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            '.': ',',
            ',': ',',
            '+': '+',
            '-': '-',
            '*': '*',
            '/': '/',
            Enter: '=',
            '=': '=',
            Escape: 'AC',
            Delete: 'AC',
            '%': '%',
        };

        if (keyMap[key]) {
            event.preventDefault();
            this.handleClick(keyMap[key]);
        }
    }

    displayNum(num) {
        if (!num) return '';

        return num < 0 ? `(${num})` : `${num}`;
    }

    updateField() {
        const num1Display = this.displayNum(this.num1);
        const num2Display = this.displayNum(this.num2);
        const operationDisplay = this.operation ?? '';
        this.field.value = `${num1Display}${operationDisplay}${num2Display}`;
    }

    calculate() {
        if (!this.num1 || !this.num2 || !this.operation) {
            return;
        }
        let result = 0;

        switch (this.operation) {
            case '+':
                result = Number(this.num1) + Number(this.num2);
                break;
            case '-':
                result = Number(this.num1) - Number(this.num2);
                break;
            case '*':
                result = Number(this.num1) * Number(this.num2);
                break;
            case '/':
                if (this.num2 === 0) {
                    result = 'Error: Division by zero';
                    break;
                }
                result = Number(this.num1) / Number(this.num2);
                break;
            case '%':
                if (this.num2 === 0) {
                    result = 'Error: Division by zero';
                    break;
                }
                result = Number(this.num1) % Number(this.num2);
                break;
            default:
                return;
        }

        this.num1 = result;
        this.num2 = null;
        this.operation = null;
    }

    handleClick(key) {
        if (!isNaN(key) || key === '.') {
            if (!this.operation) {
                if (this.num1 === null) {
                    this.num1 = key === '.' ? '0.' : key;
                } else {
                    this.num1 = Number.isInteger(this.num1)
                        ? Number(`${this.num1}${key}`)
                        : this.num1.includes('.') && key === '.'
                          ? this.num1
                          : `${this.num1}${key}`;
                }
            } else {
                if (this.num2 === null) {
                    this.num2 = key === '.' ? '0.' : key;
                } else {
                    this.num2 = Number.isInteger(this.num2)
                        ? Number(`${this.num2}${key}`)
                        : this.num2.includes('.') && key === '.'
                          ? this.num2
                          : `${this.num2}${key}`;
                }
            }
        } else if (arithmetic.includes(key)) {
            if (this.num1 && !this.operation) this.operation = key;
            if (this.num1 && this.num2 && this.operation) {
                this.calculate();
                this.operation = key;
            }
        } else if (key === 'AC') {
            this.num1 = null;
            this.num2 = null;
            this.operation = null;
        } else if (key === '+/-') {
            if (this.num1 && !this.num2) {
                this.num1 *= -1;
            } else {
                this.num2 *= -1;
            }
        } else if (key === '=') {
            if (this.num1 && this.num2 && this.operation) this.calculate();
        }

        this.updateField();
    }
}
