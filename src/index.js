import { buttons } from './js/initialization/buttons.js';
import { input } from './js/initialization/input.js';
import { theme } from './js/initialization/theme.js';
import './styles/global.scss';

document.addEventListener('DOMContentLoaded', () => {
    theme();
    buttons();
    input();
});
