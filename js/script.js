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
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      autoplay: false,
    },
    992: {
      autoplay: {
        delay: 4000,
        pauseOnMouseEnter: true,
      },
    }
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});