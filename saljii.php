<?php
	/*$imePrezime = $_POST['ime'];
	$eemail = $_POST['eemail'];
	//tip poruke?
	$poruka = $_POST['upit'];*/
	
	$imePrezime = htmlentities($_POST['ime'], ENT_QUOTES);
	$eemail = htmlentities($_POST['eemail'], ENT_QUOTES);
	$mjesto = htmlentities($_POST['mjestoo'], ENT_QUOTES);
	$pbroj = htmlentities($_POST['pbr'], ENT_QUOTES);
	$tip = htmlentities($_POST['tipPoruke'], ENT_QUOTES); //tip poruke?
	$poruka = htmlentities($_POST['upit'], ENT_QUOTES); //? 

	ini_set("SMTP", "webmail.etf.unsa.ba");
	ini_set("smtp_port", "25");
	ini_set("sendmail_from", "dahmic1@etf.unsa.ba");
	$headers = "From: ".$eemail.PHP_EOL;
	$headers .= "Cc: iprazina1@etf.unsa.ba".PHP_EOL; //ostavi sad za sad mne u cc da vidimo radi li :P
	$headers .= "Content-Type: text/html; charset=utf-8".PHP_EOL;
	$subject = "Kontakt - ".$tip.PHP_EOL; //a ovdje ne bi bilo lose da napises Kontakt - pitanje ili kontakt - sugestija :P
	$message = $poruka;
	
	mail("dahmic1@etf.unsa.ba", $subject, $message, $headers);
	echo "Mail poslan!";
?>