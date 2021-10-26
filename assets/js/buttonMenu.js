const buttonMenu = document.getElementById('menu-mobile');

function toggleMenu() {
    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('active');
}
buttonMenu.addEventListener('click', toggleMenu);



