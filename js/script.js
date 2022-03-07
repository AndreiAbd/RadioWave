/*
Powered : CoderX | Andrei Abd
█▀▀ █▀█ █▀▄ █▀▀ █▀█ ▀▄▀
█▄▄ █▄█ █▄▀ ██▄ █▀▄ █░█
CODER X |تم تصميم الموقع و برمجته من قبل اندريه عبد
mail      :  usr.g0a1@gmial.com
Whatsapp  :  +963934820511
Pinterest :  https://www.pinterest.com/andreiabd93/
Instagram :  https://www.instagram.com/andrei_abd/
Linkeden  :  https://www.linkedin.com/in/andreiabd
Facebook  :  https://www.facebook.com/andreiaabd/
Github    :  https://github.com/AndreiAbd
*/

let
    d = new Date(),
    elem = document.documentElement;

//Reload
function reload() {
    document.getElementById('00_Click').play();
    location.reload();
}
// Get Current Year
document.getElementById("addCurrentYear").innerHTML = d.getFullYear();

/* View in fullscreen */
function openFullscreen() {
    if (elem.requestFullscreen) {
        document.getElementById('00_Click').play();
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
//Side Nave Bar
function openNav() {
    document.getElementById('00_Click').play();
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById('00_Click').play();
    document.getElementById("mySidenav").style.width = "0";
}
//Loader Page
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});
//Disable Right Mouse Click
document.addEventListener('contextmenu', event => event.preventDefault());

document.addEventListener("keydown", (e) => {
    // USE THIS TO DISABLE CONTROL AND ALL FUNCTION KEYS
    // if (e.ctrlKey || (e.keyCode>=112 && e.keyCode<=123)) {
    // THIS WILL ONLY DISABLE CONTROL AND F12
    if (e.ctrlKey || e.keyCode == 123) {
        e.stopPropagation();
        e.preventDefault();
    }
});