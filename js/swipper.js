const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 1,
    speed: 500,
    loop: true,
    autoplay: {
      delay: 4000
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })