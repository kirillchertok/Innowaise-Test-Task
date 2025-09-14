export const input = () => {
    const input = document.getElementById('main-field');

    input.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
};
