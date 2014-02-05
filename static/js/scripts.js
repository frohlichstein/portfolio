$(function(){
	
	$(window).on('resize', function() {
	    resize_thumbs();
	});
	resize_thumbs();
	
	// Mobile Button
	$('.cat-open').click(function(){
		$(this).hide();
		$('.cat-nav').show();
		return false;
	});
	
	$('.show a').click(function(){
    	$('.main-nav').removeClass('show');
	});

    function resize_thumbs() {
        var y = $('.thumb').width();
        $('.thumb .project-title').css('height', y-4).css('width', y-4);
    }

});