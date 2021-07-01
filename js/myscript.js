$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        nav: true,
        dots: false,
        loop: true,
        autoplay: true,
        center:true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items: 1
            },
            767:{
                items: 3
            },
            1200:{
                items: 5
            }
           
        }
    });
  });