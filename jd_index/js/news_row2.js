$(document).ready(function(){
				var box = document.getElementById('nav');
			    var items = box.getElementsByTagName('li');
			    var items_bd = box.getElementsByClassName('conve_bd_item');
			     function reset_news(){
			     	for (var i=0;i<items_bd.length;i++) {
			     		items_bd[i].style.display = 'none';
			     		items[i].className ='item_'+(i+1)+' '+'f-l';
			     	}
			     }
			    
			    for (var i = 0;i<items_bd.length;i++) {
			    	(function(i){
			    		items[i].onmouseover = function(){
							reset_news();
			    			items_bd[i].style.display = 'block';
			    			items[i].className += ' selected';
			    		};
			    	}
			    		
			    	)(i);
			    }
});