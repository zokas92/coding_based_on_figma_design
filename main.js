let btnHamburger = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav ul');

btnHamburger.onclick = () => {
    btnHamburger.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    btnHamburger.classList.remove('bx-x');
    navbar.classList.remove('active');
}