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
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Izbrisali ste završni rad! Osvježite stranicu!");
		}			
	}
			
	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("akcija=brisanje&brindexa=15626&proizvod=" + test);
}

function zavrsniUredi(index)
{	
	zuredi_ucitaj(index);
}

function zuredi_ucitaj(indexNiza)
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200) {
			document.getElementById("stranica").innerHTML = ajax.responseText;
			
			document.getElementById('idZavrsnogUredi').value = proizvodi[indexNiza].id;
			document.getElementById('urediID').style.display = "none";
			document.getElementById('nazivZavrsnogUredi').value = proizvodi[indexNiza].naziv;
			document.getElementById('opisZavrsnogUredi').value = proizvodi[indexNiza].opis;
			document.getElementById('slikaZavrsnogUredi').value = proizvodi[indexNiza].slika;
		}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "html/zavrsni_uredi.html", true);
	ajax.send(); 
}

function zavrsniUrediKonacno()
{	
	var idZavrsnog = document.getElementById('idZavrsnogUredi').value;
	var naziv = document.getElementById('nazivZavrsnogUredi').value;
	var naziv1 = document.getElementById('nazivZavrsnogUredi');
	var opis = document.getElementById('opisZavrsnogUredi').value;
	var opis1 = document.getElementById('opisZavrsnogUredi');
	var slika = document.getElementById('slikaZavrsnogUredi').value;
	var slika1 = document.getElementById('slikaZavrsnogUredi');
	
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
		id: idZavrsnog,
		naziv: naziv,
		opis: opis,
		slika: slika
	};
	
	var test = JSON.stringify(proizvod);
	
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200){
			alert("Izmijenili ste završni rad!");
			naziv1.value = "";
			opis1.value = "";
			slika1.value = "";
		}			
	}
	
	ajax.open("POST", "http://zamger.etf.unsa.ba/wt/proizvodi.php", true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("akcija=promjena&brindexa=15626&proizvod=" + test);
}
