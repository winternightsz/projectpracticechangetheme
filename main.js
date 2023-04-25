let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
} );

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}; window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
} 



const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".home", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },       
});