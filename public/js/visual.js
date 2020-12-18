// $(window).on('resize', function(){
    
//     // 1920x866

//     let windowWidth = $(window).width();
//     let windowHeight = windowWidth * 0.4510416666666667;

//     if(windowWidth > 1100){
//         $('.visual-bg img').width( windowWidth );
//         // $('.visual-bg img').height( windowHeight );
//     } else {

//     }

// });

function setVisualBgImgWidth(){
    // 1920x866

    let width = $('.visual-bg img').width();
    $('.visual-elements').width( width );

    let windowWidth = $(window).width();
    // let windowHeight = windowWidth * 0.4510416666666667;

    if(windowWidth <= 1100){
        $('.visual-bg img').css({
            'width' : 'auto'
        });
    } else {
        $('.visual-bg img').css({
            'width' : '100%'
        });
    }
}



$('.visual-bg img').on('load', function(){
    setVisualBgImgWidth();
    console.log(1);
});

$(window).on('resize', function(){
    setVisualBgImgWidth();
});


$(document).ready(function(){

    // // 1920x866
    // let windowWidth = $(window).width();
    // let windowHeight = windowWidth * 0.4510416666666667;
    // $('.visual-bg img').width( windowWidth );
    // $('.visual-bg img').height( windowHeight );
    


    $('.visual-screen[data-id="1"] .visual-elements__item a[data-id="2"]').on('click', function(e){
        e.preventDefault();

        // запоминаем позицию скролла на первом экране, чтобы вернуться к ней
        let scrollLeft_currentStep1 = $('.visual').scrollLeft();
        $('.visual').attr('data-scroll', scrollLeft_currentStep1 );

        // скроллим на втором экране до кнопок
        let scrollLeft_newStep2 = $('.visual-screen[data-active="1"] .visual-bg img').width() * 0.30;
        $('.visual').scrollLeft( scrollLeft_newStep2 );


        $('.visual-screen[data-id="1"]').attr('data-active', '0');
        $('.visual-screen[data-id="2"]').attr('data-active', '1');
        $('.visual-screen[data-id="1"] .visual-elements').fadeOut(300);
        $('.visual-screen[data-id="1"]').slideUp(300);
        $('.visual-screen[data-id="2"]').slideDown(300);
        $('.visual-screen[data-id="2"] .visual-elements').fadeIn(500);


    });

    $('.visual-screen[data-id="2"] .visual-elements__item a[data-id="1"]').on('click', function(e){
        e.preventDefault();

        // возвращаем позицию скролла обратно
        let scrollLeft_newStep1 = $('.visual').attr('data-scroll');
        $('.visual').scrollLeft( scrollLeft_newStep1 );


        $('.visual-screen[data-id="2"]').attr('data-active', '0');
        $('.visual-screen[data-id="1"]').attr('data-active', '1');
        $('.visual-screen[data-id="2"] .visual-elements').fadeOut(300);
        $('.visual-screen[data-id="2"]').slideUp(300);
        $('.visual-screen[data-id="1"]').slideDown(300);
        $('.visual-screen[data-id="1"] .visual-elements').fadeIn(500);

    });

});