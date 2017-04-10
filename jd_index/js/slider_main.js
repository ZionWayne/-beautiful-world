$(function(){
	 var $slider_list = $(' .slider .slider_main .slider_list ');
	 var $slider_btn_L = $(' .slider_icon_L ');
	 var $slider_btn_R= $(' .slider_icon_R ');
	 var $slider_page = $('.slider_indicator');
	 var reColor_btn = 'rgba(101,99,90,1)';
	 var color_btn = 'rgba(0,0,0,.1)';
	 var addClass = 'slider_indicator_btn_active';
	 var curIndex  = 0;
	 imagesLn = $slider_list.find('li').length;
	 //左btn
	 $slider_btn_L.hover(function(){
	 	$slider_btn_L.css('background-color',reColor_btn);
	 	clearInterval(autoChange);
	 },function(){
	 	$slider_btn_L.css('background-color',color_btn);
	 	autoChangeAgain();
	 });
	 $slider_btn_L.click(function(){
	 	curIndex = (curIndex > 0) ? (--curIndex) : (imagesLn - 1 );
  		changeTo(curIndex);
	 });
	 //右btn
	 $slider_btn_R.hover(function(){
	 	$slider_btn_R.css('background-color',reColor_btn);
	 	clearInterval(autoChange);
	 },function(){
	 	$slider_btn_R.css('background-color',color_btn);
	 	autoChangeAgain();
	 });
	 
	 $slider_btn_R.click(function(){
	 	curIndex = (curIndex < imagesLn - 1) ? (++curIndex) : 0;
  		changeTo(curIndex);
	 });
	 //定时器
	 autoChangeAgain();
	
	
	function changeTo(){
		$slider_list.find('li').css('z-index','0');
		$slider_list.find('li').eq(curIndex).css('z-index','1');
		$slider_page.find('i').removeClass(addClass);
		$slider_page.find('i').eq(curIndex).addClass(addClass);
	}
	//定时器封装
	function autoChangeAgain(){
		 autoChange = setInterval(function(){
		
		if(curIndex < imagesLn){ 
    		changeTo();
    		curIndex ++;
  		}else{ 
    		curIndex = 0;
    		changeTo();
  		}
	},2000);
	  			
	}
	//图片标记栏
    $slider_page.children('a').hover(function(){ 
      curIndex = $(this).index();
      clearInterval(autoChange);
      changeTo();
    },function(){ 
      autoChangeAgain();
    });
 
});
