'use strict';

const body = document.body;
const themeButton = document.querySelector('.btn');

if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
} else {
    console.error('Theme switch button not found');
}

function toggleTheme() {
    body.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');

    const className = body.className;
    this.textContent = className === "light-theme" ? "Dark" : "Light";

    console.log('current class name: ' + className);
}
