var navOpen = false;
$(function() {
	
	$('.ham-menu').on('click', function() {
		$('.menu-box').slideToggle();
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
		$('.works p:nth-child(7)').toggle();
	});



});