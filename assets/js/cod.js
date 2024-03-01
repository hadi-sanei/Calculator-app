"use strict";
let themeSwitches = document.querySelectorAll('.theme-switch > input');
let showCalculate = document.getElementById('show-calculate');
let keyButtons = document.querySelectorAll('.key-button');
let resetButton = document.querySelector('.reset-button');
let deleteButton = document.querySelector('.delete-button');
let equalButton = document.querySelector('.equal-button');
function getCookie(name) {
    let cookiesArray = document.cookie.split(';');
    let mainCookie;
    cookiesArray.forEach(cookie => {
        if (cookie.includes(name)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1);
            return true;
        }
    });
    return mainCookie ? mainCookie : '';
}
if (getCookie('theme')) {
    let element = getCookie('theme');
    document.querySelector('#' + element).checked = true;
}
themeSwitches.forEach(themeSwitch => {
    themeSwitch.addEventListener('change', (e) => {
        if (themeSwitch.checked) {
            document.cookie = `theme=${e.target.id}`;
        }
    });
});
keyButtons.forEach(keyButton => {
    keyButton.addEventListener('click', (e) => {
        var _a;
        showCalculate.value += (_a = keyButton.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    });
});
deleteButton.addEventListener('click', () => {
    showCalculate.value = showCalculate.value.slice(0, -1);
});
resetButton.addEventListener('click', () => {
    showCalculate.value = '';
});
