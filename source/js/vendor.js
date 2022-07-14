// Swiper 7.4.1
// import './vendor/swiper';

function initialMap() {
  const mapContainer = document.querySelector('.contacts__map-container');
  mapContainer.classList.remove('contacts__map-container--nojs');
}



function menuOpen() {
  const header = document.querySelector('.header');
  const navMenu = document.querySelector('.main-nav');
  const navToggle = document.querySelector('.menu-toggle');

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

function scrollSmooth() {
// собираем все якоря; устанавливаем время анимации и количество кадров
  const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
  const animationTime = 300;
  const framesCount = 20;

  anchors.forEach(function (item) {
    // каждому якорю присваиваем обработчик события
    item.addEventListener('click', function (e) {
      // убираем стандартное поведение
      e.preventDefault();

      // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
      let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;

      // запускаем интервал, в котором
      let scroller = setInterval(function () {
        // считаем на сколько скроллить за 1 такт
        let scrollBy = coordY / framesCount;

        // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
        // и дно страницы не достигнуто
        if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
          // то скроллим на к-во пикселей, которое соответствует одному такту
          window.scrollBy(0, scrollBy);
        } else {
          // иначе добираемся до элемента и выходим из интервала
          window.scrollTo(0, coordY);
          clearInterval(scroller);
        }
        // время интервала равняется частному от времени анимации и к-ва кадров
      }, animationTime / framesCount);
    });
  });
}

export {initialMap, menuOpen, scrollSmooth};
