import './styles/global.scss';

function buttons() {
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
        ',',
        '=',
    ];
    const container = document.getElementById('buttons');

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

        container.appendChild(btn);
    });
}

function theme() {
    function setTheme(theme) {
        const themeContent = theme
            ? ['light-theme', 'dark-theme', '☀️']
            : ['dark-theme', 'light-theme', '🌙'];

        document.body.classList.remove(themeContent[0]);
        document.body.classList.add(themeContent[1]);
        localStorage.setItem('theme', themeContent[1]);
        themeToggle.textContent = themeContent[2];
    }

    const themeToggle = document.getElementById('theme-toggle');
    const themeValue = localStorage.getItem('theme');

    if (themeValue) {
        document.body.classList.add(themeValue);
        themeToggle.textContent = themeValue === 'dark-theme' ? '☀️' : '🌙';
    } else {
        document.body.classList.add('light-theme');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light-theme');
    }

    themeToggle.addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    theme();
    buttons();
});
