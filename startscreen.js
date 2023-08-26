let navIsOpen = document.getElementById("navIsOpen");
let obtn = document.getElementById("obtn");


function changebackground(){

    let changeBackground = document.body;
    changeBackground.classList.toggle("dark-mode");

    let theme;

    if(changeBackground.classList.contains("dark-mode")){
        theme = "Dark";
    }else{
        theme ="Light";
    }

    localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));

if(GetTheme === "Dark"){
    document.body.classList = "dark-mode";
}

//------------------------------------------------------------------------------------------------

function openNav(){
    navIsOpen.style.display = "block"
    obtn.style.display = "none"
}

function lockNav(){
    navIsOpen.style.display = "none"
    obtn.style.display = "block"
}