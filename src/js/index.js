import '../scss/fonts.scss'
import '../scss/reset.scss'



// мобильное меню
import '../js/slicknav/jquery.slicknav'
import '../js/slicknav/slicknav.css'
$(function(){
    $('.topbar-menu').slicknav({
        label: ''
    });
    $('.slicknav_menu').prepend( $('.main .topbar-logo')[0].outerHTML );
    $('.slicknav_menu').prepend( $('.main .topbar-tel')[0].outerHTML );
});



// плавный скролл на якорь
$("a.scroll").click(function (e) {
    e.preventDefault();
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 65}, 800);
    
});


// показываем/скрываем стрелку "наверх" в зависимости от скролла экрана
$(window).on('scroll', function(){
    let currentTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    if(+currentTop >= +windowHeight*0.7){
        $('.index-first-screen__to-up').fadeIn(300);
    } else {
        $('.index-first-screen__to-up').fadeOut(300);
    }
});





import '../scss/main.scss'
import '../scss/page-about.scss'
import '../scss/main-media.scss'

import '../scss/menu-mobile.scss'

