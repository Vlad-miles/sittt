jQuery( function( $ ) {
	new Swiper( '.carousel-slider', {
		slidesPerView: 3,
		spaceBetween: 40,
	} );
	new Swiper( '.carousel-slider1', {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination:{
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	} );

	new Swiper( '.carousel-slider_gabion', {
		slidesPerView: 3,
		spaceBetween: 40,
		pagination:{
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	} );

	const sliderIntro = new Swiper( '.intro-slider', {
		slidesPerView: 1,
		spaceBetween: 10,
		pagination:{
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		loop: true,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		autoplay: {
			delay: 3000,
		},
	} );

	// ES6 - можно без объявления переменной, просто следующим образом:
	
} );
