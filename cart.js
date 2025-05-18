document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const checkoutBtn = document.getElementById("checkout");

    function updateCartUI() {
        if (!cartContainer) return;

        cartContainer.innerHTML = "";
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Your cart is empty</p>";
            return;
        }

        cart.forEach((item, index) => {
            const div = document.createElement("div");
            div.innerHTML = `<p>${item.name} - ${item.price}</p>`;

            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.setAttribute("type", "button");
            removeBtn.addEventListener("click", (event) => {
                event.preventDefault();
                cart.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cart));
                updateCartUI();
            });

            div.appendChild(removeBtn);
            cartContainer.appendChild(div);
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", (event) => {
            event.preventDefault();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        window.location = "lg.html"
            localStorage.removeItem("cart");
            updateCartUI();
        });
    }

    updateCartUI();
});
