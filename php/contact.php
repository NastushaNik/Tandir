<?php
header('Content-type: application/json');

if($_POST)
{
    $to_email       = "NastushaNik@gmail.com"; //Recipient email, Replace with own email here
   
    

    //Sanitize input data using PHP filter_var().
    $user_name      = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
    $user_email     = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone_number   = filter_var($_POST["phone"], FILTER_SANITIZE_NUMBER_INT);
    $message        = filter_var($_POST["tandirName"], FILTER_SANITIZE_STRING);

   
    //email subject
    $subject ='Заявка на перезвон';

    //email body
    $message_body = $message."\r\n\r\nName :".$user_name."\r\n\r\nPhone Number : ". $phone_number ;
   
    //proceed with PHP email.
    $headers = 'From: '.$user_name.'<'.$user_email.'>'."\r\n" .
    'Reply-To: '.$user_name.'<'.$user_email.'>' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
   
    $send_mail = mail($to_email, $subject, $message_body, $headers);
   if(!$send_mail)
    {
        //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
        $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
        die($output);
    }else{
        header("Location: http://portfolio.anastasiiadnishchenko.in.ua/"); /* Redirect browser */
        exit;
    }
   
}


?>
