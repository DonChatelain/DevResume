var navOn = false;
var contactOn = false;
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


		$('.social-icons a').hover(function() {
			$(this).addClass('hover-line');
		}, function() {
			$(this).removeClass('hover-line');
		});


//============================================================   Contact Extras ================

		$('#phone-contact').on('click', function() {

			if (contactOn) {
				$('.contact-extras').removeClass('delayed');
				$('.arrow-down').addClass('delayed');
				$('.contact-extras').removeClass('contact-slide');
				$('.arrow-down').removeClass('arrow-slide')
				contactOn = false;

				setTimeout(function() {
					$('.contact-extras').html('');
				}, 300);
			} else {
				$('.arrow-down').removeClass('delayed');
				$('.contact-extras').addClass('delayed');
				$('.arrow-down').addClass('arrow-slide');
				$('.contact-extras').addClass('contact-slide');
				contactOn = true;

				setTimeout(function() {
					$('.contact-extras').html('<p>Call or text: </p><address>(702) 738-5757</address><address>djchatelain@gmail.com</address>');
				}, 300);
			}
			
		});
		



		



	};



	//=============================================  EXECUTIVES ===============================

	main.setListeners();

});
