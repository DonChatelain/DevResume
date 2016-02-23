$(function() {

	$('.ham-menu').on('click', function() {
		$('.menu-box').slideToggle();
	});

	$('.menu-box ul a').hover(function() {
		$(this).parents('li').css({
			'background-color' : '#fff',
			'color' : '#000'
		});
		$(this).css({
			'color' : '#000'
		});
	}, function() {
		$(this).parents('li').css({
			'background-color' : '#000',
			'color' : '#fff'
		});
		$(this).css({
			'color' : '#fff'
		});
	});




});