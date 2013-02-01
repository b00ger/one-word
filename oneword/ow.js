(function( $ ){
	var timers = [];
	var methods = {

		init : function( options ){
					 
					$('body').append('<div class="ow-white-out" style="display: none;"></div>');
					$('body').append('<div class="ow-target" style="display: none;"><h3>to</h3><h1>the</h1><h2>all</h2></div>');
					$('.ow-target').before('<a class="ow-modal-close">close</a>');
					var speed_link = "<span class='ow-speed-picker'> <a>300</a> <a>400</a> <a>500</a> </span>";
					
					this.each(function(i){	
					$(this).addClass('ow-obj'+i);
					$(this).after('<a href="#" class="oneword' + i + '">Read in One Word</a>' + speed_link);
					$('.oneword' + i).click(function(e){
						e.preventDefault();
						var menu = $(this).next('span.ow-speed-picker'); 
						var pos = $(this).next('span.ow-speed-picker').position();
						menu.css({'top':pos.top + 'px', 'left' :  '100px'})
						menu.toggle();
						
						menu.children('a').click(function(e){
							e.preventDefault();
							var speed = 60000/Number($(this).text());
							$('.ow-white-out').show();
							$('.ow-target').show();
							$('.ow-modal-close').show();
							var curr = 1;
							$('.ow-white-out').click(function(){
								$('.ow-white-out').fadeOut();
								$('.ow-modal-close').fadeOut();
								$('.ow-target').fadeOut();	
								clearInterval(timer);	
							});	
							var copy = $.trim( $('.ow-obj'+i).text().replace( /[\s\n\r]+/g, ' ' ) ).split(" ");
							var three_words = function(){
								if(curr >= copy.length){
									clearInterval(timer);
									$('.ow-white-out').fadeOut();
									$('.ow-target').fadeOut();
								}
								var last = (curr > 1) ? copy[curr-2] : "&nbsp;";
								var current = copy[curr-1];
								var next = (curr < copy.length) ? copy[curr+2] : "&nbsp;";
								$('.ow-target').html("<h3>" + last + "</h3>" + "<h1>" + current + "</h1>" + "<h2>" + next +"</h2>")
								curr++;
								
							}
							var timer = setInterval(three_words, speed); 
                                                        return 0;
						});
						return 0;
						
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



