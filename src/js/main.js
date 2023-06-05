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

//Registration modal
let regModal = document.getElementById("registerModal");
let regBtn = document.getElementById("open-register-btn");
let regCross = document.getElementById("regCross");

regBtn.onclick = function () {
    regModal.style.display = "block";
}
regCross.onclick = function () {
    regModal.style.display = "none";
}

//Login modal
let loginModal = document.getElementById("loginModal");
let loginBtn = document.getElementById("open-login-btn");
let loginBtnForReg = document.getElementById("open-login-btn2");
let loginCross = document.getElementById("loginCross");

loginBtn.onclick = function () {
    loginModal.style.display = "block";
}
loginBtnForReg.onclick = function () {
    regModal.style.display = "none";
    loginModal.style.display = "block";
}
loginCross.onclick = function () {
    loginModal.style.display = "none";
}

//Forgot Password modal
let fpModal = document.getElementById("forgotPassModal");
let fpBtn = document.getElementById("forgot-pass");
let fpCross = document.getElementById("fpCross");

fpBtn.onclick = function () {
    loginModal.style.display = "none";
    fpModal.style.display = "block";
}
fpCross.onclick = function () {
    fpModal.style.display = "none";
}