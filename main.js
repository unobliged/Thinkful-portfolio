$(document).ready(function() {

	$('div#projects>div>a>img').on('click', function(event){
		if ($(this).attr('src').indexOf('tn_') >= 0) {
			var new_src = $(this).attr('src').replace('tn_','');
			$(this).toggleClass('big').attr('src', new_src);
			$(this).next().toggleClass('hidden big');			
			$('body').append('<div></div>');
			$('div:last').attr('id', 'overlay');
		} else {
			var new_src = 'tn_' + $(this).attr('src');
			$(this).toggleClass('big').attr('src', new_src);
			$(this).next().toggleClass('hidden big');
			$('div#overlay').remove();
		}
	});
	
	$('div#projects>div>a>img').hover(function(){
		$(this).parent().effect('highlight', {color: '#8a8db6'}, 'fast');
	});
	
	
});