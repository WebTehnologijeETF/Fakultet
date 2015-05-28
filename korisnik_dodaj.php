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
	<div id="zdodaj">
		<h3>Dodaj korisnika</h3> 
		
<?php
			$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", ""); 
			$veza->exec("set names utf8");
			
			if (isset($_POST['salji'])){
				$korisnicko = htmlentities($_POST['korisnickoIme'], ENT_QUOTES);
				$sifra = htmlentities($_POST['sifra'], ENT_QUOTES);
				$mail = htmlentities($_POST['korisnikEmail'], ENT_QUOTES);
				$hash = md5($sifra);
				
					$korisnik = $veza->query("insert into korisnik set username='".$korisnicko."', password='".$hash."', email='".$mail."'");
					if (!$korisnik) {
						  //$greska = $veza->errorInfo();
						  print "Korisničko ime već postoji";
						  //print "SQL greška: " . $greska[2];
						  exit();
					 }
			}
			
			
		?>	
	
	
		<div id="Zforma">
			<form action="" method="POST">
			<div id="korisnikIme">
				<label for="korisnickoIme"> Korisničko ime: </label>
				<input type="text" name="korisnickoIme" id="korisnickoIme">
			</div>
			<br>
			<div id="korisnikSifra">
				<label for="sifra"> Šifra: </label>
				<input type="text" name="sifra" id="sifra">
			</div>
			<br>
			<div id="korisnikMail">
				<label for="korisnikEmail"> Email: </label>
				<input type="text" name="korisnikEmail" id="korisnikEmail">
			</div>
			
			<div id="dugmeKorisnik">
				<input type="submit" name="salji" value="Dodaj"> 
			</div>
			</form>
		</div>
	</div>
	
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>