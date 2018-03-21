// クリックでページ内移動
$(function(){

	var
		winW = $(window).width(),
		winH = $(window).height(),
		nav = $('ul a'),
		curPos = $(this).scrollTop();

	if (winW < 880){
		var headerH =0;
	}
	else{
		var headerH =63;
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


});


// 日本地図
$(function(){
	//地域を設定
	//{"code":[地域のコード], "name": [地域の名前], "color":[地域につける色], "hoverColor":[地域をマウスでホバーしたときの色], "prefectures":[地域に含まれる都道府県のコード]}
	var areas = [
		{"code": 1 , "name":"北海道地方", "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1], "detail":"生産者<br>特徴"},
		{"code": 2 , "name":"東北地方", "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7], "detail":"生産者<br>特徴"},
		{"code": 3 , "name":"関東地方", "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14], "detail":"生産者<br>特徴"},
		{"code": 4 , "name":"北陸・甲信越地方", "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20], "detail":"生産者<br>特徴"},
		{"code": 4 , "name":"東海地方", "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24], "detail":"生産者<br>特徴"},
		{"code": 6 , "name":"近畿地方", "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30], "detail":"生産者<br>特徴"},
		{"code": 7 , "name":"中国地方", "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35], "detail":"生産者<br>特徴"},
		{"code": 8 , "name":"四国地方", "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39], "detail":"生産者<br>特徴"},
		{"code": 9 , "name":"九州地方", "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46], "detail":"生産者<br>特徴"},
		// {"code":10 , "name":"沖縄地方", "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47], "detail":"生産者<br>特徴"}
	];

	//リンク先を連想配列で設定
	var areaLinks = {
		"北海道地方" : "/hokkaido",
		"東北地方" : "/hokkaido",
		"関東地方" : "/hokkaido",
		"北陸・甲信越地方" : "/hokkaido",
		"東海地方" : "/hokkaido",
		"近畿地方" : "/hokkaido",
		"中国地方" : "/hokkaido",
		"四国地方" : "/hokkaido",
		"九州地方" : "/hokkaido",
		// "沖縄地方" : "/hokkaido",
	};

	$("#map").japanMap(
		{
			areas : areas, //上で設定したエリアの情報
			selection : "area", //選ぶことができる範囲(県→prefecture、エリア→area)
			borderLineWidth: 0.25, //線の幅
			drawsBoxLine : false, //canvasを線で囲む場合はtrue
			movesIslands : false, //南西諸島を左上に移動させるときはtrue、移動させないときはfalse
			showsAreaName : true, //エリア名を表示しない場合はfalse
			width: 800, //canvasのwidth。別途heightも指定可。
			backgroundColor: "#ffffff", //canvasの背景色
			font : "MS Mincho", //地図に表示する文字のフォント
			fontSize : 12, //地図に表示する文字のサイズ
			fontColor : "areaColor", //地図に表示する文字の色。"areaColor"でエリアの色に合わせる
			fontShadowColor : "black", //地図に表示する文字の影の色
			onSelect:function(data){ //選択範囲をクリックしたときに実行
				location.href = areaLinks[data.area.name]; //data.area.nameは選択したエリアの名前
			},
			onHover:function(data){//マウスオーバー時
				$("#text").html(data.area.name + "<br>" + data.area.detail);
				$("#text").css("background", data.area.color);
			},
		}
	);
});
