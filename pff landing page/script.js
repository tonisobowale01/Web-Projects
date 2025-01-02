/* Toggle Menu */
let navBar = document.querySelector('nav');
let myNav = document.getElementById('nav');
let navLinks = myNav.querySelectorAll('li');
let hamMenu = document.getElementById('ham-menu');
hamMenu.addEventListener('click', () => {
    myNav.classList.toggle('active');
    hamMenu.classList.toggle('times');
});
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        myNav.classList.remove('active');
        hamMenu.classList.toggle('times');
    });
});
