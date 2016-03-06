
$(function() {

	var navOn = false;
	var contactOn = false;
	

	var main = {};

	main.setListeners = function() {

//=========== TOGGLE MORE INFO IN WORKS PAGE (jquery too slow) ==============	
		var infoToggle = document.getElementsByClassName('more-info');	
		for (var i = 0; i < infoToggle.length; i++) {
			infoToggle[i].addEventListener('click', function() {
				if (this.nextElementSibling.classList.contains('hidden')) {
					this.nextElementSibling.classList.remove('hidden');
					this.textContent = 'Less Info';
				} else {
					this.nextElementSibling.classList.add('hidden');
					this.textContent = 'More Info';
				}	
			});
		}
//=========== TOGGLE NAV MENU ==============
		$('.ham-menu').on('click', function() {
			if (navOn) {
				$('.menu-box ul li').removeClass('slideRight');
				navOn = false;
			} else {
				$('.menu-box ul li').addClass('slideRight');
				navOn = true;
			}
		});  // TOGGLES OFF NAV MENU ON OUTSIDE CLICK
		$('section').on('click', function() {
			if (navOn) {
				$('.menu-box ul li').removeClass('slideRight');
				navOn = false;
			}
		});
//===========  NAV ITEM HOVER  ==============
		$('.menu-box ul li').hover(function() {
			$(this).addClass('button-highlight');
			$(this).children().addClass('nav-highlight');
		}, function() {
			$(this).removeClass('button-highlight');
			$(this).children().removeClass('nav-highlight');
		});
//===========  FORM BUTTON HOVER  ==============
		$('.contact-button').hover(function() {
			$(this).addClass('button-highlight');
		}, function() {
			$(this).removeClass('button-highlight');
		});
//=========== LANDING PAGE SCROLL DOWN EVENT  ==============
		$('.communication-box, .scroll_down').on('click', function() {
			$('body, html').css('height', 'auto');
			$('body').animate({scrollTop: 610}, 800);
			
		});
//===========  SOCIAL ICON HOVER  ==============
		$('.social-icons a').hover(function() {
			$(this).addClass('hover-line');
		}, function() {
			$(this).removeClass('hover-line');
		});

//===========  Contact Extras  ===================================

		$('#phone-contact').on('click', function() {
			if (contactOn) {
				$('.contact-extras').removeClass('contact-slide');
				contactOn = false;
				setTimeout(function() {
					$('.contact-extras').html('');
				}, 300);
			} else {
				$('.contact-extras').addClass('contact-slide');
				contactOn = true;
				$('.contact-extras').html('<p>Call or text: </p><address>(702) 738-5757</address><address>djchatelain@gmail.com</address>');
			}
		});

		$('#phone-contact').hover(function() {
			$('.arrow-down').addClass('arrow-slide');
		}, function() {
			$('.arrow-down').removeClass('arrow-slide');
		});
		



		

	}; //   END MAIN.SETLISTENERS()



	//=============================================  EXECUTIVES ===============================

	main.setListeners();

});
