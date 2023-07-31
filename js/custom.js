$(function () {
    $('._fullpage').fullpage({
        scrollingSpeed: 700,
        scrollHorizontally: true,
        scrollOverflow: true,

        onLeave: function (idx, nidx, dir) {
            if (nidx == '2') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    });

    $('.main_slide').slick({
        arrows: false,
        fade: true,
        dots: true,
    });
    $('.mv_arrow .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    })
    $('.mv_arrow .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    })
});