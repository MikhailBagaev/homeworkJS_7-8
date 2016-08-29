$(function() {
	$('.window a').on('click', function() {
		var $clickTab = $(this).attr('id');

		if ($clickTab != $('.window a.active').attr('id')) {
			$('.window a').removeClass('selected');
			$(this).addClass('selected');
			$('.wrapper div').removeClass('selected');
			$('#par_' + $clickTab).addClass('selected');
            }
    }); 
    var $input = $('input');
    $input.hover(function() {
    	var $span = $(this).siblings('span');
    	$span.toggle();
    }); 	   	
    var $button = $('button');
        $button.on('click', function() {
        var $span = $('.wrapper span');
    	$span.show();    	      
    });   
    $('form').on('click', function() {
        var $span = $('.wrapper span');
    	$span.hide();    	      
    });     
});



