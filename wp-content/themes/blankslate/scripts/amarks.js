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

            // get about info
            $("#about").html($(".about").html());

            // show about 
            $("#site-description").click(function() {
                $("#container").hide();
                $(".info").hide();
                $(".next").hide();
                $(this).hide();
                $("#about").fadeIn(200);
            });

            // hide about
            $("#about img").click(function() {
                $("#about").hide();
                $("#container").fadeIn(200);
                $(".info").show();
                $(".next").show();
                $("#site-description").show();
            });

            // apply mobile styles
            if(aMarks.isMobile()) $("html").addClass("mobile");
            
            // apply ipad styles
            if(aMarks.isIPad()) $("html").addClass("ipad");

            // apply initial info
            curImg = $(".post").first();
            var info = curImg.find(".info").html().replace(/<br>/g, "");
            $("#header .info").html(info);

            // switch paintings on arrow click
            $(".next").click(function() {
                // get class of post
                var curImg = null;
                $.each($(".post"), function() {
                   if($(this).is(":visible")) {
                        $(this).fadeOut(function() {
                            if($(this).next().length) {
                                curImg = $(this).next();
                            } else {
                                curImg = $(".post").first();
                            }
                            curImg.fadeIn();
                            var info = curImg.find(".info").html().replace(/<br>/g, "");
                            $("#header .info").html(info);
                        });
                   } 
                });
            });
        });
    },

    isMobile: function() {
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
    },
        
    isIPad: function() {
        if(/iPad/i.test(navigator.userAgent)) return true;
    }
}

//aMarks.init();

