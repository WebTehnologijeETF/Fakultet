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

<body>
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
	
	<div id="komentari"> 
		<h3> Komentari </h3>
		<?php
			$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", ""); 
			$veza->exec("set names utf8");
			
			if (isset($_POST['salji'])){
				$tekstK = htmlentities($_POST['tekst-komentar'], ENT_QUOTES);
				$autorK = htmlentities($_POST['ime'], ENT_QUOTES);
				$mailK = htmlentities($_POST['eemail'], ENT_QUOTES);
				$idVijesti = $_REQUEST['id'];

				$kom = $veza->query("insert into komentar set vijest=".$idVijesti.", autor='".$autorK."', tekst='".$tekstK."', email='".$mailK."'");
				if (!$kom) {
					  $greska = $veza->errorInfo();
					  print "SQL greška: " . $greska[2];
					  exit();
				 }
			}
				
				$rezultat = $veza->query("select id, naslov, tekst, autor, UNIX_TIMESTAMP(vrijeme) vrijeme2, detaljnije, slika from novost where id=".$_REQUEST['id']);
				 if (!$rezultat) {
					  $greska = $veza->errorInfo();
					  print "SQL greška: " . $greska[2];
					  exit();
				 }

				$novost = $rezultat->fetch();
			 
				$komentari = $veza->query("select id, vijest, autor, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme3, email from komentar where vijest=".$novost['id']." order by vrijeme asc");
				if (!$komentari) {
					  $greska = $veza->errorInfo();
					  print "SQL greška: " . $greska[2];
					  exit();
				}
				
				foreach ($komentari as $komentar) {
					print '<h4>'.$komentar['autor'].'</h4> - <a href="mailto:'.$komentar['email'].'"><small>'.$komentar['email'].'</small></a> - <small>'.date("d.m.Y. h:i:s", $komentar['vrijeme3']).'</small>
						<p>'.$komentar['tekst'].'</p>
						<br>';
				}
			
		?>
		<div id="komentariNazad">
			<a href="index.php"> Nazad na početnu </a>
		</div>
		
		<br><br>
		<h4> Novi komentar </h4>
		<br><br>
		<div id="komentarForma">
			<form action="" method="POST">
				<div id="autor">
					<label for="ime"> Autor: </label>
					<input type="text" name="ime" id="ime">
				</div>
				<br>
				<div id="mail2">
					<label for="eemail"> E-mail adresa: </label> 
					<input type="email" name="eemail" id="eemail">
				</div>
				<div id="pitanje">
					<label for="upit"> Unesite komentar: </label><br> 
					<textarea name="tekst-komentar" rows="10" cols="61" id="tekst-komentar"></textarea> 
				</div>
				<div id="dugmeNovost">
					<input type="submit" name="salji" value="Pošalji"> 
				</div>
			</form>
		</div>
	</div>
	
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>