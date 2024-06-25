
var gallerySlider = new Swiper(".gallery-slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    dots: false,
  },
  effect: "coverflow",
  loop: true,
  centeredSlides: true,
  slidesPerView: 2.5,
  coverflowEffect: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1.5,
    slideShadows: false,
  },
});

