"use strict"

const menuIcon = document.querySelector('.menu__icon');
const menu = document.querySelector('.menu');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('_active');
  menu.classList.toggle('_active');
  document.body.classList.toggle('_lock');
};

// swipperjs
const swiper = new Swiper('.swiper', {
  speed: 1000,
  breakpoints: {
    // Коли ширина екрана >= 320px (мобільні)
    320: {
      autoplay: false, // Вимикаємо автоплей
    },
    // Коли ширина екрана >= 992px (десктоп)
    992: {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
    }
  },
  autoplay: {
    delay: 5000, // Пауза між слайдами (3000 мс = 3 секунди)
    disableOnInteraction: false, // Продовжувати автоплей після того, як користувач сам перегорнув слайд
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});