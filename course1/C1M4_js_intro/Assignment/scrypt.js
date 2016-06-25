		// color index 
		var ind = 0;
		
		// get the index of clicked color
		// put on image shadow corresponding to clicked color
		$(".color").click(function() {
			var id = $(this).attr("id");
			ind = parseInt(id.slice(-1));
			
			$("#large_picture").attr('class', "large-img"+ind);
		});
		
		// reset picture if user clicks on image
		$("#large_picture").click(function() {
			$(this).attr('class', "large-img0");
		});
		