const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
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