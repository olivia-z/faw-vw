window.onload = function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        paginationType : 'custom',
        initialSlide :0,
        touchRatio : 0.5,
        loop:"loop",
        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    	swiperAnimateCache(swiper); //隐藏动画元素 
	    	swiperAnimate(swiper); //初始化完成开始动画
	    }, 
	    onSlideChangeEnd: function(swiper){ 
	    	swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	    } ,
	    watchSlidesProgress : true,
		watchSlidesVisibility : true,
		onSlideChangeStart: function(swiper){
			console.log(swiper.activeIndex);
			if(swiper.activeIndex != 6){
				$(".p5 .lightOut").css({"display":"none"});
			}else{
				$(".p5 .lightOut").css({"display":"block"});
				setTimeout(function(){
					$(".p5 .light1").css({"animation":"bling 1s 3.1s infinite"});
					$(".p5 .light2").css({"animation":"bling 1s 2.8s infinite"});
					$(".p5 .light3").css({"animation":"bling 1s 3.7s infinite"});
					$(".p5 .light4").css({"animation":"bling 1s 3.9s infinite"});
					$(".p5 .light5").css({"animation":"bling 1s 3.9s infinite"});
					$(".p5 .light6").css({"animation":"bling 1s 3.6s infinite"});
					$(".p5 .light7").css({"animation":"bling 1s 3.7s infinite"});
					$(".p5 .light8").css({"animation":"bling 1s 3.7s infinite"});
					$(".p5 .light9").css({"animation":"bling 1s 3.6s infinite"});
				},1000)
			
			}
			
			if(swiper.activeIndex != 5){
				$("#liu").hide()
			}
			if(swiper.activeIndex != 7){
				$(".p7 .noswipe").css({"display":"block"});
				$(".p7 .part2").hide();
				$(".p5 .handMove").css({"display":"block"});
//				$(".p5bg").attr("src","img/5/bg.jpg");
				$(".p7 .part1").css({"animation":"fadeIn 0.3s forwards"});
				$(".p7 .lx .left").css({"left":"67.5px","top":"0vh"});
				$(".p7 .lx .right").css({"animation":"rightBack 1s forwards"});
				$(".p7 .lx .left").css({"animation":"leftBack 1s forwards"});
			}
		}
    });
	swiper.progress;
	swiper.slides[2].progress;
	
	var p5p1 = document.getElementById('p5p1'),
	winWeight = window.innerWidth,
	middleWin = winWeight / 2,
	endTouchX = 0;
	
	p5p1.addEventListener('touchstart', function(ev) {
		document.addEventListener('touchmove', function(ev) {
			ev.preventDefault();
			var ev = ev.touches[0];
			p5p1.style.left = (ev.pageX - winWeight)%winWeight + 'px';
			endTouchX = ev.pageX;
		}, false);
		p5p1.addEventListener('touchend', function(ev) {
			if(parseInt(p5p1.style.left) < parseInt(-winWeight+260)){
				$(".notice").css({"animation":"fadeOut 1s forwards"});
				$("#p5p1").css({"animation":"fadeOut 1s 0s forwards"});
				$("#liu").fadeIn();
			
			}
		}, false);
	}, false);
	
	
	$(".p7").swipe({
		swipe:function(event, direction, distance, duration, fingerCount) {
	//		console.log("你用"+fingerCount+"个手指以"+duration+"秒的速度向" + direction + "滑动了" +distance+ "像素 " );
			if(direction=="down"){
				$(".p7 .part1").css({"animation":"fadeOut 0.3s forwards"});
				$(".p7 .part2").css({"display":"block"});
				$(".p7 .noswipe").hide();
				$(".p7 .handMove").css({"display":"none"});
				$(".p7 .lx .left").css({"animation":"leftLx 1s forwards"});
				$(".p7 .lx .right").css({"animation":"rightLx 1s forwards"});
			}		
		}
	});
	
	$(".p9 .shareBtn").click(function(){
		$(".p9 .share").css({"animation":"fadeIn 1s forwards","display":"block"})
	});
	$(".p9 .share").click(function(){
		$(".p9 .share").css({"animation":"fadeOut 1s forwards","display":"none"})
	});
	
	
}
