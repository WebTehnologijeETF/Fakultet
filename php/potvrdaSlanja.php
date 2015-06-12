	<?php
	$imePrezime = htmlentities($_POST['ime'], ENT_QUOTES);
	$eemail = htmlentities($_POST['eemail'], ENT_QUOTES);
	$mjesto = htmlentities($_POST['mjestoo'], ENT_QUOTES);
	$pbroj = htmlentities($_POST['pbr'], ENT_QUOTES);
	$tip = htmlentities($_POST['tipPoruke'], ENT_QUOTES); //tip poruke?
	$poruka = htmlentities($_POST['upit'], ENT_QUOTES); //? 

	echo '<h4> Provjerite da li ste ispravno popunili kontakt formu </h4>';

	echo '<p> Ime i prezime: '.$imePrezime.' <br>
			  E-mail adresa: '.$eemail.' <br>
			  Mjesto: '.$mjesto.' <br>
			  Poštanski broj: '.$pbroj.' <br>
			  Tip poruke: '.$tip.' <br>
			  Poruka: '.$poruka.'<br>
		  </p>';
	
	$pitanjeSelected = '';
	$sugestijaSelected = '';
	
	if($tip == 'pitanje') {
		$pitanjeSelected = 'selected';
	} else if ($tip == 'sugestija') {
		$sugestijaSelected = 'selected';
	}

	echo '<h4> Da li ste sigurni da želite poslati ove podatke? </h4>
			<form method="post" action="php/saljii.php">
			<input hidden type="text" name="ime" value="'.$imePrezime.'" />
			<input hidden type="text" name="eemail" value="'.$eemail.'" />
			<input hidden type="text" name="mjestoo" value="'.$mjesto.'" />
			<input hidden type="text" name="pbr" value="'.$pbroj.'" />
			<select hidden name="tipPoruke">
				<option value="pitanje" '.$pitanjeSelected.'></option>
				<option value="sugestija" '.$sugestijaSelected.'></option>
			</select>
			<textarea hidden name="upit" rows="10" cols="61">'.$poruka.'</textarea>
			<input type="submit" value="Siguran sam">
			</form>';

	echo '<h4> Ako ste pogrešno popunili formu, možete ispod prepraviti unesene podatke: </h4>';
	?>

	<?php include 'php/ponovo_forma.php'; ?>