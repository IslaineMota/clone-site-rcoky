const menuIcon = document.getElementById('menu-mobile');

function toggleMenu() {
    console.log("fsfds")
    const bar1 = document.getElementById('menu-bar-1');
    bar1.classList.toggle('menu-bar-1-active');
    const bar2 = document.getElementById('menu-bar-2');
    bar2.classList.toggle('menu-bar-2-active');
    const bar3 = document.getElementById('menu-bar-3');
    bar3.classList.toggle('menu-bar-3-active');

    const navMenu = document.getElementById('nav');
    navMenu.classList.toggle('active');
}
menuIcon.addEventListener('click', toggleMenu);



