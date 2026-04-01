"use strict"

// animation on scroll
AOS.init({
  duration: 1000,         
 easing: 'ease-out-cubic',    // Плавне зупинення
  once: true,            // Не повторювати при скролі вгору (це дратує)
  offset: 100,           // Спрацює трохи раніше, ніж блок увійде в центр
  disable: 'mobile'      // На мобільних (твій Xeon це потягне, але на телефонах краще економити заряд)
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
  // Основні налаштування (для десктопа за замовчуванням)
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // Від 320px до 991px
    320: {
      autoplay: false, // На мобільних не крутимо автоматично
    },
    // Від 992px і вище
    992: {
      autoplay: {
        delay: 4000,
        disableOnInteraction: false, // Обов'язково повторюємо тут
        pauseOnMouseEnter: true,
      },
    }
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
      // servicesSection.classList.remove('is-active');
    }
  });
}, {
  // Спрацює, коли 20% секції з'явиться знизу екрана
  threshold: 0.2
});

if (servicesSection) {
  observer.observe(servicesSection);
}