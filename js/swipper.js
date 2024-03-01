const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    speed: 500,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })