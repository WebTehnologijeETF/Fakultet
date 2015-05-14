
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

<body onload="naslovna_ucitaj();return false;">

<div class="okvir">
	<div id="zaglavlje">
		<h1> Fakultet </h1>
		<div id="login">
			<a href="#"> Log in </a>
		</div>
	</div>

	<div class="glavni_meni">
		<ul>
			<li><a href="#" onclick="naslovna_ucitaj();return false;">Početna</a></li>
			<li><a href="#">O fakultetu</a></li>
			<li><a href="#" onclick="studij_ucitaj();return false;">Studij</a></li>
			<li><a href="#">Obavještenja</a></li>
			<li><a href="#" onclick="partneri_ucitaj();return false;">Partneri</a></li>
			<li class="zadnji_u_meniju"><a href="#" onclick="kontakt_ucitaj();return false;">Kontakt</a></li>
		</ul>
	</div>
	
	<div id="baner"></div>
		<div id="kontakt">
			<h3>Kontaktirajte nas</h3>
			<?php include "kontakt_validacija.php" ?>
			<div id="forma">
				<?php include $prikaz_forme; ?>
			</div>
		</div>
		
	<div id="podnozje"><p>Copyright &copy; IT Fakultet 2015.</p></div>
</div>	
</body>
</html>