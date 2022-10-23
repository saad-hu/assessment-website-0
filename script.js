//js is only used for responsive navbar

let hamburgerMenu = document.querySelector('.hamburger-menu');
let navbarLinks = document.querySelector('.navbar-links');

hamburgerMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})