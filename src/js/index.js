window.addEventListener('DOMContentLoaded', function(){
	mainSlider();
	testimonialSlider();
	brandSlider();
	
	if(window.innerWidth <= 992) {
		mobileMenu();
	}
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

	$('.menu__item._submenu').on('click',function(e){
		e.preventDefault();
		$(this).find('.submenu').toggle();
		$(this).toggleClass('_opened');
	});
		
}

const brandSlider = () => {

	const slider = new Swiper('.js-brands-slider', {
	
		slidesPerView: 5,
		// spaceBetween: 120,
		loop: true,
		// centeredSlides: true,
		freeMode: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},

		breakpoints: {
			// 320: {
			// 	slidesPerView: 1,
			// 	centeredSlides: true,
			// },
			320: {
				slidesPerView: 2,
				spaceBetween: 30,
				centeredSlides: true,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			},
			1260: {
				slidesPerView: 5,
			}
		}
	})
}
