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
		<h3>Dodaj novost</h3> 
		
<?php
			$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", "");
			$veza->exec("set names utf8");
			
			if (isset($_POST['salji'])){
				$autorN = htmlentities($_POST['autor'], ENT_QUOTES);
				$naslovN = htmlentities($_POST['naslov'], ENT_QUOTES);
				$slikaN = htmlentities($_POST['slikaN'], ENT_QUOTES);
				$tekstN = htmlentities($_POST['tekst-novost'], ENT_QUOTES);
				$detaljnoN = htmlentities($_POST['detaljno-novost'], ENT_QUOTES);

				$novost = $veza->query("insert into novost set naslov='".$naslovN."', autor='".$autorN."', tekst='".$tekstN."', detaljnije='".$detaljnoN."', slika='".$slikaN."'");
				if (!$novost) {
					  $greska = $veza->errorInfo();
					  print "SQL greška: " . $greska[2];
					  exit();
				 }
			}
			
			
		?>	
	
	
		<div id="Zforma">
			<form action="" method="POST">
			<div id="naslovNovosti">
				<label for="naslov"> Naslov: </label>
				<input type="text" name="naslov" id="naslov">
			</div>
			<br>
			<div id="autorNovosti">
				<label for="autor"> Autor: </label>
				<input type="text" name="autor" id="autor">
			</div>
			<br>
			<div id="slikaNovosti">
				<label for="slikaN"> Slika: </label>
				<input type="text" name="slikaN" id="slikaN">
			</div>
			<br>
			<div id="tekstNovosti">
					<label> Unesite tekst: </label><br> 
					<textarea name="tekst-novost" rows="10" cols="61"></textarea>
			</div>
			<br>
			<div id="detaljnoNovosti">
					<label> Unesite detaljniji tekst: </label><br> 
					<textarea name="detaljno-novost" rows="10" cols="61"></textarea>
			</div>
			<div id="dugmeNovost">
				<input type="submit" name="salji" value="Dodaj"> 
			</div>
			</form>
		</div>
	</div>
	
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>