const navbar = document.querySelector('header')
const navIcon = document.querySelector('.nav-icon')

let lastScroll = 0

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
        navbar.classList.add('collapse'); 
        navIcon.classList.add('collapse'); 
    } else {
        navbar.classList.remove('collapse');
        navIcon.classList.remove("collapse");
    }
    // console.log(window.scrollY);
    lastScroll = window.scrollY;
})