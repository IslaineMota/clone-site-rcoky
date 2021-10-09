window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const srollPosition = window.scrollY > 0;
    header.classList.toggle('nav-scrolling-active', srollPosition);
})
