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
//自动轮播鼠标经过移入和移除
	$(".out").hover(function(){
		clearInterval(t)
		},function(){
			t=setInterval(move,2000)
			});
			
//左右按钮
	$(".out .left").click(function(){
		moveL()
		})
	$(".out .right").click(function(){
		move()
		})


	/*导航显示*/
	$("#daohang>li").hover(function(){
		var width = $(this).width()
		var len = $(this).index()
		var left = width * len
/*		var ulWidth =  $(this).find(".nav_two ul").width()*/
		$(this).find(".nav_two ul").css('paddingLeft',left+'px')
	})

		/*导航显示隐藏*/
		var width = $(window).width();
		var off = true
		$('#plus').hide()
		$('#minus').hide()
		if(width<992){
			$('#plus').show()
			$(".navClick").slideToggle()
			$('#top').click(function(){
				$(".navClick").slideToggle()
				if(off){
					$('#plus').hide()
					$('#minus').show()
					off = false
				}else{
					$('#plus').show()
					$('#minus').hide()
					off = true
				}
			})
		}


		// 回到头部
		var backButton = $('#gotop');
		function backToTop() {
			$('html,body').animate({
				scrollTop: 0
			}, 800);
		}
		backButton.on('click', backToTop);
		$(window).on('scroll', function () { /*当滚动条的垂直位置大于浏览器所能看到的页面的那部分的高度时，回到顶部按钮就显示 */
			if ($(window).scrollTop() > $(window).height()) {
				backButton.fadeIn();
			} else {
				backButton.fadeOut();
			}
		});
		$(window).trigger('scroll'); /*触发滚动事件，避免刷新的时候显示回到顶部按钮*/

		try {
			//图片滚动
			var speed = 50
			marquePic2.innerHTML = marquePic1.innerHTML
			function Marquee() {
				if(demo.scrollLeft >= marquePic1.scrollWidth) {
					demo.scrollLeft = 0
				} else {
					demo.scrollLeft++
				}
			}
			var MyMar = setInterval(Marquee, speed)
			demo.onmouseover = function() {
				clearInterval(MyMar)
			}
			demo.onmouseout = function() {
				MyMar = setInterval(Marquee, speed)
			}
		}catch (e) {

		}
});
