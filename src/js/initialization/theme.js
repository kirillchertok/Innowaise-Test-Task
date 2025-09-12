export const theme = () => {
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
};
