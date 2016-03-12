
$(function() {

	var navOn = false;
	var contactOn = false;
	var paused = false;

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
			$(this).addClass('nav-highlight-bg');
			$(this).children().addClass('nav-highlight');
		}, function() {
			$(this).removeClass('nav-highlight-bg');
			$(this).children().removeClass('nav-highlight');
		});
//===========  FORM BUTTON HOVER  ==============
		$('.contact-button').hover(function() {
			$(this).addClass('button-highlight');
		}, function() {
			$(this).removeClass('button-highlight');
		});


//================  PopUP LINKS  ===============


		function getScrollTop(){
	        if(typeof pageYOffset!= 'undefined'){
	          return pageYOffset;
	        } else{
	          var b = document.body; //IE 'quirks'
	          var d = document.documentElement; //IE with doctype
	          d = (d.clientHeight)? d : b;
	          return d.scrollTop;
	        }
	    }    



	    $('.slider6').on('click', function() {
	    	if (!paused) {
		    	$(this).children().addClass('paused');
		    	$('.notify').addClass('pausedPopOut').fadeOut(1500, function() {
		    		$(this).removeClass('pausedPopOut').delay(500).fadeIn('fast');
		    	});
		    	paused = true;
		    } else if (paused) {
		    	$(this).children().removeClass('paused');
		    	paused = false;
		    }
	    });




		$('.slider4').on('click', function() {
	    	if (!paused) {
		    	$(this).children().addClass('paused');
		    	$('.notify').addClass('pausedPopOut').fadeOut(1500, function() {
		    		$(this).removeClass('pausedPopOut').delay(500).fadeIn('fast');
		    	});
		    	paused = true;
		    } else if (paused) {
		    	$(this).children().removeClass('paused');
		    	paused = false;
		    }
	    });
        

    		




		$('.popup-wrapper div').hover(function() {
			$(this).addClass('highlight');
			$(this).children().addClass('highlight-text');
		}, function() {
			$(this).removeClass('highlight');
			$(this).children().removeClass('highlight-text');
		});



//=========== LANDING PAGE SCROLL DOWN EVENT  ==============
		// $('.communication-box, .scroll_down').on('click', function() {
		// 	$('body, html').css('height', 'auto');
		// 	$('body').animate({scrollTop: 610}, 800);
			
		// });
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
