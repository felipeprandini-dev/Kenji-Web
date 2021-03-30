(function($) {
    "use strict";

    // manual carousel controls
    $("next1").click(function(){ $("#postsCarousel").carousel('next');return false; });
    $(".prev1").click(function(){ $("#postsCarousel").carousel('prev');return false; });
    
    $(".next2").click(function(){ $("#postsCarousel2").carousel('next');return false; });
    $(".prev2").click(function(){ $("#postsCarousel2").carousel('prev');return false; });
    
    $(".next3").click(function(){ $("#postsCarousel3").carousel('next');return false; });
    $(".prev3").click(function(){ $("#postsCarousel3").carousel('prev');return false; });
    

})(jQuery);