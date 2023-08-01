$(function () {
    $('._fullpage').fullpage({
        anchors: ['main', 'sec1', 'sec2', 'sec3-1', 'sec3-2', 'sec3-3', 'foot'],
        scrollHorizontally: true,
        scrollOverflow: true,
        scrollingSpeed: 700,
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx)
            if (nidx == '2') {
                $('.header').addClass('on')
            } else if (nidx == '3') {
                $('.header').addClass('on')
            } else if (nidx == '7') {
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


    $('.bouquet_slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

});