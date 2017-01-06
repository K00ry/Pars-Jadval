var $ = require('../node_modules/jquery/dist/jquery.js');
var bootstrapCarousel = require('../node_modules/bootstrap/dist/js/npm.js');
var bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.js');
var TweenMax = require('../node_modules/gsap/src/uncompressed/TweenMax.js');
var ScrollMagic = require('../node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js');
var setTween = require('../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js');
$(document).ready(function() {





    // init controller
    var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

    // build scenes
    new ScrollMagic.Scene({ triggerElement: "#parallax1" })
        .setTween("#parallax1 > div", { y: "80%", ease: Linear.easeNone })

    .addTo(controller);

    /** ===========================================
        Hide / show the master navigation menu
    ============================================ */

    // console.log('Window Height is: ' + $(window).height());
    // console.log('Document Height is: ' + $(document).height());

    var previousScroll = 0;

    $(window).scroll(function() {

        var currentScroll = $(this).scrollTop();

        /*
          If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
        */
        if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
            /*
              If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
            */
            if (currentScroll > previousScroll) {
                window.setTimeout(hideNav, 300);
                /*
                  Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
                */
            } else {
                window.setTimeout(showNav, 300);
            }
            /* 
              Set the previous scroll value equal to the current scroll.
            */
            previousScroll = currentScroll;
        }

    });

    function hideNav() {
        $("[data-nav-status='toggle']").removeClass("is-visible").addClass("is-hidden");
    }

    function showNav() {
        $("[data-nav-status='toggle']").removeClass("is-hidden").addClass("is-visible");
    }





    ///////   back to top function\\\\\\\\\\\\\\

    var btn_top = $('#back-to-top');

    if (btn_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    btn_top.addClass('show');
                } else {
                    btn_top.removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        btn_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }











    var links = $('.sidenav a');
    var slide_nav = $('#mySidenav');

    function openNav() {

        slide_nav.css('width', "250px");
        // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    function closeNav() {
        slide_nav.css('width', "0");
        document.body.style.backgroundColor = "white";
    }

    $('#btn').click(function() {
        links.fadeIn();
        openNav();
    });
    slide_nav.click(function() {
        links.fadeOut();
        closeNav();
    });
    $('.main,.contact').click(function() {
        links.fadeOut();
        closeNav();
    });




    function openSubLink(selector) {
        if (selector.hasClass('expand')) {
            selector.removeClass('expand');
        } else {
            selector.addClass('expand');
        }
    }

    function openSubMenu(handler, div, svg) {
        handler.click(function(e) {

            e.preventDefault();
            e.stopPropagation();
            
            div.toggle('slow');
            openSubLink(svg);
        });
    }

    openSubMenu($('.nav-link-asli'), $('.asli'), $('.arrow-left-icon-asli'));
    openSubMenu($('.nav-link-mahsool'), $('.mahsool'), $('.arrow-left-icon-mahsool'));
    openSubMenu($('.nav-link-chideman'), $('.chideman'), $('.arrow-left-icon-chideman'));
    openSubMenu($('.nav-link-about'), $('.about'), $('.arrow-left-icon-about'));

    // $('.nav-link').click(function (e) {

    //     e.preventDefault();
    //     e.stopPropagation();
    //     $('.nav').toggle('slow');
    //    openSubLink($('.arrow-left-icon'));
    // });









});
