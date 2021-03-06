<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title> ITFakultet </title>
<link rel="stylesheet" type="text/css" href="css/stil.css">
<script type="text/javascript" src="js/ucitavanje.js"></script>
<script src="js/stablo.js"></script>
<script src="js/kontaktValidacija.js"></script>
<script src="js/zavrsniModifikacije.js"></script>
<script src="js/zavrsniPregledaj.js"></script>
<script src="js/novostiModifikacije.js"></script>
<script src="js/komentariModifikacije.js"></script>
<script src="js/korisniciModifikacije.js"></script>
</head>

<body onload="korisniciPregledajSve();return false;">
<div class="okvir">
	<div id="zaglavlje">
		<h1> Fakultet </h1>
		<div id="login">
			<a href="php/fakultet_login.php"> Log in </a>
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
		<h3>Pregled korisnika</h3> 
		
		<div id="pregled_svih_korisnika"></div>

		<!--
		<div id="skrivenaForma"  >
			<form action="" method="POST">
			<div id="izmjenaIme">
				<label for="korisnickoIme"> Korisničko ime: </label>
				<input type="text" name="korisnickoIme" id="korisnickoIme">
			</div>
			<br>
			<div id="izmjenaMail">
				<label for="korisnikEmail"> Email: </label>
				<input type="text" name="korisnikEmail" id="korisnikEmail">
			</div>
			<div id="dugmeKorisnikIzmjena">
				<input type="submit" name="saljiIzmjenu" value="Izmijeni"> 
			</div>
		</div>
		-->
		<div id="dugmeKorisnikOsvjezi">
			<input type="button" value="Osvježi" onclick=location.href='php/korisnik_pregled.php'>
		</div>
		
			
	</div>
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>