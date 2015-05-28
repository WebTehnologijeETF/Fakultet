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
		<h3>Pregled korisnika</h3> 
		
<?php
			$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", ""); //dodati usera?
			$veza->exec("set names utf8");
			
			$rezultat = $veza->query("select username,email from korisnik");
			 if (!$rezultat) {
				  $greska = $veza->errorInfo();
				  print "SQL greška: " . $greska[2];
				  exit();
			 }
			 
			foreach ($rezultat as $korisnik) {
				 print '<div class="admin_korisnik">
				 <p>Korisničko ime: '.$korisnik['username'].'</p>
				 <p>Email: '.$korisnik['email'].'</p>
				 <form action="" method="POST">
				 <input type="submit" name="izmjena" value="Izmijeni">
				 <input type="submit" name="brisanje" value="Briši">
				 </form>
				 </div><br><br>';				 
			}
			
			$error = '';
			$pokaziFormu = false;
			
		?>
		
		<div id="skrivenaForma" <?php if(!$pokaziFormu) echo 'style="display: none;"' ?> >
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
		
		<div id="dugmeKorisnikOsvjezi">
			<input type="button" value="Osvježi" onclick=location.href='korisnik_pregled.php'>
		</div>
		
		<?php
			 if(isset($error)){
				echo '<div style="color:#FF0000;text-align:center;font-size:12px;">'.$error.'</div>';
			 }
		 ?>
			
	</div>
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>