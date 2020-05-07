$(function () {
        var speed=50
        demo2.innerHTML=demo1.innerHTML
        function Marquee(){
                if(demo2.offsetTop-scrollDiv.scrollTop<=0)
                        scrollDiv.scrollTop-=demo1.offsetHeight
                else{
                        scrollDiv.scrollTop++
                }
        }
        var MyMar=setInterval(Marquee,speed)
        scrollDiv.onmouseover=function() {clearInterval(MyMar)}
        scrollDiv.onmouseout=function() {MyMar=setInterval(Marquee,speed)}
})

