window.onload = function()
			{
			    var mid_body = document.getElementById('mid_body');
				var menu_box = document.getElementById('left_nav');
			    var cate_items = menu_box.getElementsByClassName('cate_menu_items');
			    var part_items_bd = mid_body.getElementsByClassName('cate_part');
			     function reset(){
			     	for (var i=0;i<cate_items.length;i++) {
			     		part_items_bd[i % 4].style.display = 'none';
			     	}
			     }
			    
			    for (var i = 0;i<cate_items.length;i++) {
			    	(function(i){
			    		cate_items[i].onmouseover = function(){
							reset();
			    			part_items_bd[i % 4].style.display = 'block';
			    		};
			    		menu_box.onmouseout = function (){
			    			reset();
			    		}
			    		part_items_bd[i % 4].onmouseover = function(){
			    			part_items_bd[i % 4].style.display = 'block';
			    		}
			    		part_items_bd[ i % 4].onmouseout = function(){
			    			part_items_bd[i % 4].style.display = 'none';
			    		}
			    	}
			    		
			    	)(i);
			    	
			    }
			    
			    
			        
			};