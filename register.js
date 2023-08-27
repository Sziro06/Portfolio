function createAccount(){
    let userName = document.getElementById('username').value;
    let passwordOne = document.getElementById('passwordone').value;
    let passwordTwo = document.getElementById('passwordtwo').value;

    localStorage.setItem('userName', userName);
    localStorage.setItem('passwordOne', passwordOne);

    if(passwordOne === passwordTwo){
        document.getElementById("yourname").textContent = userName;
        document.getElementById("yourpassword").textContent = passwordOne;
        document.getElementById("youraccount").style.display = "block";
        document.getElementById("registerarea").style.display = "none";
    }
}