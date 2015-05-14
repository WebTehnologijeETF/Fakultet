function naslovna_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_naslovna.php", true);
	ajax.send();
}

function studij_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_studij.html", true);
	ajax.send();
}

function partneri_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_partneri.html", true);
	ajax.send();
}

function kontakt_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_kontakt.php", true);
	ajax.send();
}

function bachelor_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_bachelor.html", true);
	ajax.send();
}

function master_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "fakultet_master.html", true);
	ajax.send();
}

function zpregled_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "zavrsni_pregled.html", true);
	ajax.send();
}

function zdodaj_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "zavrsni_dodaj.html", true);
	ajax.send();
}

function detaljnije_ucitaj(naslov, autor, datum, slika, tekst, detaljniji_tekst)
//function detaljnije_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "novosti_detaljnije.php?naslov="+naslov+"&autor="+autor+"&datum="+datum+"&slika="+slika+"&tekst="+tekst+"&detaljniji_tekst="+detaljniji_tekst, true);
	//ajax.open("GET", "novosti_detaljnije.php?datum="+datum, true);
	//ajax.open("GET", "novosti_detaljnije.html", true);
	ajax.send();
}

function potvrdaSlanja_ucitaj()
{
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {// Anonimna funkcija
		if (ajax.readyState == 4 && ajax.status == 200)
			document.getElementById("stranica").innerHTML = ajax.responseText;
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("stranica").innerHTML = "Greska: nepoznat URL";
	}
	ajax.open("GET", "kontakt_forma_validacija.php", true);
	//ajax.open("GET", "novosti_detaljnije.php?datum="+datum, true);
	//ajax.open("GET", "novosti_detaljnije.html", true);
	ajax.send();
}
