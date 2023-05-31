// Navebar user icon toggle
const userBtn = document.querySelector("#userToogle");
const userBtnToggle = document.querySelector("#dropdown-user");
userBtn.addEventListener("click", () => {
    userBtnToggle.classList.toggle("hidden");
});

// Dashboard sidebar toggle

const btn = document.querySelector("#dashboardSidebar");
const menu = document.querySelector("#logo-sidebar");
btn.addEventListener("click", () => {
    menu.classList.toggle("-translate-x-full");
});

// Touch anywhere to close the sidebar
document.getElementById("webpage").addEventListener("click", function () {
    if (!document.getElementById("logo-sidebar").classList.contains("-translate-x-full")) {
        document.getElementById("logo-sidebar").classList.add("-translate-x-full");
    }
});

// Dropdown for Buy Land in dashboard 
const buyLandDash = document.querySelector("#buyLandBtnDashboard");
const buyLandDashList = document.querySelector("#buyLandListDashboard");
buyLandDash.addEventListener("click", () => {
    buyLandDashList.classList.toggle("hidden");
});

// Dropdown for Sell Land in dashboard 
const sellLandDash = document.querySelector("#sellLandBtnDashboard");
const sellLandDashList = document.querySelector("#sellLandListDashboard");
sellLandDash.addEventListener("click", () => {
    sellLandDashList.classList.toggle("hidden");
});








// document.querySelector('#userToogle').addEventListener("click",function(){

//     if (document.getElementById("dropdown-user").classList.contains("hidden")) {

//         document.getElementById("dropdown-user").classList.remove("hidden");
//     }
//     else{
//         document.getElementById("dropdown-user").classList.add("hidden");
//     }
// })

// document.querySelector('#dashboardSidebar').addEventListener("click",function(){

//     if (document.getElementById("logo-sidebar").classList.contains("-translate-x-full")) {

//         document.getElementById("logo-sidebar").classList.remove("-translate-x-full");
//     }
//     else{
//         document.getElementById("logo-sidebar").classList.add("-translate-x-full");
//     }
// })
