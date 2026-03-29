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
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});