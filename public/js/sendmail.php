<?php

/*if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}*/


    $email_to = 'artem@yes-idea.ru'; // test
    
    
    
    
    
    $name = $_POST['fio'];
    $tel = $_POST['tel'];
    // $email = $_POST['email'];
    // $textmsg = $_POST['textmsg'];
    
    
    
    
    // $subject_title = $_POST['subject-title'];

    
    
    $subject = 'Форма с сайта Тандем';
    $msg = 
"Имя: $name\r\n<br />
Телефон: $tel\r\n<br />
";
    
    // if( !empty($email) ){
    //     $msg.="Email: $email\r\n<br />";
    // }
    
    // if( !empty($textmsg) ){
    //     $msg.="Сообщение: $textmsg\r\n<br />";
    // }
    

    
    /* ------------ !!!!!!!!!!!!!!!!!!!
                            if( !empty($subject_title) ){
                                $subject.=" - $subject_title\r\n";
                            }
    
    */

    

    if( (empty($name)) && (empty($tel)) ){
        return 0;
    }
    
    //$headers  = "From: $email\r\n";
    //$headers .= "Reply-To: $email\r\n";
    $headers = "Content-Type: text/html; charset=UTF-8";
    
    if(mail($email_to, $subject, $msg, $headers)){
        echo 'sent';
    }else{
        echo 'failed';
    }

?>