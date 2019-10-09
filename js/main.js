(function ($) {
    "use strict";
    var wWidth = $(window).width();
    var main_wind = $(window);
    jQuery(document).ready(function ($) {

        $(".counter_wrapper").downCount({
            date: '05/01/2019 12:00:00', //month/date/year   HH:MM:SS
            offset: +6 //+GMT
        });

        $('select').niceSelect();


        //-----------coin conversion img change when select an item-------------------
        $(".currency_select").change(function () {
            $("#coin_icon").attr("src", $(this).val());
        });
        $(".currency_select2").change(function () {
            $("#coin_icon2").attr("src", $(this).val());
        });


        //-------------fun facts active---------------
        $('.counter').counterUp({
            //delay: 10, // the delay time in ms
            time: 800 // the speed time in ms
        });



        $(".anchor").on("click", function (event) {
            var target = $($(this).attr("href"));
            var ngtv = -50;
            if (target.length) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: target.offset().top - 0 + ngtv + 'px',
                }, 800);
            }
        });


        new WOW().init();


        //-----------contact form class add for css3 effect-------------
        $(".abinput_group>input, .abinput_group>textarea").on("focusin", function () {
            $(this).parent().addClass("input_effect");
        });

    }); //-----end document ready function-------------

    
    main_wind.on('load', function () {
        $('#loading').fadeOut('slow');
    });

    //--------sticky menu----------
    main_wind.scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.cripto_header').addClass('sticky');
        } else {
            $('.cripto_header').removeClass('sticky');
        }
    });


    //-----------home-1 testimonial-----------
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-nav'
    });
    /*--------Testimonial Slick Carousel as Nav---------------*/
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<i class="fa fa-long-arrow-left"></i>',
        nextArrow: '<i class="fa fa-long-arrow-right"></i>',
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: false,
                    slidesToShow: 3,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });


    //--------Scroll Top---------
    main_wind.scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


}(jQuery));
