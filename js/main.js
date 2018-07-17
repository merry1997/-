//rem布局自适应

(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if(clientWidth>=750)
			{
				docEl.style.fontSize = '100px';
			}
			else
			{
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
			
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

//导航切换效果

$(function(){
	
	//注册页面同意协议效果
	$(function(){
	
		$(".check_box").click(function(){
			  $(this).toggleClass("check_box_active");
		});
		
	});
	
	//蒙版
	$(document).ready(function(){
		var bigHeight = $(window).height();//获取屏幕高度
		$('.mengban').height(bigHeight);
		$('.wrap.logo').height(bigHeight);//登录首页背景图
		
	});
	
	//底导航
	$(".main_nav").children("a").click(function(){
	
		$(this).addClass("selected").siblings('a').removeClass('selected');
	});
	
	//确认支付页面->支付方式
	$("#payment").children("li").click(function(){
		
		$("#payment").children("li").children("a").removeClass('selected');
		$(this).children("a").addClass("selected").siblings('li').children("a").removeClass('selected');
		
	});
	
	//分类顶部nav切换
	$(".navbar").children("li").click(function(){
	
		$(this).children("span").addClass("currentNav").parents("li").siblings('li').children("span").removeClass('currentNav');
		
	});
	
	//订单顶部nav切换
	$(".order_navbar").children("li").click(function(){
	
		$(this).children("span").addClass("currentNav").parents("li").siblings('li').children("span").removeClass('currentNav');
		
	});
	
	//购物车页面-数量选择弹框
	$(".shopping_num").click(function(){
	
		opentan_details();
		
	});
	//立即购买选择数量
	$(function(){
		
		$(".add").click(function(){
			var t=$(this).parent().find('input[class*=shownum]');
			t.val(parseInt(t.val())+1);
			$(".total_num").html(parseInt(t.val()));
		});
		$(".less").click(function(){
			var t=$(this).parent().find('input[class*=shownum]');
			t.val(parseInt(t.val())-1)
			$(".total_num").html(parseInt(t.val()));
			if(parseInt(t.val())<1){
				t.val(1);
				$(".total_num").html(parseInt(1));
			}
		});
	
	});
	
	//购物车页面-选择订单
	$(".chouse_bar").each(function(index, element) {//和上面一样单个列表，选择-取消
		$(this).click(function(){
			$(this).toggleClass("chouse_bar_choused");
		});
	});
	$(".all_chouse").click(function(){//全选，选择-取消列表相应变化
		
		
		$(this).toggleClass("chouse_bar_choused");
		
		if($(this).hasClass("chouse_bar_choused")){
			
			$(".chouse_bar").addClass("chouse_bar_choused");
		}
		else{
			
			$(".chouse_bar").removeClass("chouse_bar_choused");
		}
		
	});
	
	//订单切换
	$(".order_header span").on("click",function(){
		$(this).addClass("on").siblings().removeClass("on");
		$(".order_list").eq($(this).index()).show().siblings(".order_list").hide();
	}).eq(0).click();
	
	//评分   
	var newScore = new Array("很不满意","不满意","一般","满意","非常满意");
	$(".score_box i").on("click",function(){
		$(".score_box i").removeClass("on");
		$(this).addClass("on").prevAll("i").addClass("on");
		$(this).siblings(".score_text").text(newScore[$(this).index()-1]);
	}).eq(2).click();
	
	/*余额充值*/
	$(".recharge_title").on("click",function(){
		$(".recharge_title input").focus();
	});
	
	/*支付方式*/
	$(".recharge_text .recharge_list").on("click",function(){
		$(this).addClass("recharge_list_on").siblings().removeClass("recharge_list_on");
	});
	/*积分动画*/
	$(".integral_box_bg").load(function() {
		$(".integral_ani").addClass("integral_ani_on");
	});
	//列表图片设置
	$(".img_box").each(function(){
		var hei = ($(this).height() - $(this).children().height()) / 2;
		$(this).children().css("margin-top",hei);
	});
	//默认地址勾选
	$(".choice").each(function(index, element) {//和上面一样单个列表，选择-取消
		$(this).click(function(){
			$(this).toggleClass("choice_on");
		});
	});
	
});

//打开蒙版-弹框-产品详情
function opentan_details(){
	
	$(".mengban").css("display","block");
	$(".tankuang.details").css("display","block");	
};
//关闭蒙版-弹框
function closetan(){
	
	$(".mengban").css("display","none");
	$(".tankuang.details").css("display","none");
	
};






















