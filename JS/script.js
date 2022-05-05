var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 1800,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    Keyboard: true,
  });