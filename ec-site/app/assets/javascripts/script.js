$(function(){

	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();

	if (winW < 880){
		var headerH =0;
	}
	else{
		var headerH =59;
	}

	$(nav).on('click', function(){
		nav.removeClass('active');
  	var $el = $(this),
		id = $el.attr('href');
 		$('html, body').animate({
   		scrollTop: $(id).offset().top - headerH
 		}, 500);
		$(this).addClass('active');
		if (winW < 880){
			$('#menuWrap').next().slideToggle();
			$('#menuBtn').removeClass('close');
		}
 		return false;
	});

	var timer = false;
	$(window).bind('load resize',function(){
		if (timer !== false){clearTimeout(timer);}
		timer = setTimeout(function(){
			var
				w = $(window).innerWidth(),
				bg = $('.bg'),
				bgH = bg.height();

			if(w > 800){
				$(function(){
			  	$(".vMid").css('height', bgH);
				});
			}
			else{
				$(function(){
			  	$(".vMid").css({'height':'auto','padding':'50px 20px'});
				});
			}
		});
	});

	$('.panel').hide();
	$('#menuWrap').toggle(function(){
		$(this).next().slideToggle();
		$('#menuBtn').toggleClass('close');
	},
	function(){
		$(this).next().slideToggle();
		$('#menuBtn').removeClass('close');
	});

	$(window).on('scroll', function(){
		var curPos = $(this).scrollTop();
		if(curPos > 80){
			$('#mainnav').addClass('changeNav');
		}
		else{
			$('#mainnav').removeClass('changeNav');
		}
	});

	$('img[usemap]').rwdImageMaps();

	// image mapster 玄米
	$('#ImageMap-genmai').mapster({
		singleSelect : true,
		clickNavigate : true,
		mapKey: 'region',
		areas: [
			{
				key: 'dummy',
				render_highlight : { altImage : 'assets/map-1.png' },
				fillOpacity : 0.0,
			},
			{
				key: 'hokkaido',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'tohoku',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kanto',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'hokuriku',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'tokai',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kinki',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'chugoku',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'shikoku',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kyushu',
				render_highlight : { altImage : 'assets/map-genmai.png' },
				fillOpacity : 1.0,
			}
		],
	});

	// image mapster 白米
	$('#ImageMap-hakumai').mapster({
		singleSelect : true,
		clickNavigate : true,
		mapKey: 'region',
		areas: [
			{
				key: 'dummy',
				render_highlight : { altImage : 'assets/map-1.png' },
				fillOpacity : 0.0,
			},
			{
				key: 'hokkaido',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'tohoku',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kanto',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'hokuriku',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'tokai',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kinki',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'chugoku',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'shikoku',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			},
			{
				key: 'kyushu',
				render_highlight : { altImage : 'assets/map-hakumai.png' },
				fillOpacity : 1.0,
			}
		],
	});
});
