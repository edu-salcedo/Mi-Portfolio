
const toggle= document.querySelector(".nav-toggle");
const nav_menu= document.querySelector(".nav-menu");
const nav_link =document.querySelector(".nav-link");
toggle.addEventListener("click",()=>{
    nav_menu.classList.toggle("menu-active");
})

nav_link.addEventListener("click",()=>{
    nav_menu.classList.remove("menu-active")
})