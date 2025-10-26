const navbar = document.querySelector('header')
const navIcon = document.querySelector('.nav-icon')

let lastScroll = 0

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY && this.window.innerWidth > 850) {
        navbar.classList.add('collapse'); 
        navIcon.classList.add('collapse'); 
    } else if (this.window.innerWidth > 850){
        navbar.classList.remove('collapse');
        navIcon.classList.remove("collapse");
    }
    // console.log(window.scrollY);
    lastScroll = window.scrollY;
})