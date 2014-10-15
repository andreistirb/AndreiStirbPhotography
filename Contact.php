<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Contact</title>
<link rel="stylesheet" type="text/css" href="Home.css" />
<link rel="stylesheet" href="jquery-ui-1.10.4.custom/css/ui-lightness/jquery-ui-1.10.4.custom.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="contact_parse.php"></script>
<script>
  $(function() {
    $( "#datepicker" ).datepicker({ minDate: +3});
  });
  </script>
</head>

<body>
<div id="titlu"><a href="Home.html">Andrei Stirb Photography</a></div>
<div id="meniu">
<a href="Home.html">home</a><br />
<a href="Gallery.html">gallery</a><br />
<a href="http://andreistirb.blogspot.com" 
	target="_blank">blog</a><br />
<a href="About.html">about</a><br />
<a href="Contact.html">contact</a><br />
<a href="http://www.redbubble.com/people/andreistirb" 
	target="_blank">prints</a><br />

</div>

<div class="container_page">
<div id="subtitlu">Contact</div>
<form method="post" action="contact_parse.php">
                <label>Name</label>
                <input name="name" placeholder="Type name here" required="required">
                <label>Email</label>
                <input name="email" type="email" placeholder="Type email here" required="required">
                <label>Date</label>
                <input name="date" id="datepicker" placeholder="Type date here">
                <label>Subject</label>
                <input name="subject" placeholder="Type subject here">
                <label>Message</label>
                <textarea name="message" placeholder="Type message here" required="required"></textarea>
                <input id="submit" name="submit" type="submit" value="Send">
            </form>

</div>
</body>
</html>
