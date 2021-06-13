// banner script
$(document).ready(function() {
    $('#adaptive').lightSlider({
        adaptiveHeight: true,
        item: 1,
        auto: true,
        slideMargin: 0,
        loop: true
    });
});

// featured products
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});


/* search bar hide and show */
$(document).on('click', '.search-icon', function() {
    $('.search').addClass('search-active')
})

$(document).on('click', '.search-close', function() {
    $('.search').removeClass('search-active')
})

/* user form hide and show */
$(document).on('click', '.user-icon', function() {
    $('.user').addClass('user-active')
})


//sign up and login shift
$(document).on('click', '.create', function() {
    $('.user').addClass('sign-up-active').removeClass('user-active')
})


$(document).on('click', '.sign-up-btn', function() {
    $('.user').addClass('user-active').removeClass('sign-up-active')
})

$(document).on('click', '.user-close', function() {
    $('.user').removeClass('user-active').removeClass('sign-up-active')
})

//menu button click
$(document).on('click', '.menu-icon', function() {
    $('.menu').toggleClass('active-menu');
    $('.menu-icon').toggleClass('icon-toggle');
})


//scroll to fixed navigation bar
$(window).on('scroll', function() {
    if ($(document).scrollTop() > 60) {
        $('.navigation').addClass('navingation-fix');
    } else {
        $('.navigation').removeClass('navingation-fix');
    }
})