document.addEventListener("DOMContentLoaded", () => {
let name = document.getElementById("name").innerText
let address = document.getElementById("address").innerText
let phone = document.getElementById("Phone").innerText

emailjs.init("GImlemmt6qLFgsSJ2");

document.getElementById("fn-btn").addEventListener("click", () => {
    
    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let phone = document.getElementById("Phone").value.trim();

    if (!name || !address || !phone) {
        popup3();
        return;
    }

    var templateParams = {
        name: name,
        address: address,
        phone: phone
    };

    emailjs.send("service_a1ciqje", "template_ryfdbdn", templateParams)
        .then(function(response) {
          popup2();
          setTimeout(() => {
            window.location = "index.html";
          }, 1500)
        }, function(error) {
            popup1();
        });
});

   
});
function popup1(){
    let modal1 = new bootstrap.Modal(document.getElementById("popup1")) 
    modal1.show();
    setTimeout(() => {
        modal1.hide();
    }, 1500)
}
function popup2(){
    let modal1 = new bootstrap.Modal(document.getElementById("popup")) 
    modal1.show();
    setTimeout(() => {
        modal1.hide();
    }, 1500)
}
function popup3(){
    let modal1 = new bootstrap.Modal(document.getElementById("popup2")) 
    modal1.show();
    setTimeout(() => {
        modal1.hide();
    }, 1200)
}
