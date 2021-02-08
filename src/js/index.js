window.addEventListener('DOMContentLoaded', function(){
	mainSlider();
	testimonialSlider();
	brandSlider();
});

const mainSlider = () => {

	const slider = new Swiper('.js-main-slider', {
		// Options 
		spaceBetween: 30,
		grabCursor: true,
		preloadImages: false,
		lazy: {
			loadPrevNext: false,
		},

		autoplay: {
			delay: 3000,
		},

		pagination: {
			el: '.js-main-slider-pagination',
			type: 'bullets',
			bulletActiveClass: '_active',
			clickable: true

		},

	});
}

const testimonialSlider = () => {

	const slider = new Swiper('.js-testimonial-slider', {
		// Options 
		spaceBetween: 30,
		grabCursor: true,

		autoplay: {
			delay: 3000,
		},

		pagination: {
			el: '.js-testimonial-slider-pagination',
			type: 'bullets',
			bulletActiveClass: '_active',
			clickable: true

		},

	});
}
