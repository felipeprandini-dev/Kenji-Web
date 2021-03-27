jQuery("#quote-carousel").on('slide.bs.carousel', function (event, fromIndex, toIndex) {
        
        
        var active  =   jQuery(event.target).find('.carousel-inner > .item.active');
        var from    =   active.index();
        var next    =   jQuery(event.relatedTarget);
        var to_slide=   next.index();
        
        if (to_slide>2) {
            var hide_slide = parseInt(to_slide) - 3;
            jQuery('.carousel-indicators li[data-slide-to="'+to_slide+'"]').css({"display":"inline-block"});
            jQuery('.carousel-indicators li[data-slide-to="'+hide_slide+'"]').css({"display":"none"});
        } else{
            var hide_slide = parseInt(to_slide) + 3;
            jQuery('.carousel-indicators li[data-slide-to="'+to_slide+'"]').css({"display":"inline-block"});
            jQuery('.carousel-indicators li[data-slide-to="'+hide_slide+'"]').css({"display":"none"});
        } 
    });