function zavrsniDodaj()
{	
	var naziv = document.getElementById('naziv').value;
	var naziv1 = document.getElementById('naziv');
	var opis = document.getElementById('opis').value;
	var opis1 = document.getElementById('opis');
	var slika = document.getElementById('slikaZ').value;
	var slika1 = document.getElementById('slikaZ');
	
	if(naziv == null || naziv == ''){
		naziv1.style.borderColor = "red";
		naziv1.focus();
		document.getElementById('slikaZZ').style.display = "inline-block";
		document.getElementById('obavezno2').style.display = "inline";
	}
	else{
		naziv1.style.borderColor = "";
		document.getElementById('obavezno2').style.display="none";
		document.getElementById('slikaZZ').style.display="none";
	}
	
	var ajax = new XMLHttpRequest();
	
	var proizvod = {
		naziv: naziv,
		opis: opis,
		slika: slika
	};
	
	var test = JSON.stringify(proizvod);
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Dodali ste završni rad!");
			naziv1.value = "";
			opis1.value = "";
			slika1.value = "";
		}			
	}
			
	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("akcija=dodavanje&brindexa=15626&proizvod=" + test);
}

function zavrsniBrisi(idProizvoda)
{	
	var ajax = new XMLHttpRequest();
	
	var proizvod = {
		id: idProizvoda
	};
	
	var test = JSON.stringify(proizvod);
	
	/*ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			
		}			
	}*/
			
	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("akcija=brisanje&brindexa=15626&proizvod=" + test);
}