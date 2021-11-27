const menuItems = document.querySelector(".menu__items");
const headerToggle = document.querySelector(".header__toggle");
const modal = document.querySelector(".modal");
const headerClose = document.querySelector(".header__close");

const setView = (closeBtn, imagePth, bgColor) => {
    headerClose.textContent = closeBtn;
    document.body.style.backgroundImage = imagePth;
    document.body.style.backgroundColor = bgColor;
};

menuItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("item"))
        setView("X", `url(assets/image/${e.target.dataset.item}.jpg)`, "transparent");
});

headerClose.addEventListener("click", () => {
    setView("", "none", "#a9cce3");
});

let clicked = false;
headerToggle.addEventListener("click", (e) => {
    modal.style.transform = `translateY(${clicked ? "100%" : "0%"})`;
    modal.style.transition = ".7s";
    clicked = !clicked;
});
