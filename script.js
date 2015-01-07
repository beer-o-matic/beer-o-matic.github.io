var main = function(){
	$('.can').hover(function() {
		$(this).children('.highlight').toggle();
		$('.can').css('top', '-309');
		$(this).css('top', '-150');

	}, function() {
		$(this).children('.highlight').toggle();
		$('.can').css('top', '-150');
	});
};

$(document).ready(main);