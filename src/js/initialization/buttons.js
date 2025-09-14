import Calculations from '../calculations.js';

const keys = [
    'AC',
    '+/-',
    '%',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
];

export const buttons = () => {
    const container = document.getElementById('buttons');
    const calc = new Calculations();

    keys.forEach((key, index) => {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.classList.add(
            index < 3
                ? 'button--dark-gray'
                : (index + 1) % 4 === 0 || index + 1 === keys.length
                  ? 'button--orange'
                  : 'button--light-gray'
        );
        if (key === '0') {
            btn.classList.add('button__zero');
        }
        btn.textContent = key;

        btn.addEventListener('click', () => calc.handleClick(key));

        container.appendChild(btn);
    });
};
