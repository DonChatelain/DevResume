var navOn = false;
$(function() {

	var main = {};

	main.setListeners = function() {

		$('.ham-menu').on('click', function() {
			if (navOn) {
				$('.menu-box ul li').removeClass('slideRight');
				navOn = false;
			} else {
				$('.menu-box ul li').addClass('slideRight');
				navOn = true;
			}
		});
		
		$('section').on('click', function() {
			if (navOn) {
				$('.menu-box ul li').removeClass('slideRight');
				navOn = false;
			}
		});
		

		$('.menu-box ul li').hover(function() {
			$(this).addClass('button-highlight');
			$(this).children().addClass('nav-highlight');
		}, function() {
			$(this).removeClass('button-highlight');
			$(this).children().removeClass('nav-highlight');
		});

		$('.contact-button').hover(function() {
			$(this).addClass('button-highlight');
		}, function() {
			$(this).removeClass('button-highlight');
		});

		$('.more-info').on('click', function() {
			$(this).next().toggle();
		});

		$('.communication-box, .scroll_down').on('click', function() {
			$('html, body').animate({scrollTop: 410}, 800);
		});

	};

	main.validateForm = function() {

	};


	//=============================================  EXECUTIVES ===============================

	main.setListeners();

});
