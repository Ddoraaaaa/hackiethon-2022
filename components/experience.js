const backgroundSwiper = new Swiper('#background-swiper', {
  // direction: 'horizontal',
  effect: 'fade',
  // loop: true,
});
var yearIds = ['2021', '2022', '2023', '2024']; 
const contentSwiper = new Swiper('#content-swiper', {
    direction: 'vertical',
    speed: 3000,
    // effect: 'fade',
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"></span>';
        },
    },
  });

  // const controlSwiper = new Swiper('#control-swiper', {
  //   spaceBetween: 10,
  //   centeredSlides: true,
  //   slidesPerView: 'auto',
  //   // touchRatio: 0.2,
  //   slideToClickedSlide: true,
  //   loop: true,
  //   loopedSlides: 2,
  // });

  contentSwiper.controller.control = [backgroundSwiper];
// contentSwiper.controller.control = [controlSwiper, backgroundSwiper];
// controlSwiper.controller.control = [contentSwiper];  

