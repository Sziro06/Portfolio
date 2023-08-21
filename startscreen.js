let navIsOpen = document.getElementById("navIsOpen");
let obtn = document.getElementById("obtn");

function changemode(){
    let changeBackground = document.body;
    changeBackground.classList.toggle("dark-mode");
}

function openNav(){
    navIsOpen.style.display = "block"
    obtn.style.display = "none"
}

function lockNav(){
    navIsOpen.style.display = "none"
    obtn.style.display = "block"
}