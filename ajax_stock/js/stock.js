
		var autoChange;
		var data;
		var aStockNum = new Array();
		//script操作
		function creatScript(){
			var creatScript = document.createElement('script');
			var orientate_entry = document.getElementById('clear_script');
			 	creatScript.src = inter_url;

				orientate_entry.appendChild(creatScript);
				orientate_entry.removeChild(creatScript);

		}
		
		

		//取得跨域值更新数据
		function refreshPrice(date){
			data = date;
			
			var $orientate_tr = $("#list").find("tr");
			
			$.each(aStockNum,function(index,elem){
				if (data[elem]) {
					code = date[elem].code;
					name = date[elem].name;
			 	percent = date[elem].percent;
			  	 	price = date[elem].price;
			  		open = date[elem].open;
			  	
					$orientate_tr.eq(index+1).children("td").eq(0).text(code);
		        	$orientate_tr.eq(index+1).children("td").eq(1).text(name);
		        	$orientate_tr.eq(index+1).children("td").eq(2).text(percent);
		        	$orientate_tr.eq(index+1).children("td").eq(3).text(price);
		         	$orientate_tr.eq(index+1).children("td").eq(4).text(open);       	
				} else{
					$('.showcase table tr').last().remove();
					aStockNum.splice(index,1);
					alert('非法股票编码!');
				}
      	
			  	
			});
						
		}
			//排序
			var boolNum = true;
			function srot_stock(){
			$('#entry .sort_btn').click(function () {
				
					var num = "";
					
					if (boolNum == true) {
						for (var i = 1; i < aStockNum.length; i++) {
						for (var j = 0; j < aStockNum.length - i; j++) {
							
						    
						        if (data[aStockNum[j]].price > data[aStockNum[j+1]].price){
						            num = aStockNum[j];
						            aStockNum[j] = aStockNum[j + 1];
						            aStockNum[j + 1] = num;
						                    }
						                }
						            }
						boolNum = false;
					} else{
						for (var i = 1; i < aStockNum.length; i++) {
						for (var j = 0; j < aStockNum.length - i; j++) {
							
						    
						        if (data[aStockNum[j]].price < data[aStockNum[j+1]].price){
						            num = aStockNum[j];
						            aStockNum[j] = aStockNum[j + 1];
						            aStockNum[j + 1] = num;
						                    }
						                }
						            }
						boolNum = true;
					}
					 
						        
						       
						    });			
				}		   
				srot_stock();
		//多选删除
		function check_stock_del(){
			var $del_btn = $('#entry .del_btn')[0];
			$del_btn.onclick = function(){
				$("input[name='check']").each(function(index,elem){
					if ($(elem).is(':checked')){
						$(elem).parent().parent().remove();
						aStockNum.splice(index,1);
//						console.log('succss');
					}
					
//					console.log('succss2');
              });
//				console.log('succss3');
				
			}
		}
		//全选删除
			var bool = true;
			$('#checkall_btn').click(function(){
//				console.log('succss1');
				
				if(bool == true){
//					console.log('succss2');
	                $("input[name='check']").each(function(index){
	                	console.log('succss3');
	                    this.checked = true;
	                	aStockNum.splice(index,1);
	                });
	                bool = false;
	            }else{
//	            	console.log('succss4');
	                $("input[name='check']").each(function(){
	                    this.checked = false;
	                });
	                bool = true;
	            }
	 
	      });
		

		
			
			//获得input输入值并添加表行
		function getstockNum(){
			var stockNum_in = document.getElementsByClassName('stockNum')[0];
			 var stock_Num = stockNum_in.value.trim();
			 
			 console.log(stock_Num);
			 if (stock_Num.length!=0) {
			 	 var reg = /^\d{6,7}$/;
			 	 
			 	if (!reg.test(stock_Num)) {
			 		alert('您输入有误,请重新输入数字!');
			 		
			 	}else if(stock_Num.charAt(0) == '0'){
			 			pushaStockNum();
			 		} else{
			 			stock_Num = '0' + stock_Num;
			 			pushaStockNum();
			 		}
			 	
				 } else{
			 		alert('输入为空,请重新输入!');
				 }
			 //得到数据
			 function pushaStockNum(){
			 				 		
			 		if (aStockNum.length !== 0) {
			 			console.log(12313);
						for(var i = 0; i < aStockNum.length; i++){
							if(stock_Num == aStockNum[i]){
								alert('股票编码重复,请重新输入!');
								break;

							}
							if(i === aStockNum.length-1 && stock_Num !== aStockNum[i]){
								creatAstock();
								break;
							}
						}
			 		
			 		}else{
			 					creatAstock();
			 		}
			 		
				function creatAstock(){
						aStockNum.push(stock_Num);
			 			inter_url = 'http://api.money.126.net/data/feed/'+aStockNum+'?callback=refreshPrice';
			   			$('.showcase table tr').last().after("<tr><td>"+"</td><td>"+"</td><td>"+
			  			+"</td><td>"+"</td><td>"+"</td><td>"+"</td><td>"+"<input type='checkbox' name='check'/>"+"</td></tr>");
				}
			 	
			  	
			 }
				
		}

		var referBtn = document.getElementsByClassName('refer_btn')[0];
		
		//提交按钮
		
		referBtn.onclick=  function(){
			clearInterval(autoChange);
			getstockNum();

//			console.log(inter_url);
			creatScript();
			timeChange();
			check_stock_del();

		};

		//定时器
		function timeChange(){
			autoChange = setInterval(function(){
			creatScript();
			
			},2000);
		}