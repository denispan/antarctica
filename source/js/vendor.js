function initialMap() {
  const mapContainer = document.querySelector('.contacts__map-container');
  mapContainer.classList.remove('contacts__map-container--nojs');
}

function menuOpen() {
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.menu-toggle');
  const navItems = navMenu.querySelectorAll('a[href*="#"]');
  const body = document.body;

  function navMenuOpen() {
    header.classList.add('header--menu-opened');
    navMenu.classList.add('main-nav--menu-opened');
    navToggle.classList.add('menu-toggle--opened');
    body.classList.add('scroll-off');
  }

  function navMenuClose() {
    header.classList.remove('header--menu-opened');
    navMenu.classList.remove('main-nav--menu-opened');
    navToggle.classList.remove('menu-toggle--opened');
    body.classList.remove('scroll-off');
  }


  header.classList.remove('header--nojs');
  navMenu.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('header--menu-opened')) {
      navMenuClose();
    } else {
      navMenuOpen();
    }
  });

  document.addEventListener('click', function (e) {
    const target = e.target;
    const itsMenu = target === navMenu || navMenu.contains(target);
    const itsBtnMenu = target === navToggle;
    const menuIsActive = navMenu.classList.contains('main-nav--menu-opened');

    if (!itsMenu && !itsBtnMenu && menuIsActive) {
      navMenuClose();
    }
  });

  navItems.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      navMenuClose();
    });
  });
}

function addScrollSmooth() {

  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const blockID = item.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });

}

export {initialMap, menuOpen, addScrollSmooth};
