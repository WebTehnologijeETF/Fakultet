<div id="detaljno"> 
		<h3> Novosti </h3>
		
		<?php
			echo '<div id="novost_detaljno">';
			echo '<p>'.$_GET['naslov'].'<br>';
			echo 'Napisala: '.$_GET['autor'].' - '.$_GET['datum'].'<br><br>';
			echo '<div class="detaljno_slika" style="background-image: url('.$_GET['slika'].');"></div>'; //odbrana_slika
			//echo $_GET['slika'].'<br><br>';
			echo $_GET['tekst'].'<br><br>';
			echo $_GET['detaljniji_tekst'];
			echo '</p></div>';
			/*$naslov = htmlentities($_GET['naslov'], ENT_QUOTES);
			print("<p>".$naslov."</p>");*/
		?>

</div>
