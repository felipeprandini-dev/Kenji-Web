$(document).ready(function() {
      $("#myCarousel").on("slide.bs.carousel", function(e) {
              var $e = $(e.relatedTarget);
              var idx = $e.index();
              var itemsPerSlide = 4;
              var totalItems = $(".carousel-item").length;
          
              if (idx >= totalItems - (itemsPerSlide - 1)) {
                        var it = itemsPerSlide - (totalItems - idx);
                        for (var i = 0; i < it; i++) {
                                    // append slides to end
                                    if (e.direction == "left") {
                                                  $(".carousel-item")
                                                              .eq(i)
                                                              .appendTo(".carousel-inner");
                                    } else {
                                                  $(".carousel-item")
                                                              .eq(0)
                                                              .appendTo($(this).find(".carousel-inner"));
                                    }
                        }
              }

      });
var carouselLength = $('.carousel-item').length - 1;

// If there is more than one item
if (carouselLength) {
    $('.carousel-control-next').removeClass('d-none');
}

$('.carousel').carousel({
    interval: false,
    wrap: false
}).on('slide.bs.carousel', function (e) {
    // First one
    if (e.to == 0) {
        $('.carousel-control-prev').addClass('d-none');
        $('.carousel-control-next').removeClass('d-none'); 
    } // Last one
    else if (e.to == carouselLength) {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').addClass('d-none');
    } // The rest
    else {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
    }
});
