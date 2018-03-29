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

	// mapster
	$('#ImageMap').mapster({
		singleSelect : true,
		clickNavigate : true,
		mapKey: 'region',
		areas: [{
			key: 'hokkaido',
			render_highlight : { altImage : 'assets/map-2.png' },
		},
		{
			key: 'tohoku',
			render_highlight : { altImage : 'assets/map-2.png' },
		}],
		areas: [{
			key: 'kanto',
			render_highlight : { altImage : 'assets/map-2.png' },
		},
		{
			key: 'hokuriku',
			render_highlight : { altImage : 'assets/map-2.png' },
		}],
		areas: [{
			key: 'kinki',
			render_highlight : { altImage : 'assets/map-2.png' },
		},
		{
			key: 'chugoku',
			render_highlight : { altImage : 'assets/map-2.png' },
		}],
		areas: [{
			key: 'shikoku',
			render_highlight : { altImage : 'assets/map-2.png' },
		},
		{
			key: 'kyushu',
			render_highlight : { altImage : 'assets/map-2.png' },
		}],
		fillOpacity : 0.5,
		// stroke: true,
		// strokeColor: 'black',
		// strokeOpacity: 1,
		// strokeWidth: 2,
	});
});
