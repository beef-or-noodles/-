$(function(){
	function lunbo(id){
		//下方for循环
		var size=$(id+" .img li").size()
		for(var i=1; i<=size; i++){
			var li="<li>"+i+"</li>";
			$(id+" .num").append(li)
		}
		/*size  获取当前元素个数*/

//手动控制轮播
		$(id+" .img li").eq(0).show()
		$(id+" .num li").eq(0).addClass('active-1')
		/*mouseover  可以改成点击事件  click*/
		$(id+" .num li").click(function(){
			$(this).addClass('active-1').siblings('li').removeClass('active-1')
			var index=$(this).index()  /*index  当前元素的意思索引值*/
			i=index; //i值和自动轮播值是相同的
			$(id+" .img li").eq(index).stop().fadeIn(/*淡入*/).siblings().stop().fadeOut(/*淡出*/)		/*eq 0开始*/
		});

//自动控制轮播
		var i=0;
		var t=setInterval(move,2000)	//定时器
		//右
		function move(){
			i++;
			if(i==size){i=0;}
			$(id+" .num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
			$(id+" .img li").eq(i).fadeIn().siblings().fadeOut();
		};
		//左
		function moveL(){
			i--;
			if(i==-1){i=size-1;}
			$(id+" .num li").eq(i).addClass('active-1').siblings('li').removeClass('active-1');
			$(id+" .img li").eq(i).fadeIn().siblings().fadeOut();
		};
//自动轮播鼠标经过移入和移除
		$(id+" .out").hover(function(){
			clearInterval(t)
		},function(){
			t=setInterval(move,2000)
		});

//左右按钮
		$(id+" .out .left").click(function(){
			moveL()
		})
		$(id+" .out .right").click(function(){
			move()
		})
	}
	lunbo("#lun1")
	lunbo("#lun2")

	/*不间断上下轮播*/
	function upLunbo(){
		try {
			//图片滚动

			var speed=50
			demo2.innerHTML=demo1.innerHTML
			function Marquee(){
				if(demo2.offsetTop-demo.scrollTop<=0)
					demo.scrollTop-=demo1.offsetHeight
				else{
					demo.scrollTop++
				}
			}
			var MyMar=setInterval(Marquee,speed)
			demo.onmouseover=function() {clearInterval(MyMar)}
			demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)}

		}catch (e) {}
	}
	upLunbo()

});
