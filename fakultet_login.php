<?php
	session_start();
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
	$veza->exec("set names utf8");
	
	if(isset($_POST['login'])){
		 $error = '';
		 
		 $username = trim($_POST['username']);
		 $password = trim($_POST['password']);
		 if($username == '')
			$error .= 'Morate unijeti korisničko ime<br>';
		 if($password == '')
			$error .= 'Morate unijeti šifru<br>';
		 if($error == ''){
			 $rez = $veza->prepare('SELECT * FROM korisnik WHERE username = :username and password=md5(:password)');
			 $rez->bindParam(':username', $username);
			 $rez->bindParam(':password', $password);
			 $rez->execute();
			 $rezultati = $rez->fetch(PDO::FETCH_NUM);
			 if($rezultati > 0 ){
				 $_SESSION['username'] = $rezultati['username'];
				 header('location: fakultet_admin.php');
				 exit;
			 }
			 else {
				$error .= 'Pogrešni pristupni podaci<br>';
			 }
		 }
	}
	
	if(isset($_POST['generisi'])){
		$error = '';
		//$username = htmlentities($_POST['username'], ENT_QUOTES);
		$username = trim($_POST['username']);
		if($username == '')
			$error .= 'Morate unijeti korisničko ime<br>';
		$znakovi = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_";
		$sifra = substr(str_shuffle($znakovi), 0, 8);
		$hash = md5($sifra);
				
		$korisnik = $veza->query("update korisnik set password='".$hash."' where username='".$username."'");
		if (!$korisnik) {
			  $greska = $veza->errorInfo();
			  print "SQL greška: " . $greska[2];
			  exit();
		}
		else{
			ini_set("SMTP", "webmail.etf.unsa.ba");
			ini_set("smtp_port", "25");
			ini_set("sendmail_from", "dahmic1@etf.unsa.ba");
			$headers = "From: dahmic1@etf.unsa.ba";
			$headers .= "Content-Type: text/html; charset=utf-8".PHP_EOL;
			$subject = "Nova šifra";
			$message = "Vaša nova šifra je ".$sifra;
			mail("dahmic1@etf.unsa.ba", $subject, $message, $headers); //zasad nek salje meni
		}
	}
?>	
	
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> ITFakultet </title>
<link rel="stylesheet" type="text/css" href="stil.css">
<script type="text/javascript" src="ucitavanje.js"></script>
<script src="stablo.js"></script>
<script src="kontaktValidacija.js"></script>
<script src="zavrsniModifikacije.js"></script>
<script src="zavrsniPregledaj.js"></script>
</head>
<body>

<div class="okvir">
	<div id="zaglavlje">
		<h1> Fakultet </h1>
		<div id="login">
			<a href="fakultet_login.php"> Log in </a> 
		</div>
	</div>	
	<div class="glavni_meni">
		<ul>
			<li><a href="index.php">Početna</a></li> 
			<li><a href="#">O fakultetu</a></li>
			<li><a href="#" onclick="studij_ucitaj();return false;">Studij</a></li>
			<li><a href="#">Obavještenja</a></li>
			<li><a href="#" onclick="partneri_ucitaj();return false;">Partneri</a></li>
			<li class="zadnji_u_meniju"><a href="#" onclick="kontakt_ucitaj();return false;">Kontakt</a></li>
		</ul>
	</div>
	
	<div id="baner"></div>
	
	<div id="loginAdmin">
		<h3> Login </h3>		
		<?php
			 if(isset($error)){
				echo '<div style="color:#FF0000;text-align:center;font-size:12px;">'.$error.'</div>';
			 }
		 ?>
		<div id="loginForma">
			<form action="" method="POST"> 
				<div id="korisnicko">
					<label for="username"> Korisničko ime: </label>
					<input type="text" name="username" id="username">
				</div>
				<br>
				<div id="sifra">
					<label for="password"> Šifra: </label> 
					<input type="password" name="password" id="password">
				</div>
				<div id="loginDugme">
					<input type="submit" name="login" value="Login">
				</div>
			
			<div id="generisi">
				<p> U slučaju zaboravljene šifre, unesite svoje korisničko ime i kliknite sljedeće dugme: <input type="submit" name="generisi" value="Generiši šifru"></p>
				<p> Nova šifra će Vam biti poslana na e-mail.</p>
			</div>
			</form>
		</div>
	</div>
	
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>