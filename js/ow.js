(function( $ ){
	var timers = [];
	var methods = {

		init : function( options ){ 
					$('body').append('<div class="white-out" style="display: none;"></div><div class="target" style="display: none;"><h3>to</h3><h1>the</h1><h2>all</h2></div>');
					this.each(function(i){	
					$(this).after('<a href="#" class="oneword' + i + '">Read in One Word</a>');
					$('.oneword' + i).click(function(){
						
						
						$('.white-out').show();
						$('.target').show();
						var curr = 1;
						$('.white-out').click(function(){
							$('.white-out').hide();
							$('.target').hide();	
							clearInterval(timer);	
						});	
						var copy = $.trim( $(this).prev('.entry').text().replace( /[\s\n\r]+/g, ' ' ) ).split(" ");
						var three_words = function(){
							if(curr >= copy.length)
								clearInterval(timer);
							var last = (curr > 1) ? copy[curr-2] : "&nbsp;";
							var current = copy[curr-1];
							var next = (curr < copy.length) ? copy[curr+2] : "&nbsp;";
							$('.target').html("<h3>" + last + "</h3>" + "<h1>" + current + "</h1>" + "<h2>" + next +"</h2>")
							curr++;
							
						}
						var timer = setInterval(three_words, 120); 
					});
					
					
					});
						
		}
	};	
	
	
$.fn.oneword = function(method) {
	if ( methods[method] ) {
		  return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	} 
	else if ( typeof method === 'object' || ! method ) {
		  return methods.init.apply( this, arguments );
	} 
	else {
		  $.error( 'Method ' +  method + ' does not exist on oneword' );
	}    
};
})( jQuery );

$(document).ready(function(){
		$('.entry').oneword();
});


