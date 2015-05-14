<?php
	$novosti = glob('novosti/*.txt');
	rsort($novosti);
	
	foreach($novosti as $n){
		$brnovosti = 0;
		
		$novost = fopen($n, "r"); //file
		$linije = array(); //members
		
		while(!feof($novost)){
			$linije[] = fgets($novost);
		}
		
		$datum = $linije[0];
		$autor = $linije[1];
		$naslov = $linije[2];
		$slika = str_replace(PHP_EOL, '', $linije[3]);
		//$slika = str_replace("/", "//", $slika);
		$tekst = '';
		for($i=4 ; $i<count($linije); $i++){
			if(str_replace(PHP_EOL, '', $linije[$i]) != "--") {
				$tekst = $tekst.$linije[$i]."<br>";
			}
			else if(str_replace(PHP_EOL, '', $linije[$i]) == "--") {
				$kraj = $i; //trebat ce za detaljnije
				break;
			}
		}
		
		$kraj = $kraj+1;
		$tekst_detaljno = '';
		for($j=$kraj; $j<count($linije); $j++){
			$tekst_detaljno = $tekst_detaljno.$linije[$j]."<br>";
		}
		
		/*$prikazi = $prikazi.'<div class="novosti_konkurs">
							<div class="odbrana_slika">'.$slika.'</div>
							<h4>'.$naslov.'</h4>
							<h5> Napisala '.$autor.' - '.$datum.'</h5>
							<p>'.$tekst.'</p>
							<a href="#"> Detaljnije... </a>
							</div>';*/
		$nema = false;
		if($tekst_detaljno == '')
			$nema = true;
		
		$naslovv = str_replace(PHP_EOL, '', $naslov);
		$autorr = str_replace(PHP_EOL, '', $autor);
		$datumm = str_replace(PHP_EOL, '', $datum);
		$slikaa = str_replace(PHP_EOL, '', $slika);
		$tekstt = str_replace(PHP_EOL, '', $tekst);
		$t_detaljno = str_replace(PHP_EOL, '', $tekst_detaljno);
		
		if(!$nema){
			echo '<div class="novosti_konkurs">
								<div class="odbrana_slika" style="background-image: url('.$slika.');"></div>
								<h4>'.$naslov.'</h4>
								<h5> Napisala '.$autor.' - '.$datum.'</h5>
								<p>'.$tekst.'</p>
								<a href="#" onclick="detaljnije_ucitaj(\''.$naslovv.'\',\''.$autorr.'\',\''.$datumm.'\',\''.$slikaa.'\',\''.$tekstt.'\',\''.$t_detaljno.'\')"> Detaljnije... </a>
								<!-- <a href="#" onclick="detaljnije_ucitaj()"> Detaljnije... </a> -->
								</div>';
		}
		else if($nema){
			echo '<div class="novosti_konkurs">
								<div class="odbrana_slika" style="background-image: url('.$slika.');"></div>
								<h4>'.$naslov.'</h4>
								<h5> Napisala '.$autor.' - '.$datum.'</h5>
								<p>'.$tekst.'</p>
								<a href="#"></a>
								</div>';
		}
							
		/*echo '<div class="novosti_konkurs">
							<div class="odbrana_slika">'.$slika.'</div>
							<h4>'.$naslov.'</h4>
							<h5> Napisala '.$autor.' - '.$datum.'</h5>
							<p>'.$tekst.'</p>
							<a href="#"> Detaljnije... </a>
							</div>';*/
	}
	fclose($novost);
?>