$(function () {
    $('._fullpage').fullpage({
        anchors: ['main', 'sec1', 'sec2', 'sec3', 'foot'],
        scrollHorizontally: true,
        scrollOverflow: true,
        scrollingSpeed: 700,
        onLeave: function (idx, nidx, origin, destination, dir) {
            if (nidx == '2') {
                $('.header').addClass('on')
            } else if (nidx == '3') {
                $('.header').addClass('on')
            } else if (nidx == '5') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }

            // 빠른전환으로 이벤트중복시 fullpage와 swiper전환시점 분리막기 
            $('._fullpage').on('scroll', function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            });
            // swiper.mousewheel.enable();
        },
        afterLoad: function (anchorLink, idx) {
            $('._fullpage').off('scroll');
            // if (Collection) swiper.mousewheel.enable();
            if (!$('.sec2', '.foot').hasClass("active")) {
                $.fn.fullpage.setAllowScrolling(true);
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



    var length = $(".sec3 .swiper-slide").length;
    var bullet = ['Jane', 'Taylor', 'Millie'];
    const Collection = new Swiper('.collection_slide', {
        slidesPerView: 1,
        spaceBetween: 0,
        freeMode: false,
        speed: 700,
        mousewheel: true,

        pagination: {
            el: '.collection_page',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        },

        on: {
            slideChange: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드가 아닐경우 fullpage전환 막기
                if (this.activeIndex != 0 && idx != length) $.fn.fullpage.setAllowScrolling(false);
                if (length == 1 && idx == 0) $.fn.fullpage.setAllowScrolling(false)
                // console.log('즉시 : ' + idx);
            },
            slideChangeTransitionEnd: function () {
                var idx = this.activeIndex;
                // 처음과 마지막 슬라이드일 경우 fullpage전환 풀기
                if (idx == 0 || idx >= length - 1) $.fn.fullpage.setAllowScrolling(true);
                // console.log('전환후 : ' + idx);     
            },
            touchMove: function (e) {
                var startY = e.touches.startY;
                setTimeout(function () {
                    if (startY > e.touches.currentY) swiper.slideNext();
                    else swiper.slidePrev();
                }, 100);
            },
        },
    });
});