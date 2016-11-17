$(document).ready(function() {
     jQuery("#bgndVideo").YTPlayer();

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



    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }




    
/////////// smoooth scroll \\\\\\\\\\\


  $('a[href^="#"]').click(function(event) {
var id = $(this).attr("href");
var offset = 0;
var target = $(id).offset().top - offset;

$('html, body').animate({scrollTop:target}, 700);
event.preventDefault();
});




















});

