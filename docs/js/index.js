window.addEventListener('DOMContentLoaded', function(){
	mainSlider();
	testimonialSlider();
	brandSlider();
	initModals();
	serviceTabs();
	googleMap();
	
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

const initModals = () => {
    
	$('.js-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        modal: false,
        // removalDelay: 300,
        showCloseBtn: false,
        callbacks: {
            
        }
    });

	$('.js-modal-close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
};

const serviceTabs = () => {

	$('.service__button').on('click', function(){
		let index = $(this).index();
		$(this).addClass('_active').siblings().removeClass('_active');
		$('.service__item').eq(index).addClass('_active').siblings().removeClass('_active')
	})
}


const googleMap = () => {
    function initMap() {
        let popupContent =
                '<p class="marker_content">Barnimstraße 26 14770 Brandenburg / Havel</p>',
            image = {
                url: '../assets/icons/marker.svg'
                // size: new google.maps.Size(49, 65),
                // origin: new google.maps.Point(-3, 0),
                // anchor: new google.maps.Point(-40, 140)
            },
            coordinates = { lat: 43.9103127, lng: -69.9889503 },
            map = new google.maps.Map(document.querySelector('.js-map-container'), {
                center: coordinates,
				disableDefaultUI: true,
                zoom: 17,
                styles: [
                    {
                        featureType: 'poi',
                        elementType: 'geometry.fill',
                        stylers: [
                            {
                                color: '#C5E3BF'
                            }
                        ]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry',
                        stylers: [
                            {
                                lightness: 100
                            },
                            {
                                visibility: 'simplified'
                            }
                        ]
                    },
                    {
                        featureType: 'road',
                        elementType: 'geometry.fill',
                        stylers: [
                            {
                                color: '#D1D1B8'
                            }
                        ]
                    },
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [
                            {
                                visibility: 'on'
                            },
                            {
                                color: '#C6E2FF'
                            }
                        ]
                    }
                ]
            }),
            marker = new google.maps.Marker({
                position: coordinates,
                map: map,
                // icon: image,
                animation: google.maps.Animation.DROP
            }),
            infowindow = new google.maps.InfoWindow({
                content: popupContent
            });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
    if(document.querySelector('.js-map-container')){
        initMap();
    }
    
};
