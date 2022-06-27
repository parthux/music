//Menu Hamburguesa
const menuHamburguesa = document.getElementById('menu');
menuHamburguesa.addEventListener('click', () => {
    document.getElementById('navLinks').classList.toggle('nav__link--action');
    document.getElementById('lineOne').classList.toggle('nav__img-linea--1');
    document.getElementById('lineTwo').classList.toggle('nav__img-linea--2');
    document.getElementById('lineThree').classList.toggle('nav__img-linea--3');
    document.querySelector('body').classList.toggle('body');
});


