(function ($) {
    "use strict";

//    wow init

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true

    });
    wow.init();


    $(window).on("load", function () {
        if ($('.isotope-items').length) {
            var $container = $('.isotope-items');
            $container.isotope();

            $('.portfolio-filter ul li').on("click", function () {
                $(".portfolio-filter ul li").removeClass("active");
                $(this).addClass("active");
                var selector = $(this).attr('data-filter');
                $(".isotope-items").isotope({
                    filter: selector,
                    animateOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            })

        }
    });

/////////////popup portfolio  /////////////

    $('.isotope-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');

            }
        }
    });


//   for navbar fixed

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 80) {
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('fixed-top')
        }
    })

//////////////  slick   ////////////////

    $('.testimonial').slick({

        rtl: true,
        dots: false,
        arrows: true,
        infininte: true,
        autoplay: true,
        fade:true,
        prevArrow: '<button type="button" class = "slick-prev"><i class="fa fa-chevron-right"></i></button>',
        nextArrow: '<button type="button" class = "slick-next"><i class="fa fa-chevron-left"></i></button>',
        speed : 1000,
        slidesToShow:1,
        slidesToScroll: 1
});

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 700){
            $('#backtotop').fadeIn(500);
        }
        else {
            $('#backtotop') .fadeOut(500);
        }
    });


    $('#backtotop').on('click', function () {
        $('body, html').animate({
            scrollTop : 0,

        }, 500);
    })







})(jQuery);