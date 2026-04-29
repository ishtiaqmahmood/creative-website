/*=================================
    Preloader
=================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*=================================
    Navigation
=================================*/

/* Show & Hide White Navigation */
$(function () {
    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        // show/hide nav on window scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // Show white nav
            $("nav").addClass("white-nav-top");
            // Show dark logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
        } else {
            // Hide white nav
            $("nav").removeClass("white-nav-top");
            // Show normal logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
        }
    }
});

/* Smooth Scrolling */
$(function () {
    $("a.nav-link, #home-btn a").on('click', function (event) {
        event.preventDefault();
        // get section id like #about, #services, #portfolio, #team, etc.
        var section_id = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250);
    });
});
