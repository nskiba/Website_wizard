$(document).ready(function(){
	
		$("#logo").keyup(function(){
			
			value = $(this).val();
			$("#content-logo").html("<img src = '"+value+"'>");
		});
		
		$("#tekstPowitalny").keyup(function(){
			
			value = $(this).val();
			$("#content-tekstPowitalny").html(value);
		});
		
		$("#menu").keyup(function(){
			
			value = $(this).val();
			menuTab = value.split(';');
			
			html = "<ul>";
			for(i=0; i< menuTab.length; i++)
			{
				html += "<li>";
				
				if(menuTab[i].indexOf("|") !== -1)
				{
					submenuTab = menuTab[i].split('|');
					
					html += submenuTab[0];
					html +="<div class='submenu'>"+submenuTab[1]+"</div>";
				}
				else
					html += menuTab[i];
					
				
				html += "</li>";
			}
			html += "</ul>";
			
			$("#content-menu").html(html);
		});
		
		$("#zawartoscStrony").keyup(function(){
			
			value = $(this).val();
			$("#content-zawartoscStrony").html(value);
		});
		
		$("#stopka").keyup(function(){
			
			value = $(this).val();
			$("#content-stopka").html(value);
		});
		
		$("#content-menu").on("mouseenter","li",function(){
			$(this).children(".submenu").fadeIn();
		});
		
		$("#content-menu").on("mouseenter","li",function(){
			$(this).children(".submenu").fadeOut();
		});
});
