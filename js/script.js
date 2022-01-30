$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        easing:'linear',
        autoplay:true,
        autoplaySpeed:5000,
        touchMove:true
    });
});