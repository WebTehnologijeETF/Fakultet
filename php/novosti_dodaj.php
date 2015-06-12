
	<div id="zdodaj">
		<h3>Dodaj novost</h3> 	
	
		<div id="Zforma">
		<!--
			<form action="servisiNovosti.php" method="POST">
			-->
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
					<textarea name="tekst-novost" rows="10" cols="61" id="tekst-novost"></textarea>
			</div>
			<br>
			<div id="detaljnoNovosti">
					<label> Unesite detaljniji tekst: </label><br> 
					<textarea name="detaljno-novost" rows="10" cols="61" id="detaljno-novost"></textarea>
			</div>
			<div id="dugmeNovost">
				<input type="button" name="salji" value="Dodaj" onclick="novostDodaj(); return false;"> <!-- bilo submit i bez onclick-->
			</div>
			</form>
		</div>
	</div>
