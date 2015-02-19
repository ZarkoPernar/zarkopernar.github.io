$(function () {
	$('.godown').click(function() {
		$('#second')
		    .velocity("scroll", { duration: 1500, easing: "ease" }) 
		    .velocity({ opacity: 1 });
	});
	
	setInterval(function() {
		var p = $('.masthead').offset();
		var h = $('.site-wrapper').height();
		if (p.top > h-400) {
			$('.masthead').addClass('white-nav');
			$('.masthead-nav a').css({
				color: '#666',
				textShadow: 'none',
			});
			$('.masthead-nav a:hover').css({
				color: '#444'
			});
			$('.masthead-nav .active a').css({
				borderBottomColor: '#333',
				color: '#333'
			});

		}
		else if($('.masthead').hasClass('white-nav') && p.top < h-400) {
			$('.masthead').removeClass('white-nav');
			$('.masthead-nav a').css({
				color: '',
				textShadow: ''
			});
			$('.masthead-nav .active a').css('border-bottom-color', '');
		}
	}, 100);
	

});