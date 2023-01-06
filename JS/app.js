$(document).ready(function(){

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.reviews').owlCarousel({
        items:1,
        loop: true,
        dots: true,
        autoplay: true,
        nav: false,
        smartSpeed: 1000

    });

    $('.pre-loader').fadeOut();

});


