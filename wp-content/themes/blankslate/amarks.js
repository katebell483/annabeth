var AMarks = {

    DEBUG: true,

    init: function() {
		console.log("AMarks.init()");

		
		$(".post").each(function() {
			
			// get post caption
			caption = $(this).find(".wp-caption-text");
			captionText = caption.text();

			// replace ";" with line breaks
			captionTextNew = captionText.replace(/;/g, "</p><p class='caption-p'>")
			captionNew = "<div class='caption'><p class='caption-p'>" + captionTextNew + "</p></div>";	
			caption.replaceWith(captionNew);	
		});
		

	}

}

