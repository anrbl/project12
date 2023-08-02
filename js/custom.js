$(function () {
    $('._fullpage').fullpage({
        anchors: ['main', 'sec1', 'sec2', 'sec3', 'foot'],
        scrollHorizontally: true,
        scrollOverflow: true,
        scrollingSpeed: 700,
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx)
            if (nidx == '2') {
                $('.header').addClass('on')
            } else if (nidx == '3') {
                $('.header').addClass('on')
            } else if (nidx == '5') {
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


    $('.text_loop').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 15000,
        pauseOnFocus: false,
        pauseOnHover: false,
        cssEase: 'linear'
    });

    $('.bouquet_slide').on('init afterChange', function (e, idx, currentSlide) {
        let current = $('.bouquet_slide .slick-current');
        let next = $('.bouquet_slide .slick-current + .slick-slide + .slick-slide');

        const er = $([current, next]);
        console.log(er);


        $('.bouquet_slide .itm').removeClass('on')
        er.each(function () {
            $(this).addClass('on')
        })

    });
    $('.bouquet_slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
    $('.bou_arrow .left').on('click', function () {
        $('.bouquet_slide').slick('slickPrev');
    })
    $('.bou_arrow .right').on('click', function () {
        $('.bouquet_slide').slick('slickNext');
    })

    $('.collection_page li').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).index();
        $('.collection_page li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.collection .theme').eq(idx).addClass('on').siblings().removeClass('on');
    })
});