var aMarks = {

	DEBUG: true,

	DOC_WIDTH: 750,

	init: function() {
        console.log("aMarks.init()");
        // kill all debug
		
        if (!aMarks.DEBUG) {
			console.log = function() {};
			console.warn = function() {};
			console.debug = function() {};
			console.info = function() {};
		};

		// size slides
		$(document).ready(function() {

			// get doc width.. will be used a lot
			aMarks.DOC_WIDTH = $(window).width();
			
			$("article").width(aMarks.DOC_WIDTH);
            
            // phone doesnt need the other js
            if(navigator.userAgent.match(/iPhone/i)) return;
			
            var numArticles = $("article").length;
			$("#content").width(aMarks.DOC_WIDTH * numArticles);

            // change slide info
            aMarks.changeSlideInfo();

            // make sure slid info is also changed on scroll
            $("#container").scroll(function() {
                aMarks.changeSlideInfo();
            });

            // change cursor
            $("article").mousemove(function(e) {
                var leftPos = e.pageX < aMarks.DOC_WIDTH/2;
            
                // if its all the way at the end don't show arrows
                if(leftPos && $("#container").scrollLeft() == 0 || !leftPos && $("#container").scrollLeft() == $("#content").width() - aMarks.DOC_WIDTH) {
                    console.log($("#container").scrollLeft());
                    $("article").css("cursor", "inherit");
                    return;
                }

                if(leftPos) {
                    $("article").css("cursor", "w-resize");
                } else {
                    $("article").css("cursor", "e-resize");
                }
            });
	
			$("#content").click(function(e) {
				var container = $("#container");
				var position = container.scrollLeft();

				// left or right?
				var scrollPos = e.pageX < aMarks.DOC_WIDTH/2 ? position - aMarks.DOC_WIDTH : position + aMarks.DOC_WIDTH;
                
                // round down to nearest whole pos
                var difference = scrollPos % aMarks.DOC_WIDTH;
                scrollPos = scrollPos - difference;

				container.animate({scrollLeft: scrollPos}, 500, 'swing', function() {
                    aMarks.changeSlideInfo();
                });
			});
		});

		// resize container based on window change
		$(window).resize(function() {
			// get doc width.. will be used a lot
		    aMarks.DOC_WIDTH = $(window).width();
			$("article").width(aMarks.DOC_WIDTH);
			var numArticles = $("article").length;
			$("#content").width(aMarks.DOC_WIDTH * numArticles);
     
            // position article in center of screen
            aMarks.normalizeScrollPos();
		});
	},

    normalizeScrollPos: function() {
        console.log("normalizeScrollPost()");
        var difference = $(".curr-slide").position().left; 
        var container = $("#container");
        var scrollPos = container.scrollLeft() + difference;
        container.scrollLeft(scrollPos);
    },
    
    changeSlideInfo: function() {
        $("article").each(function() {
            var article = $(this);
            if(article.position().left == 0) {
                var caption = article.find(".entry-title a").text();
                var url = article.find(".url").html();
                $("#slide-description").text(caption);
                $("#site-link").html(url);
                $("#site-link a").html(url);
                $("article").removeClass("curr-slide");
                article.addClass("curr-slide");
            }
        });
    }
}

//aMarks.init();

