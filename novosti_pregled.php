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
		<h3>Pregled novosti</h3> 
		
<?php
			$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", ""); //dodati usera?
			$veza->exec("set names utf8");
			
			$rezultat = $veza->query("select id, naslov, tekst, autor, UNIX_TIMESTAMP(vrijeme) vrijeme2, detaljnije, slika from novost");
			 if (!$rezultat) {
				  $greska = $veza->errorInfo();
				  print "SQL greška: " . $greska[2];
				  exit();
			 }
			 
			foreach ($rezultat as $novost){
				print '<div id="novost_detaljno">
				<p>'.$novost['naslov'].'<br>
				 Napisala: '.$novost['autor'].' - '.date("d.m.Y. h:i:s", $novost['vrijeme2']).'<br><br>
				 <div class="detaljno_slika" style="background-image: url('.$novost['slika'].');"></div>
				<br>'.$novost['tekst'].'<br><br>'.$novost['detaljnije'].'</p></div>
				<small>--------------------------------------------------------------------------------------------------------------------------
				</small><br>';
				print '<h4>Komentari na novost: </h4>';
				$komentari = $veza->query("select id, vijest, autor, tekst, UNIX_TIMESTAMP(vrijeme) vrijeme3, email from komentar where vijest=".$novost['id']." order by vrijeme asc");
				if (!$komentari) {
					  $greska = $veza->errorInfo();
					  print "SQL greška: " . $greska[2];
					  exit();
				}
				
				$brKomentara = $veza->query("select count(*) from komentar where vijest=".$novost['id']);//jel ovdje propust?
				$broj = $brKomentara->fetchColumn();
				if ($broj == 0) {
						print '<p>Nema komentara</p>
						<small>--------------------------------------------------------------------------------------------------------------------------
						</small><br>';
				}
				foreach ($komentari as $komentar) {
					print '<h4>'.$komentar['autor'].'</h4> - <a href="mailto:'.$komentar['email'].'"><small>'.$komentar['email'].'</small></a> - <small>'.date("d.m.Y. h:i:s", $komentar['vrijeme3']).'</small>
						<p>'.$komentar['tekst'].'</p>';
					
					print '<small>--------------------------------------------------------------------------------------------------------------------------
					</small><br><br>';
				}
			}
?>
		
			
	</div>
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>