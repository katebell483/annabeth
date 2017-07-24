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

		$(document).ready(function() {
            
            // apply mobile styles
            if(aMarks.isMobile()) $("html").addClass("mobile");
            
            // apply ipad styles
            if(aMarks.isIPad()) $("html").addClass("ipad");

            // pad the container
            header_w = $(".menu-recent-container").width();
            offset = parseInt($("#branding").css("left"));
            $("#container").css("padding-left", header_w + offset);

            // format posts 
            aMarks.formatPosts();

            // and again on window resize
            $(window).resize(function() {
                aMarks.formatPosts()
            })
            
        });
            
    },

    formatPosts: function() {
        // get window size
        screen_height = $(window).height();

        // get container width
        container = $("#container");
        container_w = container.width()
         
        // pad the container
        if($("#recent-menu-full").css("display") != "none") {
            padding_w = $("#recent-menu-full").width();
        } else {
            padding_w = $("#recent-title").width();
        }
        offset = parseInt($("#branding").css("left"));
        $("#container").css("padding-left", padding_w + offset);

        //container.width(container.width());

        // size images to screen + place text accordingly
        $(".post").each(function() {

            text = $(this).find(".post-info");
            img = $(this).find(".entry-content p img");
            post = $(this);
            post_w = post.width();
            entry_c = post.find(".entry-content");
            
            // size max-height of image to be: screen_height - height of text - 60px for padding
            text_height = text.height();

            // get orig height + width
            img_w = img.attr("width")
            img_h = img.attr("height")
            
            // get orientation
            portrait = img_h > img_w

            // figure out max height and width
            max_img_h = screen_height - text_height - 60;
            min_img_h = 500;
            max_img_w = entry_c.width();

            // restrict long photos to the size of the screen
            if(portrait) {
                new_img_h = max_img_h > min_img_h ? max_img_h : 500; 
                new_img_w = new_img_h * img_w / img_h
            } else {
                new_img_w = post_w;
                new_img_h = new_img_w * img_h / img_w;
            }

            if(new_img_w > max_img_w) {
                new_img_w = max_img_w;
                new_img_h = new_img_w * img_h / img_w;        
            } else if(new_img_h > max_img_h) {
                new_img_h = max_img_h;
                new_img_w = new_img_h * img_w / img_h; 
            }
            
            img.width(new_img_w)
            img.height(new_img_h)
            entry_c.css("height", new_img_h);
            marginL = (post_w - new_img_w)/2 > 0 ? (post_w - new_img_w)/2 : 0;

            // set the text to the bottom left corner of image
            text.css("margin-left", marginL);
        })
    },

    isMobile: function() {
        if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) return true;
    },
        
    isIPad: function() {
        if(/iPad/i.test(navigator.userAgent)) return true;
    }
}

//aMarks.init();

