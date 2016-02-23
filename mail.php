<?php

if (isset($_POST['send'])) {
	$to = 'djchatelain@gmail.com';
	$subject = 'Message from DONCHATELAIN.ME';
	$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['description'];
	$success = mail($to, $subject, $message);
	// echo $message;
}


?>

<!DOCTYPE html>
<head>
	<title>Mail Confirmation</title>
</head>
<body>

	
	<h1>Thank You</h1>
	Your message has been sent.
	
	<h1>Oops!</h1>
	Sorry, there was a problem sending your message.
	

</body>
</html>