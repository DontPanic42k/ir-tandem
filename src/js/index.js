import '../scss/fonts.scss'
import '../scss/reset.scss'

import '../js/swiper-scripts'
import '../js/forms'


// мобильное меню
import '../js/slicknav/jquery.slicknav'
import '../js/slicknav/slicknav.css'
$(function(){
    $('.topbar-menu').slicknav({
        label: ''
    });
    $('.slicknav_menu').append( $('.main .topbar-logo')[0].outerHTML );
    $('.slicknav_menu').append( $('.main .topbar-tel')[0].outerHTML );
});



// плавный скролл на якорь
$("a.scroll").click(function (e) {
    e.preventDefault();
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 65}, 800);
    
});

$('.scroll-block-good').on('click', function(e){
    e.preventDefault();
    
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: $(window).height() }, 800);
});


// показываем/скрываем стрелку "наверх" в зависимости от скролла экрана
$(window).on('scroll', function(){
    let currentTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(+currentTop >= +windowHeight*0.7){
        $('.link-to-up').fadeIn(300);
    } else {
        $('.link-to-up').fadeOut(300);
    }
});



// клик в новость на мобильных (т.к. нет кнопки "подробнее")
if( +$(window).width() <= 768 ){
    $('.block-news-list .block-news-list-item').on('click', function(e){
        e.preventDefault();
        
        location = $(this).find('.block-news-list-item__button a').attr('href');
    });
}





import '../scss/main.scss'
import '../scss/page-about.scss'
import '../scss/page-services.scss'
import '../scss/page-services-elev.scss'
import '../scss/page-services-bus.scss'
import '../scss/page-portfolio.scss'

import '../scss/visual.scss'
import '../scss/main-media.scss'
import '../scss/menu-mobile.scss'

