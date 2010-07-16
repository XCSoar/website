	$(document).ready(function() {
	  var max_width = 400;
	  var percent = -1;
		
		$.get("/trac/roadmap", function(html){
			$(html).find("li.milestone").each(function(i) {
				var found = false;
				$(this).find(".info h2 em").each(function(i) {
					if ($(this).text() == "XCSoar 6.0") found = true
				});
				if (found) {
					$(this).find(".info .percent").each(function(i) {
						percent = $(this).text();
					});
				}
			});
			percent = Number(String(percent).replace("%", ""));
			
			if (percent == -1) 
				return;
				
			max_width -= 3*5;
			$('#status img#fill').css("width", max_width * (percent/100));
			$('#status img#blank').css("width", max_width * ((100-percent)/100));
			$('#status img').css("height", "12px");
			$('#status #percent').text(percent);
			
			$('#status #status_err').css("display", "none");
			$('#status #status_ok').css("display", "block");
		}, "html");
	});