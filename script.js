let currentPage = 1;
let productsPerPage = 6;
const products = [
    { img: "toycar.webp", title: "Toy Car", desc: "Made For Kids Colour full And Full Of Fun And One Of The Best Gifts You Can Give.", price: 9.99 },
    { img: "watch.webp", title: "Mens Watch", desc: "Mens Watch Made With Silver ANd Leather Goes With All Kind Of suits.", price: 55 },
    { img: "kitchenpot.jpg", title: "Cooking Pots", desc: "Cooking Pots Set For Kitchen Made With Stainless Steel Best For Daily Use.", price: 150 },
    { img: "laptop.webp", title: "Laptop", desc: "A Laptop In Mat Black Finish 8gb ram i7 Gen 6 Best For Grapics Desiging.", price: 350 },
    { img: "makupkit.webp", title: "Makeup Kit", desc: "Makeup Kit For Womens Ready To Use Every Time Compatable And Best Quality.", price: 100 },
    { img: "wchain.webp", title: "Womens Chain", desc: "Womens Chain Made With Silver And Gold Rust Proof And Goes With Any Dress.", price: 45 },
    { img: "ricecooker.jpg", title: "Rice Cooker", desc: "Rice Cooker Long Lasting Will Make Your Rice To Perfection Made With Stell.", price: 99 },
    { img: "perfume.jpg", title: "Perfume", desc: "Perfume With 50ml Amount Made For Men Will Atract Everyone To You Long Lasting.", price: 24.99 },
    { img: "cloths.jpg", title: "Pair Of Pants", desc: "A Pair Of Pants With 2 Pants Included Good Quality Comfortable Made For Men.", price: 14.99 }
];

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("product-container");
    const searchInput = document.getElementById("search-bar");
    const sortSelect = document.getElementById("sort-options");

    function displayProducts(filteredProducts = products) {
        let start = (currentPage - 1) * productsPerPage;
        let end = start + productsPerPage;
        let paginatedProducts = filteredProducts.slice(start, end);

        container.innerHTML = "";
        paginatedProducts.forEach(product => {
            container.innerHTML += `
                <div class="col-md-4 col-sm-6 mb-4 product">
                    <div class="card-shadow-sm rounded-4 border border-1 border-gray">
                        <img src="${product.img}" class="card-img-top rounded-top-4" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title product-name">${product.title}</h5>
                            <p class="card-text">${product.desc}</p>
                            <p class="card-text product-price">${product.price}$</p>
                            <button type="button" class="add-to-cart btn btn-warning text-white">Add to Cart</button>
                            <button type="button" class="add-to-fav btn btn-warning text-white">Add to Fav</button>
                        </div>
                    </div>
                </div>`;
        });
        updatePaginationButtons(filteredProducts);
    }

    function updatePaginationButtons(filteredProducts = products) {
        document.getElementById("prev-btn").disabled = currentPage === 1;
        document.getElementById("next-btn").disabled = currentPage === Math.ceil(filteredProducts.length / productsPerPage);
    }

    function changePage(direction) {
        let totalPages = Math.ceil(products.length / productsPerPage);
        if (direction === "next" && currentPage < totalPages) {
            currentPage++;
        } else if (direction === "prev" && currentPage > 1) {
            currentPage--;
        }
        displayProducts();
    }

    document.getElementById("prev-btn").addEventListener("click", () => changePage("prev"));
    document.getElementById("next-btn").addEventListener("click", () => changePage("next"));

    document.body.addEventListener("click", function (event) {
        if (event.target && event.target.classList.contains("add-to-cart")) {
            let productElement = event.target.closest(".product");
            let productName = productElement.querySelector(".product-name").textContent;
            let productPrice = productElement.querySelector(".product-price").textContent;

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push({ name: productName, price: productPrice });

            localStorage.setItem("cart", JSON.stringify(cart));
            showNotification("Added to Cart!");
            updateCartCount();
        }

        if (event.target && event.target.classList.contains("add-to-fav")) {
            showNotification("Added to Favorites!");
        }
    });

    function updateCartCount() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let cartCount = document.getElementById("cartcount");
        if (cartCount) cartCount.textContent = cart.length;
    }

    function showNotification(message) {
        let notification = document.createElement("div");
        notification.innerText = message;
        notification.className = "notification";
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 1000);
    }

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm) ||
            product.desc.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        displayProducts(filteredProducts);
    });
    

    updateCartCount();
    displayProducts();

    let carticon = document.getElementById("cart");
    carticon.addEventListener("click", () => {
        window.location = "cart.html";
    });
sortSelect.addEventListener("change", function () {
    let selectedOption = sortSelect.value;
    let sortedProducts = [...products];

    if (selectedOption === "price-low") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "price-high") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (selectedOption === "a") {
        sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (selectedOption === "z") {
        sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    }

    currentPage = 1;
    displayProducts(sortedProducts);
});
function showNotification(message) {
    let notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#333";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
    notification.style.zIndex = "1000";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1000);
}
document.body.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("add-to-fav")) {
        let notification = document.getElementById("notification");
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        showNotification2("Added to Favirots!");
    }
});
function showNotification2(message) {
    let notification = document.createElement("div");
    notification.innerText = message;
    notification.style.position = "fixed";
    notification.style.top = "20px";
    notification.style.right = "20px";
    notification.style.background = "#333";
    notification.style.color = "white";
    notification.style.padding = "10px 20px";
    notification.style.borderRadius = "5px";
    notification.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.3)";
    notification.style.zIndex = "1000";

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1000);
}
});
