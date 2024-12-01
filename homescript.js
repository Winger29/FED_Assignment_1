/* top bar scroll function so it appears when it reaches close to the top */
let lastScrollTop = 0;
const topbar = document.querySelector('.topbar');
const scrollThreshold = 10;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const showAtTop = scrollTop < 100; 

    if (showAtTop) {
        topbar.classList.remove('hidden');
    } else {
        topbar.classList.add('hidden');    }

    lastScrollTop = Math.max(0, scrollTop);
});


/* function is for nav bar for mobile to be toggled or not */
function toggleSideNav() {
    const sideNav = document.getElementById('sideNav');
    sideNav.classList.toggle('active');
}

