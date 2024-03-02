let themeSwitches: NodeListOf<HTMLInputElement> = document.querySelectorAll('.theme-switch > input');
let showCalculate = document.getElementById('show-calculate') as HTMLInputElement;
let keyButtons = document.querySelectorAll('.key-button');
let resetButton = document.querySelector('.reset-button') as HTMLElement;
let deleteButton = document.querySelector('.delete-button') as HTMLElement;
let equalButton = document.querySelector('.equal-button') as HTMLElement;


function getCookie(name: string): string {
    let cookiesArray: string[] = document.cookie.split(';');
    let mainCookie: string | undefined;
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
    (document.querySelector('#' + element) as HTMLInputElement).checked = true;
}


themeSwitches.forEach(themeSwitch => {
    themeSwitch.addEventListener('change', (e) => {
        if (themeSwitch.checked) {
            document.cookie = `theme=${(e.target as HTMLElement).id}`;
        }
    });
});
// show use operands and operators
keyButtons.forEach(keyButton => {
    keyButton.addEventListener('click', (e) => {
        showCalculate.value += keyButton.textContent?.trim();
    });
});

// calculate
equalButton.addEventListener('click', () => {
    let calculate: string = showCalculate.value;
    if (showCalculate.value.includes('⨯')) {
        calculate = showCalculate.value.replace('⨯', '*');
    }

    try {
        showCalculate.value = eval(calculate);
    } catch {
        alert('The entered value is invalid!');
    }

});

// delete one operand
deleteButton.addEventListener('click', () => {
    showCalculate.value = showCalculate.value.slice(0, -1);
});
// delete all operation
resetButton.addEventListener('click', () => {
    showCalculate.value = '';
});
