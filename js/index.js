var navOn = false;
$(function() {

	var buttonController = {};

	buttonController.setListeners = function() {

		// $('.ham-menu').on('click', function() {
		// 	if (navOn) {
		// 		$('.menu-box').animate({
		// 			'right': '-=130px'
		// 		}, 400);
		// 		navOn = false;
		// 	} else {
		// 		$('.menu-box').animate({
		// 			'right': '+=130px'
		// 		}, 400);
		// 		navOn = true;
		// 	}
		// });

		$('.ham-menu').on('click', function() {
			if (navOn) {
				$('.menu-box').removeClass('slideRight');
				navOn = false;
			} else {
				$('.menu-box').addClass('slideRight');
				navOn = true;
			}
		});

		
		$('section').on('click', function() {
			if (navOn) {
				$('.menu-box').removeClass('slideRight');
				navOn = false;
			}
		});
		

		$('.menu-box ul a').hover(function() {
			$(this).parents('li').addClass('button-highlight');
			$(this).addClass('nav-highlight');
		}, function() {
			$(this).parents('li').removeClass('button-highlight');
			$(this).removeClass('nav-highlight');
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
			$('html, body').animate({scrollTop: 450}, 800);
		});

	};



	//=============================================  EXECUTIVES ===============================

	buttonController.setListeners();

});
