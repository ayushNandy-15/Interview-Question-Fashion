// Modal Logic
const modal = document.getElementById("quickViewModal");
const closeBtn = document.querySelector(".close-modal");
const quickViewButtons = document.querySelectorAll(".quick-view-btn");

quickViewButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".product-card");
        const name = card.querySelector("h3").innerText;
        const price = card.querySelector("p").innerText;
        const img = card.querySelector("img").src;
        document.getElementById("modal-name").innerText = name;
        document.getElementById("modal-price").innerText = price;
        document.getElementById("modal-img").src = img;
               
        modal.style.display = "block";
    });
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }

// Filter Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Update active class
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const category = btn.getAttribute("data-filter");

        products.forEach(product => {
            if (category === "all" || product.getAttribute("data-category") === category) {
                product.style.display = "block";
                setTimeout(() => product.style.opacity = "1", 10);
            } else {
                product.style.opacity = "0";
                setTimeout(() => product.style.display = "none", 400);
            }
        });
    });
});