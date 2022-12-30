$('#slide').owlCarousel({

    loop: true,
    margin: 21,
    smartSpeed: 1400,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 2
        }
    }

});