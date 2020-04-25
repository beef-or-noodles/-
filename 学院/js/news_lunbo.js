$(function(){
//下方for循环
	var size=$(".img li").size()
	for(var i=1; i<=size; i++){
		var li="<li>"+i+"</li>";
		$(".num").append(li)
		}
	/*size  获取当前元素个数*/
	
//手动控制轮播
$(".img li").eq(0).show()
$(".num li").eq(0).addClass('active-1')
/*mouseover  可以改成点击事件  click*/
$(".num li").click(function(){
$(this).addClass('active-1').siblings('li').removeClass('active-1')
var index=$(this).index()  /*index  当前元素的意思索引值*/
i=index; //i值和自动轮播值是相同的
$(".img li").eq(index).stop().fadeIn(/*淡入*/).siblings().stop().fadeOut(/*淡出*/)		/*eq 0开始*/
	});
	
//自动控制轮播
 var i=0;
 var t=setInterval(move,2000)	//定时器
	//右
	function move(){
	 i++;
	 if(i==size){i=0;}
	 $(".num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
	 $(".img li").eq(i).fadeIn().siblings().fadeOut();
	 };
	 //左
	function moveL(){
	 i--;
	 if(i==-1){i=size-1;}
	 $(".num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
	 $(".img li").eq(i).fadeIn().siblings().fadeOut();
	 }; 

	/*swper*/
	trList = ['leftUp', 'moveRight', 'moveDown', 'centerBig', 'rightDownBig'];
	var swiper = new Swiper('.swiper-container', {
		speed: 7000,
		autoplay: true,
		autoplayDisableOnInteraction: true,
		effect: 'fade',
		pagination: '.swiper-pagination',
		paginationClickable: true,
		onSlideChangeStart: function(swiper) {
			nextSlide = swiper.slides.eq(swiper.activeIndex);
			nextSlide.addClass(trList[Math.floor(Math.random() * 5)]);
		},
		onSlideChangeEnd: function(swiper) {
			prevSlide = swiper.slides[swiper.previousIndex];
			prevSlide.className = "swiper-slide";
		},
	});

});
