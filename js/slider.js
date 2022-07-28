const slider = document.querySelector('.swiper-container');

var mySwiper = new Swiper('.swiper1', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination:{
		el: '.swiper-pagination',
		type: 'bullets',
		
	},
	loop: true,
	// effect: 'fade',
	autoplay: {
		delay: 3000,
	},
})
var swiper = new Swiper('.swiper2', {

    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    initialSlide: 4,
	slideClass:'slide',
	wrapperClass:'slider-wrapper',

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',

    },
  });