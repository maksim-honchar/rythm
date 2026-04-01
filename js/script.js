"use strict"

// animation on scroll
AOS.init({
  duration: 1200
});

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

// changed background-color services section
const servicesSection = document.querySelector('.services');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      servicesSection.classList.add('is-active');
    } else {
      // Якщо хочеш, щоб при скролі вгору вона знову ставала білою:
      servicesSection.classList.remove('is-active');
    }
  });
}, { 
  // Спрацює, коли 20% секції з'явиться знизу екрана
  threshold: 0.2 
});

if (servicesSection) {
  observer.observe(servicesSection);
}