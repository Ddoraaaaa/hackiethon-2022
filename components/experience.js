
 const backgroundSwiper = new Swiper('#background-swiper', {
  // direction: 'horizontal',
  effect: 'fade',
  // loop: true,
});

const contentSwiper = new Swiper('#content-swiper', {
    direction: 'horizontal',
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
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
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

