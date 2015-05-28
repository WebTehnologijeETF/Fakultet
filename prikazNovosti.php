<?php
	
	$veza = new PDO("mysql:dbname=fakultet;host=localhost;charset=utf8", "root", ""); //dodati usera?
    $veza->exec("set names utf8");
	$rezultat = $veza->query("select id, naslov, tekst, autor, UNIX_TIMESTAMP(vrijeme) vrijeme2, detaljnije, slika from novost order by vrijeme desc");
	 if (!$rezultat) {
          $greska = $veza->errorInfo();
          print "SQL greška: " . $greska[2];
          exit();
     }
	 
	 foreach ($rezultat as $novost) {
		$brKomentara = $veza->query("select count(*) from komentar where vijest=".$novost['id']);//jel ovdje propust?
		$broj = $brKomentara->fetchColumn();
		if (!$brKomentara) {
				$greska2 = $veza->errorInfo();
				print "SQL greška: " . $greska2[2];
				exit();
		}
	 
		 print '<div class="novosti_konkurs">
				<div class="odbrana_slika" style="background-image: url('.$novost['slika'].');"></div>
				<h4>'.$novost['naslov'].'</h4>
				<h5> Napisala '.$novost['autor'].' - '.date("d.m.Y. h:i:s", $novost['vrijeme2']).'</h5>
				<p>'.$novost['tekst'].'</p>
				<a href="komentariNaNovost.php?id='.$novost['id'].'">'.$broj.' komentara</a>';
		if($novost['detaljnije'] != null)
				print '<a href="detaljnijeNovost.php?id='.$novost['id'].'"> Detaljnije... </a>';
		else print '<a href="#"></a>';
				'</div>';
	}
	
	
?>