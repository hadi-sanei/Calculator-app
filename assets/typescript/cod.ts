let themeSwitches: NodeListOf <HTMLInputElement>=document.querySelectorAll('.theme-switch > input');
function getCookie(name:string):string{
    let cookiesArray:string[]= document.cookie.split(';');
    let mainCookie:string|undefined;
    cookiesArray.forEach(cookie=>{
        if(cookie.includes(name)){
            mainCookie=cookie.substring(cookie.indexOf('=')+1);
            return true;
        }
    });
    
    return mainCookie ? mainCookie: '';
}
if(getCookie('theme')){
    let element=getCookie('theme');
    (document.querySelector('#'+element) as HTMLInputElement).checked=true;
}
themeSwitches.forEach(themeSwitch=>{
    themeSwitch.addEventListener('change',(e)=>{
        if(themeSwitch.checked){
            document.cookie =`theme=${(e.target as HTMLElement).id}`;
        }
    });
});