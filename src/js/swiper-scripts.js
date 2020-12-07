import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'



let swiper_block_news = () => {
    // $(window).on('resize', function(){
        if( $(window).width() >= 992 ){
            let marginLeft = ( $(window).width() - $('.block-news .container').width() ) / 2;
            let containerWidth = $('.block-news .container').width();
            
            $('.block-news-list .swiper-container').css({
                'width' : containerWidth / 2 + marginLeft + 'px',
            });
            
            $('.block-news-list').css({
                // 'margin-left' : marginLeft + 'px',
                'overflow' : 'hidden',
                'min-width' : containerWidth / 2 + marginLeft + 'px',
            });
        }
    // });


    let swiper_el = '.sw-1';

    let swiper = new Swiper(swiper_el, {
        slidesPerView: 'auto',
        spaceBetween: 58,
        navigation: {
            prevEl: '.mleft',
            nextEl: '.mright',
        },
        loop: true,
        autoplay: {
            delay: 2000,
        },
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            //type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            2000 : { 
                slidesPerView: 'auto',
            },
            660: {
                slidesPerView: 'auto',
                // spaceBetween: 20,
            },
            1: {
                slidesPerView: 1,
                spaceBetween: 20,
                spaceBetween: 20
            },
        },
        on: {
            init: function(){
                // полное количество
                let totalSlides = $( swiper_el ).find('.swiper-slide:not(.swiper-slide-duplicate)').length;
                $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="total"]').html( totalSlides );

                let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
                $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
            },
            slideChangeTransitionEnd: function(){
                let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
                $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
                // console.log(slide_active_num);
            }
        },
    });

    document.querySelector('.sw-1-nav .swiper-button-next').addEventListener('click', () => {
        swiper.slideNext();
    });

    document.querySelector('.sw-1-nav .swiper-button-prev').addEventListener('click', () => {
        swiper.slidePrev();
    });

}





let swiper_block_our_team = () => {
// $(window).on('resize', function(){
    if( $(window).width() > 660 ){
        let marginLeft = ( $(window).width() - $('.block-our-team .container').width() ) / 2;
        let containerWidth = $('.block-our-team .container').width();
        
        $('.block-our-team-list .swiper-container').css({
            'width' : containerWidth + marginLeft + 'px',
        });
        
        $('.block-our-team-list').css({
            // 'margin-left' : marginLeft + 'px',
            'overflow' : 'hidden',
            'min-width' : containerWidth + marginLeft + 'px',
        });
    }
// });

    


    let swiper_el = '.sw-2';

    let swiper = new Swiper(swiper_el, {
        // slidesPerView: 'auto',
        slidesPerView: 3,
        spaceBetween: 39,
        navigation: {
            prevEl: '.mleft',
            nextEl: '.mright',
        },
        loop: true,
        autoplay: {
            delay: 2000,
        },
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            2000 : { 
                slidesPerView: 'auto',
            },
            660: {
                slidesPerView: 'auto',
            },
            1: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        },
        // on: {
        //     init: function(){
        //         // полное количество
        //         let totalSlides = $( swiper_el ).find('.swiper-slide:not(.swiper-slide-duplicate)').length;
        //         $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="total"]').html( totalSlides );

        //         let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
        //         $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
        //     },
        //     slideChangeTransitionEnd: function(){
        //         let slide_active_num = $( swiper_el ).find('.swiper-slide.swiper-slide-active').attr('data-swiper-slide-index') * 1  +  1;
        //         $( '.sw-1-nav' ).find('.slider-nav-count span[data-slide_count="current"]').html( slide_active_num );
        //     }
        // },
    });

    // document.querySelector('.sw-2-nav .swiper-button-next').addEventListener('click', () => {
    //     swiper.slideNext();
    // });

    // document.querySelector('.sw-2-nav .swiper-button-prev').addEventListener('click', () => {
    //     swiper.slidePrev();
    // });

}



if( $('body').find('.sw-1').length > 0 ){
    swiper_block_news();
}

if( $('body').find('.sw-2').length > 0 ){
    swiper_block_our_team();
}


















