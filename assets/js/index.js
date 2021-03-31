/*$("#carousel").on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $("#carousel").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $("#carousel").carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove'); 
    });
});
$("#carousel2").on('touchstart', function(event){
    const xClick = event.originalEvent.touches[0].pageX;
    $(this).one('touchmove', function(event){
        const xMove = event.originalEvent.touches[0].pageX;
        const sensitivityInPx = 5;

        if( Math.floor(xClick - xMove) > sensitivityInPx ){
            $("#carousel2").carousel('next');
        }
        else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
            $("#carousel2").carousel('prev');
        }
    });
    $(this).on('touchend', function(){
        $(this).off('touchmove'); 
    });
});*/
