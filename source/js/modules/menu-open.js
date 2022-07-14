const header = document.querySelector('.header');
const navMenu = document.querySelector('.main-nav');
const navToggle = document.querySelector('.menu-toggle');


function menuOpen() {

  header.classList.remove('header--nojs');
  navMenu.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('header--menu-opened')) {
      header.classList.remove('header--menu-opened');
      navMenu.classList.remove('main-nav--menu-opened');
      navToggle.classList.remove('menu-toggle--opened');
    } else {
      header.classList.add('header--menu-opened');
      navMenu.classList.add('main-nav--menu-opened');
      navToggle.classList.add('menu-toggle--opened');
    }
  });
}

export {menuOpen};
