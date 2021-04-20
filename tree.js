$(function(){
	/* header */
	$('.header_wrap a').click(function(e){
		e.preventDefault();
	});
	
	
	/* section main */
	var main_idx=1;
	setInterval(function(){
		main_idx++;
		if(main_idx == 5) main_idx = 1;
		var addimg = '<img src="images/main_slide0' + main_idx + '.jpg">';
		$('#main figure img').before(addimg);
		$('#main figure img:last').fadeOut(500, function(){
			$(this).remove();
		});
	},4000);
	$('#main .fa-chevron-right').click(function(){
		main_idx++;
		if(main_idx == 5) main_idx = 1;
		var addimg = '<img src="images/main_slide0' + main_idx + '.jpg">';
		$('#main figure img').before(addimg);
		$('#main figure img:last').fadeOut(250, function(){
			$(this).remove();
		});
	});
	$('#main .fa-chevron-left').click(function(){
		main_idx--;
		if(main_idx == 0) main_idx = 4;
		var addimg = '<img src="images/main_slide0' + main_idx + '.jpg">';
		$('#main figure img').before(addimg);
		$('#main figure img:last').fadeOut(250, function(){
			$(this).remove();
		});
	});
	$('.main_center ul li:first').click(function(){
		$('html, body').stop().animate({scrollTop:780},300);
	});
	$('.main_center ul li:last').click(function(){
		$('html, body').stop().animate({scrollTop:2520},500);
	});
	
	
	/* section info */
	$('#info section article ul li a').click(function(e){
		e.preventDefault();
	});
	var a=0;
	$('#info section .fa-chevron-right').click(function(){
		$('.info_slide_icon a i').removeClass('info_slide_icon_on');
		$('.info_slide_icon a').eq(a-1).children('i').addClass('info_slide_icon_on');
		a++;
		if(a == 3){
			$('#info ul:first').css('left', 0);
			a = 1;
		}
		$('#info ul:first').stop().animate({left:-1200*a},500);
	});
	$('#info section .fa-chevron-left').click(function(){
		$('.info_slide_icon a i').removeClass('info_slide_icon_on');
		$('.info_slide_icon a').eq(a-1).children('i').addClass('info_slide_icon_on');
		a--;
		if(a == -1){
			$('#info ul:first').css('left', -2400);
			a = 1;
		}
		$('#info ul:first').stop().animate({left:-1200*a},500);
	});
	$('.info_slide_icon a').click(function(e){
		e.preventDefault();
	});
	$('.info_slide_icon a:first').click(function(){
		$('#info ul:first').stop().animate({left:0});
		$('.info_slide_icon a i').removeClass('info_slide_icon_on');
		$(this).children('i').addClass('info_slide_icon_on');
		a = 0;
	});
	$('.info_slide_icon a:last').click(function(){
		$('#info ul:first').stop().animate({left:-1200});
		$('.info_slide_icon a i').removeClass('info_slide_icon_on');
		$(this).children('i').addClass('info_slide_icon_on');
		a = 1;
	});
	
	
	/* section program */
	$('.pro_left a').click(function(e){
		e.preventDefault();
	});
	
	
	/* top */
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop:0},300);
	});
});