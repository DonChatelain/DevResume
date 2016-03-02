<?php

if (isset($_POST['send'])) {
	$to = 'djchatelain@gmail.com';
	$subject = 'Message from DONCHATELAIN.ME';
	$message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	$message .= 'Business: ' . $_POST['business'] . "\r\n\r\n";
	$message .= 'Email: ' . $_POST['email'] . "\r\n\r\n";
	$message .= 'Phone: ' . $_POST['phone'] . "\r\n\r\n";
	$message .= 'Website: ' . $_POST['website'] . "\r\n\r\n";
	$message .= 'Message: ' . $_POST['description'];
	$success = mail($to, $subject, $message);
	// echo $message;

	// if ($success) {
	// 	header('location:index.html');
	// }
}


?>

<!DOCTYPE html>
<head>
	<title>Mail Confirmation</title>
	<link href="./css/normalize.css" rel="stylesheet" type="text/css" />
	<link href="./css/base.css" rel="stylesheet" type="text/css" />
	<link href="./css/modules.css" rel="stylesheet" type="text/css" />
	<link href="./css/state.css" rel="stylesheet" type="text/css" />
	<meta http-equiv="refresh" content="3;url=./index.html" />
</head>
<body>

	<?php
	if ($success) {
	?>
		<section class="centered first">
			<h3>Thank You</h3>
			<p>Your message has been sent.</p>
			<p>Redirecting in 3 seconds...</p>
			<a href="donchatelain.me">Back to DONCHATELAIN.ME</a>
		</section>
	<?php
	} else {
	?>
		<section class="centered first">
			<h3>Oops!</h3>
			<p>Sorry, there was a problem sending your message.</p>
			<p>Redirecting in 3 seconds...</p>
			<a href="donchatelain.me">Back to DONCHATELAIN.ME</a>
		</section>
	<?php
	}
	?>
	

</body>
</html>