$(function(){
	
								var time_wrap = document.getElementById("times_wrap");
								var time_h = document.getElementById("times_h");
								var time_m = document.getElementById("times_m");
								var time_s = document.getElementById("times_s");
								
								var time_end = new Date(2017,03,13);  // 设定结束时间
								var time_end = time_end.getTime();
								show_time();
								setInterval(show_time,1000);
								
								function show_time(){
								    var time_now = new Date();  // 获取当前时间
								        time_now = time_now.getTime();
								    var time_distance =  parseInt(time_end - time_now);  // 结束时间减去当前时间
								if (time_distance >=0) {
									 // 天时分秒换算
									var h=Math.floor(time_distance / 1000 / 60 / 60 % 24);//时
							        var m=Math.floor(time_distance / 1000 / 60 % 60);//分
							        var s=Math.floor(time_distance / 1000 %60);//秒

								        // 时分秒为单数时、前面加零站位
								        if(h < 10)
								         var h = "0" + h;
								        if(m < 10)
								         var m = "0" + m;
								        if(s < 10)
								         var s = "0" + s;
								        // 显示时间
//								    
										time_h.innerHTML = h;
								        time_m.innerHTML = m;
								        time_s.innerHTML = s;
								} else{
									alert(' 倒计时结束');
									
								}
			
								}

});
