// import '../js/jquery.maskedinput'
// $(function($){
//     $('input[name="tel"]').mask("+7 (999) 999 99 99");
// });


$('.myform .myform-submit').on('click', function(e){
    e.preventDefault();
    
    wrapper = $(this).parents('.myform');

    var error = false;
    var fio = wrapper.find('input[name="fio"]').val();
    var tel = wrapper.find('input[name="tel"]').val();
    
    

    if( fio.length == 0 ){
        var error = true;
        wrapper.find('input[name="fio"]').addClass('input-error-red');
    } else {
        wrapper.find('input[name="fio"]').removeClass('input-error-red');
    }
    
    
    if( tel.length == 0 ){
        var error = true;
        wrapper.find('input[name="tel"]').addClass('input-error-red');
    } else {
        wrapper.find('input[name="tel"]').removeClass('input-error-red');
    }



    if(error == false){
        data = wrapper.find(':input').serialize();
        $.post("js/sendmail.php", data, function(result){
            // console.log(result);
            // console.log(data);
            wrapper.css({
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center',
                'box-sizing': 'border-box',
                'padding-bottom': '60px',
                'height': wrapper.height() + 'px'
            });
        });
        wrapper.html('<div class="good-mail"><div class="mbig">Спасибо за сообщение!</div><div class="msmall">В ближайшее время мы свяжемся с Вами.</div></div>');
        
        // goals_name = wrapper.find('input[name="goals_name"]').val();
        
        // if( goals_name=='zakaz_zvonok' ){
        //     yaCounter00000.reachGoal('zakaz_zvonok');
        //     // ga (‘send’, ‘event’, ‘submit’, ‘btn_podpiska’);
        //     // ga('send', 'event', 'submit', 'zakaz_zvonok');
        // }
        
    }
    
});




