/* ------------------------------------------------------------------------
jQuery Confirm Plugin
Version: 1.0.1
Description: jQuery Confirm Dialog Replacement.
Original Script: TutorialZine (http://www.tutorialzine.com/)
Modify Script: Hendriono (http://modification-blog.blogspot.com/)
------------------------------------------------------------------------- */
(function($){
	
	$.confirm = function(params){
		
		if($('#confirmOverlay').length){
			// A confirm is already shown on the page:
			return false;
		}
		
		var buttonHTML = '';
		$.each(params.buttons,function(name,obj){
			
			// Generating the markup for the buttons:
			
			buttonHTML += '<a href="#" class="button '+obj['class']+'"><span>'+name+'</span></a>';
			
			if(!obj.action){
				obj.action = function(){};
			}
		});
		
		var markup = [
			'<div id="confirmOverlay">',
			'<div id="confirmBox">',
			'<h1>',params.title,'</h1>',
			'<p>',params.message,'</p>',
			'<div id="confirmButtons">',
			buttonHTML,
			'</div></div></div>'
		].join('');
		
		$(markup).hide().appendTo('body').fadeIn();
		
		var buttons = $('#confirmBox .button'),
			i = 0;

		$.each(params.buttons,function(name,obj){
			buttons.eq(i++).click(function(){
				
				// Calling the action attribute when a
				// click occurs, and hiding the confirm.
				
				obj.action();
				$.confirm.hide();
				return false;
			});
		});
		
		//Centering elemen
		$(window).resize(function(){
			$('#confirmBox').css({
				position: 'fixed',
				left: ($(window).width() - $('#confirmBox').outerWidth()) / 2,
				top: ($(window).height() - $('#confirmBox').outerHeight()) / 2
			});
		});

		$(window).resize();
	}
	
	
	$.confirm.hide = function(){
		$('#confirmOverlay').fadeOut(function(){
			$(this).remove();
		});
	}
	
})(jQuery);