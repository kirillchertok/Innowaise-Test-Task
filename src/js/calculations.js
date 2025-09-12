const arithmetic = ['+', '-', '*', '/', '%'];

function chooseOperation(value) {
    const operation = arithmetic
        .map(operator => (value.includes(operator) ? operator : ''))
        .join('');

    const nums = value
        .replace(operation, ' ')
        .split(' ')
        .map(num => Number(num));

    return [operation, nums];
}

function calculate(input) {
    const [operation, nums] = chooseOperation(input.value);

    switch (operation) {
        case '+':
            input.value = nums[0] + nums[1];
            break;
        case '-':
            input.value = nums[0] - nums[1];
            break;
        case '*':
            input.value = nums[0] * nums[1];
            break;
        case '/':
            input.value = nums[0] / nums[1];
            break;
        case '%':
            input.value = nums[0] % nums[1];
            break;
        default:
            break;
    }
}

export const handleBtn = key => {
    const field = document.getElementById('main-field');
    const currentValue = field.value;

    if (!isNaN(key)) {
        field.value += key;
        return;
    }

    if (arithmetic.includes(key)) {
        if (!currentValue.length || arithmetic.includes(currentValue[currentValue.length - 1]))
            return;

        if (arithmetic.some(operator => currentValue.includes(operator))) {
            calculate(field);
        }
        field.value += key;
        return;
    }

    if (key === 'AC') {
        field.value = '';
        return;
    }
    if (key === '+/-') {
        if (!Number(currentValue[currentValue.length - 1])) return;
        if (!isNaN(currentValue)) {
            field.value = Number(currentValue) * -1;
            return;
        }
        if (currentValue.includes('+')) {
            field.value = currentValue.replace('+', '-');
            return;
        }
        if (currentValue.includes('-')) {
            field.value = currentValue.replace('-', '+');
            return;
        }
    }
    if (key === ',') {
        return;
    }

    if (key === '=') {
        if (!currentValue.length || arithmetic.includes(currentValue[currentValue.length - 1]))
            return;

        calculate(field);
        return;
    }
};
