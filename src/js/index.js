window.addEventListener('DOMContentLoaded', function(){
	mainSlider();
	testimonialSlider();
	// brandSlider();
	mobileMenu();
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

const mobileMenu = () => {

	$('.js-burger').on('click', function(){
		
		$('.js-menu').toggleClass('_opened');
		menuTopOffset();
	});

	function menuTopOffset(){
		let topOffset = $('.header__menu-button').offset().top - $(window).scrollTop() + $('.header__menu-button').outerHeight();
		$('.js-menu').css('top', topOffset + 'px');
		$('.js-menu').css('height', 'calc(100vh - '+ topOffset +'px)');
	}

	
	const stickyNavTop = $('.header__menu-button').offset().top;
	const stickyNav = function(){
		let scrollTop = $(window).scrollTop(); 

		if (scrollTop > stickyNavTop - 55 ) { 
			$('.header__menu-button').addClass('_sticky');
		} else {
			$('.header__menu-button').removeClass('_sticky'); 
		}
	};
	stickyNav();

	$(window).scroll(function() {
		stickyNav();
		menuTopOffset();
	});	
		
}
