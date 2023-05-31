//Toggle menu for navbar
const btn = document.querySelector("#navBar");
const menu = document.querySelector("#navContent");
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

//Toggle menu for user
const btnUserMain = document.querySelector("#btnUser");
const userMenuMain = document.querySelector("#userMenu");
btnUserMain.addEventListener("click", () => {
    userMenuMain.classList.toggle("hidden");
});