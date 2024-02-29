"use strict";
let themeSwitches = document.querySelectorAll('.theme-switch > input');
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
