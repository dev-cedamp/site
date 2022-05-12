
const navbarItem= document.querySelector(".navbar__links")
const navbarSubmenu= document.querySelector(".navbar__submenu")
const navbarSubitems= document.querySelectorAll(".navbar__subitem")
const menu = document.querySelector("#mobile-menu")
const menuLinks= document.querySelector(".navbar__menu")
const sections=document.querySelector(".sections")
const header=document.querySelector(".header")

// menu.addEventListener("click", function() {
//     menu.classList.toggle("is-active")
//     navbarSubitems.classList.toggle("active");
// })

// navbarItem.addEventListener("click", function() {
//     navbarSubmenu.classList.toggle("is-active");
//     navbarSubitems.classList.toggle("active");
// })
const headerNav= document.querySelector(".headerNav")


window.onscroll = function() {
    if(window.scrollY >= 500) {
        menuLinks.classList.add("sticky");
    }
    else {
        menuLinks.classList.remove("sticky");
    }
}


menu.addEventListener("click", function() {
    menu.classList.toggle("is-active")
    menuLinks.classList.toggle("active");
})

let slideIndex= 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if(n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display="none";
    }
    for (i=0; i < dots.length; i++) {
        dots[1].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += "active";
}

const topBar= document.getElementById('topbar');
const topLink= document.getElementById('topLink');
window.addEventListener('scroll', function(){
    const scrollHeight = window.scrollY;
    const navHeight = topBar.getBoundingClientRect().height;
if(scrollHeight > navHeight) {
    topBar.classList.add('fixed-nav');
}
else {
    topBar.classList.remove('fixed-nav');
}

if(scrollHeight > 200){
    topLink.classList.add('show-link');
}

else {
    topLink.classList.remove('show-link');
}
});

