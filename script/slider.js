// client slider
$('.client-info-container .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    lazyLoad:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:2
        },
        500:{
            items:4
        },
        1000:{
            items:4
        }
    }
});

// testimonial slider
$('.testimonials-container .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    center:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    lazyLoad:true,
    smartSpeed:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



  