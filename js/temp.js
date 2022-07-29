// Toogle Header

let toogleBtn = document.getElementById("header-toogle");
let header = document.getElementById("header");
// let banner = document.getElementById("banner");

header.style.transform = "scaleY(100%)";
toogleBtn.style.color = "white";
toogleBtn.style.transform = "rotate(0deg)";

let headerVisiblity = true;

function toogleHeader() {
    if (headerVisiblity == true) {
        header.style.transform = "scaleY(0)";
        toogleBtn.style.transform = "rotate(180deg)";
        toogleBtn.style.color = "#213c53";
        headerVisiblity = false;
    } else if(headerVisiblity == false){
        header.style.transform = "scaleY(100%)";
        toogleBtn.style.transform = "rotate(0deg)";
        toogleBtn.style.color = "white";
        headerVisiblity = true;
    }
}

toogleBtn.addEventListener("click", toogleHeader);

// Drop Down

let navDrop = document.getElementById("nav-drop");
let navDropicon = document.getElementById("nav-drop-icon");

navDrop.style.transform = "rotate(0deg)";

let dropDownBox = document.getElementById("drop-down-box");
dropDownBox.style.transform = "scaleY(0)";

function navDropDown() {
    navDropicon.style.transform = "rotate(180deg)";
    dropDownBox.style.transform = "scaleY(100%)";
}

function navDropUp() {
    navDropicon.style.transform = "rotate(0deg)";
    dropDownBox.style.transform = "scaleY(0)";
}

navDrop.addEventListener("mouseover", navDropDown);
dropDownBox.addEventListener("mouseleave", navDropUp);
