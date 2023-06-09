let  burger = document.querySelector(".burger");
let links = document.querySelector(".nav_links");
burger.addEventListener('click',()=>
{
    links.classList.toggle("nav_show");
})