$(function(){
	//背景轮播效果
	var i= 0;
	$(".back").eq(0).css("opacity","1");
	setInterval(function(){
		//改变qq空间字体颜色
		//$(".logo b").css("color","rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")");
		i++;
		if(i==$(".back").length){
			i = 0;
		}
		$(".back").css("z-index",1);
		$(".back").eq(i).css("z-index",99);
		$(".back").eq(i).animate({
			opacity:1
		},2000,function(){
			$(".back").not($(".back").eq(i)).css("opacity",0);
		})	
	},5000)
	//图标特效
	$(".list li").mouseenter(function(){
		$(this).animate({
			top:'-10px'
		},500)
	})
	$(".list li").mouseleave(function(){
		$(this).animate({
			top:'0px'
		},500)
	})
	//二维码特效
	$(".login .erweima").mouseenter(function(){
		$(".login .img2").fadeIn();
		$(".login .img1").animate({
			left:"87px"
		},500)
	})
	$(".login .erweima").mouseleave(function(){
		$(".login .img2").fadeOut();
		$(".login .img1").animate({
			left:"147px"
		},500)
	})
	//账号登录按钮
	$(".zhdl").click(function(){
		if($(".zhdl").html()=="忘了密码?"){
			window.open("html/zhpassword.html");
		}
		$(this).html("忘了密码?")
		$(".erweima").hide();
		$(".denglu").show();
		$(".login .p1").hide();
		$(".login .p2").hide();
		$(".login .p3").show();	
	})
	//登录按钮
	$(".denglu a").click(function(){
		//用户名为空
		if($(".username").val()==""){
			$(".login .p4").show();
			$(".login .span2").html("请输入你的账号！")
		}else if($(".username").val()==123456789||$(".userpass").val()==123456789){
			window.open("https://www.baidu.com");
		}else{
			$(".login .p4").show();
			$(".login .span2").html("请输入正确的账号！")
		}
	})
	//快速安全按钮
	$(".login .a1").click(function(){
		$(".zhdl").html("账号密码登录")
		$(".erweima").show();
		$(".denglu").hide();
		$(".login .p1").show();
		$(".login .p2").show();
		$(".login .p3").hide();
		$(".login .p4").hide();
	})
	//密码框
	$(".userpass").focus(function(){
		$(".userpass").attr("type","password");
		$(".userpass").val("");
		console.log($(".userpass").val());
	})
})
