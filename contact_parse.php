<?php

$senderName   = $_POST['name'];
$senderEmail     = $_POST['email'];
$senderSubject  = $_POST['subject'];
$senderDate     = $_POST['date'];
$senderMessage = $_POST['message'];


$senderName   = stripslashes($senderName);
$senderEmail     = stripslashes($senderEmail);
$senderSubject = stripslashes($senderSubject);
$senderMessage   = stripslashes($senderMessage); 


$to = "andreistirb@yahoo.com";			 
$from = "$senderEmail";


$message = "Message from your website:

Their Name:   $senderName 

Their Email:   $senderEmail

Date:		$senderDate

Their Message is below: 

$senderMessage";

echo $message;


$headers = "From: $from\r\n";
$headers .= "Content-type: text\r\n"; 
$to = "$to";
	if ($_POST['submit']){
    	mail($to, $senderSubject, $message, $headers);
	}

exit();
?>