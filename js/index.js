const menuBtn = document.getElementById('menuBtn');
const menuIcon = document.querySelector('#menuBtn > i');
const sideBar = document.getElementById('sideBar');
const sideBarContent = document.querySelector('#sideBar > div:first-child')
const overlay = document.getElementById('overlay');
const landingFooter = document.getElementById('landingFooter');

document.addEventListener('DOMContentLoaded', function (e) {
    AOS.init({
        duration: 800
    });

    setTimeout(() => {
        landingFooter.classList.remove('opacity-0')
    }, 1500);

    // displays double down arrow on landing page according to window offset
    window.addEventListener('scroll', () => {
            const currScroll = window.pageYOffset || document.documentElement.scrollTop;
            document.documentElement.setAttribute('data-scroll', currScroll);
    }, { passive: true });
});