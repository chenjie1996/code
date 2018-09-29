$(function(){
	var yztimer ;
	var i = 7;
	var j = 1;
	var left1 = 26;
	var top1 =22 ;
	$(".yanzheng").mouseover(function(){
		clearInterval(yztimer);
		yztimer = setInterval(function(){
			i=i+j;
			if(i>10){
				j*=-1;
			}
			if(i==6){
				j*=-1;
			}
			$(".xiaoyuan").css("width",i+"px");
			$(".xiaoyuan").css("left",24.5+"px");
		},100)
	})
	$(".yanzheng").mouseout(function(){
		clearInterval(yztimer);
	})
	//用户名获得焦点
	$(".login input").focus(function(){
		$(".kong").eq(0).css("display","none");
	})
	//点击开始验证按钮
	$(".yanzheng_btn").click(function(){
		$(".pingtu").show();
	})
	//确定按钮
	$(".queding").click(function(){
		//判断用户名
		if($(".login input").val()==""){
			$(".kong").eq(0).css("display","block");
		}else{
			if($(".login input").val()!="" && $(".wancheng").css("display")=="none"){
				$(".anquan").css("display","block");
			}
			if($(".login input").val()!="" && $(".wancheng").css("display")=="block"){
				//alert("验证成功")
				$(".buzou_1 span").eq(1).css("background","#2f86f6");
				$(".buzou_1 p").eq(1).css("background","#2f86f6");
				$(".login").hide();
				$(".shenfen").show()
			}
		}
	})
	//拖拽滑块
	var x = 0;
	var num = 0;
	$(".huakuai").mousedown(function(evt){
		x = evt.pageX-$(".huakuai").offset().left;
		console.log(x+","+evt.pageX+","+$(".huakuai").offset().left);
		$(document).on("mousemove",fn1);
		$(document).on("mouseup",fn2);i
	})
	function fn1(evt){
		if(evt.pageX-x-$(".pingtu").offset().left<10){
			$(".huakuai").css("left",10+"px");
		}else if(evt.pageX-x-$(".pingtu").offset().left>282){
			$(".huakuai").css("left",282+"px");
		}else{
			$(".huakuai").css("left",evt.pageX-x-$(".pingtu").offset().left+"px");
			$(".xiaotu").css("left",evt.pageX-x-$(".pingtu").offset().left+"px");
			num = evt.pageX-x-$(".pingtu").offset().left;
		}
		console.log(evt.pageX-x-$(".pingtu").offset().left)
	}
	function fn2(){
		$(document).off("mousemove");
		if(num>=255 &&num<=265){
			$(".pingtu").hide();
			$(".wancheng").show();
			$(".anquan").hide();
			$(".yanzheng1").css("opacity","0");
		}else{
			$(".huakuai").animate({
				left:"20px"
			},500)
			$(".xiaotu").animate({
				left:"20px"
			},500)
			$(".pingtu").animate({
				marginLeft:"-70px"
			},50,function(){
				$(".pingtu").animate({
					marginLeft:"-86px"
				},50)
			})
		}
	}
	//点击x按钮
	$(".xx").click(function(){
		$(".pingtu").hide();
	})
})
