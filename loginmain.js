let users = JSON.parse(localStorage.getItem("users")) || [];
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let user = users.find(user => user.username === username && user.password === password);
    let loginstatus = false;
    if (user) {
        setTimeout(() => {
             window.location.href = "index.html"; 
        }, 1200)
        localStorage.setItem("loggedInUser", username);
      popup2()
        loginstatus = true;
    } else {
       popup1()
    }
}

let loginbutton = document.getElementById("login-button");
loginbutton.addEventListener("click", login);
function popup1(){
    let modal1 = new bootstrap.Modal(document.getElementById("popup1")) 
    modal1.show();
    setTimeout(() => {
        modal1.hide();
    }, 1200)
}
function popup2(){
    let modal2 = new bootstrap.Modal(document.getElementById("popup")) 
    modal2.show();
    setTimeout(() => {
        modal2.hide();
    }, 1200)
}

