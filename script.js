document.addEventListener("DOMContentLoaded", () => {
    const lightStyle = document.getElementById('light-style');
    const darkStyle = document.getElementById('dark-style');

    document.getElementById('theme-switcher').addEventListener('click', () => {
        if (darkStyle.disabled) {
            lightStyle.disabled = true;
            darkStyle.disabled = false;
        } else {
            lightStyle.disabled = false;
            darkStyle.disabled = true;
        }
    });
});
