const buttonMenu = document.getElementById('menu');

function toggleMenu() {
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('active-side-menu');
}
buttonMenu.addEventListener('click', toggleMenu);



