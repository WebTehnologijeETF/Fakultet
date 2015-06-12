	
		
			<form method="post" action="php/kontakt_forma_validacija.php"> <!-- onsubmit="kontaktValidacija(); return false;" -->
			<div id="imePrezime">
				<label for="ime"> Vaše ime i prezime: </label>
				<input type="text" name="ime" id="ime" placeholder="Dina Ahmić" value="<?php 
																					if(isset($_REQUEST['ime'])) 
																						$imePrezime = htmlentities($_REQUEST['ime'], ENT_QUOTES);
																					print $imePrezime; ?> ">
				<?php
				if($imeP == 1)
					echo '<div class="validacija_slika" id="slika1"> </div>
					<p id="obavezno"> Ime i prezime moraju imati više od tri slova </p>';
				?>
			</div>
			<br>
			<div id="mail">
				<label for="eemail"> E-mail adresa: </label> 
				<input type="email" name="eemail" id="eemail" placeholder="dahmic1@etf.unsa.ba" value="<?php 
																						if(isset($_REQUEST['eemail'])) 
																							$eemail = htmlentities($_REQUEST['eemail'], ENT_QUOTES);
																						print $eemail; ?> ">
				<?php
				if($mail == 1)
					echo '<div class="validacija_slika" id="slika2"> </div>
					<p id="obaveznoo"> Obavezno unijeti validan email </p>';
				?>
			</div>
			<br>
			<div id="mjestoValidacija">
				<label for="mjestoo"> Mjesto: </label>
				<input type="text" name="mjestoo" id="mjestoo" placeholder="Sarajevo" value="<?php
																						if(isset($_REQUEST['mjestoo'])) 
																							$mjesto = htmlentities($_REQUEST['mjestoo'], ENT_QUOTES);
																						print $mjesto; ?> ">
				<div class="validacija_slika" id="slika4"> </div>
				<p id="obaveznoM"> </p>
			</div>
			<br>
			<div id="PBValidacija">
				<label for="pbr"> Poštanski broj: </label>
				<input type="text" name="pbr" id="pbr" placeholder="71000" value="<?php
																			if(isset($_REQUEST['pbr'])) 
																				$pbroj = htmlentities($_REQUEST['pbr'], ENT_QUOTES);
																			print $pbroj; ?> ">
				<div class="validacija_slika" id="slika5"> </div>
				<p id="obaveznoPB"> </p>
			</div>
			<br>
			<label for="biraj">	Odaberite tip poruke: </label>
				<select id="biraj" name="tipPoruke">
					<option value="pitanje" <?php if(isset($_REQUEST['tipPoruke']) && htmlentities($_REQUEST['tipPoruke'], ENT_QUOTES) == "pitanje") { echo "selected"; } ?>> Pitanje </option>
					<option value="sugestija" <?php if(isset($_REQUEST['tipPoruke']) && htmlentities($_REQUEST['tipPoruke'], ENT_QUOTES) == "sugestija") { echo "selected"; } ?>> Sugestija </option>
				</select>
			<br>
			<div id="pitanje">
				<label for="upit"> Unesite svoj komentar ili pitanje: </label><br> 
				<textarea id="upit" name="upit" rows="10" cols="61" placeholder="Poruka..." value=" "><?php 
																							if(isset($_REQUEST['upit'])) 
																								$poruka = htmlentities($_REQUEST['upit'], ENT_QUOTES);
																							print $poruka; ?></textarea>
				<?php
				if($poruka == 1)
					echo'<div class="validacija_slika" id="slika3"> </div>
					<p id="poruka"> Obavezno unijeti </p>';
				?>
			</div>
			<div id="dugme">
				<input type="submit" value="Pošalji"> 
			</div>
			</form>
	