jQuery(document).ready(function($){
	
	$('a.scroll-link').click(function(e){
		$('html,body').animate({
			scrollTop: $(".content").offset().top -100
		}, 750);
	});
	
});