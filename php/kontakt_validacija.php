<?php
	$prikaz_forme = '';
	
	$imeP = 0;
	$mail = 0;
	$poruka = 0;
	$imePRegex = '/^([A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?[\s][A-ZŠĐČĆŽ][a-zšđčćž][a-zšđčćž]([a-zšđčćž]+)?)+$/';
	$mailRegex = '/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/';
	$validna = 0;
	
	if(isset($_POST['ime'])){
		$imePrezime = $_POST['ime'];
		if($imePrezime != "" && preg_match($imePRegex, $imePrezime)){
			$validna = 0;
			$imeP = 0;
		}
		else{
			$validna = 1;
			$imeP = 1;
		}
	}
	
	if(isset($_POST['eemail'])){
		$eemail = $_POST['eemail'];
		if($eemail != "" && preg_match($mailRegex, $eemail)){
			$validna = 0;
			$mail = 0;
		}
		else{
			$validna = 1;
			$mail = 1;
		}
	}
	
	if(isset($_POST['upit'])){
		if($_POST['upit'] == ""){
			$validna = 1;
			$poruka = 1;
		}
	}
	
	if($validna == 1)
		$prikaz_forme = 'php/ponovo_forma.php';
	else if($validna == 0)
		$prikaz_forme ='php/potvrdaSlanja.php';
?>