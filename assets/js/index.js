$('#gallery').on('slide.bs.carousel', function (e) {

    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 2; //put here the number of items per slide
    var totalItems = $('.carousel-item').length;
    
    if (idx >= totalItems-itemsPerSlide) {
        var it = (itemsPerSlide+1) - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
});