$(function(){
	// ページ内移動
	var
		winW = $(window).width(),
		winH = $(window).height(),
		nav = $('ul a'),
		curPos = $(this).scrollTop();

	if (winW < 880){
		var headerH =0;
	}
	else{
		var headerH =60;
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
		render_highlight : { altImage : 'map-2.png' },
		mapKey: 'region',
		fillOpacity : 0.5,
	});
});
