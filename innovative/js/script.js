$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu.hidden').removeClass('hidden');

    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);


});

jQuery(function ($) {


    "use strict";


    /* ===================================
         Scroll
    ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    /* ===================================
    Cube Portfolio
======================================*/

$('#js-grid-mosaic-flat').cubeportfolio({
    filters: '#js-filters-mosaic-flat',
    layoutMode: 'mosaic',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 6,
    }, {
        width: 1100,
        cols: 4,
    }, {
        width: 800,
        cols: 3,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 15,
            gapVertical: 15,
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeOutTop',
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',

    plugins: {
        loadMore: {
            element: '#js-loadMore-mosaic-flat',
            action: 'click',
            loadItems: 3,
        }
    },
});


    /* =====================================
           Parallax
    ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }


    /* ===================================
         Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /* ===================================
       Type Text
       ====================================== */

    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('Developer').pauseFor(2000).deleteAll()
            .typeString('Designer').pauseFor(2000).deleteAll()
            .typeString('Dreamer').pauseFor(1000).start();
    }

    /* ===================================
             owl for portfolio
       ====================================== */

    $('.portfolio-items').owlCarousel({

        loop:true,
        margin:5,
        slideSpeed: 5000,
        slideTransition:'linear',
        nav:false,
        center:true,
        dots:false,
        responsive:{
            0:{
                autoplay:true,
                autoplayTimeout:8000,
                autoplayHoverPause:true,
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            },
        }

    });


    /* ===================================
             slick for projects
       ====================================== */

    $('.projects').owlCarousel({

        loop:false,
        margin:0,
        slideSpeed: 5000,
        slideTransition:'linear',
        animateOut: 'slideOutRight',
        // animateIn: 'slideOutUp',
        nav:false,
        dots:false,
        responsive:{
            0:{
                autoplay:true,
                autoplayTimeout:8000,
                autoplayHoverPause:true,
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            },
        }

    });
    $('.customNextBtn').click(function() {
        var owl = $('.projects');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.customPrevBtn').click(function() {
        var owl = $('.projects');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel', [300]);
    });

    // fancy box

    $('[data-fancybox]').fancybox({
        protect: true,
        animationEffect: "fade",
        hash: null,
    });

});
