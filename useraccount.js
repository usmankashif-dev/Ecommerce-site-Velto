function signup() {
    let username = document.getElementById("username-signup").value.trim();
    let password = document.getElementById("password-signup").value.trim();

    if (username === "" || password === "") {
popup3();
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let existingUser = users.find(user => user.username === username);
    if (existingUser) {
       popup1();
        return;
    }
popup2();
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

  
}

let signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", signup);
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
function popup3(){
    let modal2 = new bootstrap.Modal(document.getElementById("popup2")) 
    modal2.show();
    setTimeout(() => {
        modal2.hide();
    }, 1200)
}

