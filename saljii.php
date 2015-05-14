<?php
	
	$imePrezime = htmlentities($_POST['ime'], ENT_QUOTES);
	$eemail = htmlentities($_POST['eemail'], ENT_QUOTES);
	$mjesto = htmlentities($_POST['mjestoo'], ENT_QUOTES);
	$pbroj = htmlentities($_POST['pbr'], ENT_QUOTES);
	$tip = htmlentities($_POST['tipPoruke'], ENT_QUOTES);
	$poruka = htmlentities($_POST['upit'], ENT_QUOTES); 

	ini_set("SMTP", "webmail.etf.unsa.ba");
	ini_set("smtp_port", "25");
	ini_set("sendmail_from", "dahmic1@etf.unsa.ba");
	$headers = "From: ".$eemail.PHP_EOL;
	$headers .= "Cc: iprazina1@etf.unsa.ba".PHP_EOL;
	$headers .= "Content-Type: text/html; charset=utf-8".PHP_EOL;
	$subject = "Kontakt - ".$tip.PHP_EOL;
	$message = $poruka;
	
	mail("dahmic1@etf.unsa.ba", $subject, $message, $headers);
	echo "Mail poslan!";
?>