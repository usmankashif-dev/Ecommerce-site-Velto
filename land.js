document.addEventListener("DOMContentLoaded", function () {
    let textelement = document.getElementById("txt");
    let text = "Daily Shop Non Stop";
    let index = 0;

    function typeeffect() {
        if (index < text.length) {
            textelement.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeeffect, 100);
        }
    }

    typeeffect();
});
document.addEventListener("keydown", function (event) {if (event.key === "Enter") {document.getElementById("button").click();}
    
})