<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

<?php

$name = "$name";
$subject ="$subject"; 
$message="Date: $date message: $message";
$date = "$date";
$mail_from="$email"; 
$header="from: $name <$mail_from>";


$to ="andreistirb@yahoo.com";
$send_contact=mail($to,$subject,$message,$header);

if($send_contact){
echo "Thank you for visiting us!";
}
else {
echo "ERROR";
}
?>

</body>
</html>