document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openButton");
    const giftBox = document.getElementById("giftBox");
    const voucherText = document.getElementById("voucherText");
    const background = document.querySelector(".background-gifts");
    
    for (let i = 0; i < 20; i++) {
        let icon = document.createElement("div");
        icon.classList.add("gift-icon");
        icon.style.left = Math.random() * 100 + "vw";
        icon.style.top = Math.random() * 100 + "vh";
        icon.style.animationDuration = (Math.random() * 3 + 2) + "s";
        background.appendChild(icon);
    }
    
    openButton.addEventListener("click", function () {
        openButton.classList.add("hidden");
        giftBox.classList.remove("hidden");
    });
    
    giftBox.addEventListener("click", function () {
        giftBox.classList.add("explode");
        setTimeout(() => {
            giftBox.style.display = "none";
            voucherText.style.display = "block";
        }, 500);
    });
});