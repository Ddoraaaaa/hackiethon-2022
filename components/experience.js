const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    
    on: {
      init: function () {
        console.log('swiper initialized');
      },
    },
  });

  swiper.addSlide(4, [
    '<div class="swiper-slide">Slide 10"</div>',
    '<div class="swiper-slide">Slide 11"</div>'
   ]);
  